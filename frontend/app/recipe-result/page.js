'use client';

import React, { useEffect, useState } from 'react';
import { Card, Divider } from "@nextui-org/react";
import RecipeImage from './RecipeImage';
import Ingredients from './Ingredients';
import RecipeHeader from './RecipeHeader';
import RecipeInstructions from './RecipeInstructions';
import { useRouter, useSearchParams } from 'next/navigation';
import Share from './Share';

// http:localhost:3000/recipe-result
export default function RecipePage() {
    const [recipe, setRecipe] = useState(null);
    const searchParams = useSearchParams();
    const [isMobile, setIsMobile] = useState(false);

    
    useEffect(() => {
        const updateMedia = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        updateMedia();
        window.addEventListener('resize', updateMedia);
        return () => window.removeEventListener('resize', updateMedia);
    }, []);

    // get specific recipe from backend
    useEffect(() => {
        const resultId = searchParams.get('result-id');
        if (resultId) {
            const fetchRecipe = async () => {
                try {
                    const response = await fetch(`http://localhost:5000/api/server/generated-recipes/${resultId}`);
                    if (!response.ok) {
                        throw new Error(`Error: ${response.statusText}`);
                    }
                    const recipeData = await response.json();

                    // Remove quotes from the recipeImage field
                    if (recipeData.recipeImage) {
                        recipeData.recipeImage = recipeData.recipeImage.replace(/^["'](.+)["']$/g, '$1');
                    }

                    setRecipe(recipeData);
                } catch (error) {
                    console.error("Failed to fetch recipe data:", error);
                }
            };

            fetchRecipe();
        }
    }, [searchParams]);

    if (!recipe) {
        return <p>Loading...</p>;
    }

    const handleSaveRecipe = () => {
        console.log("Recipe saved!");
    };

    const styles = {
        pageContainer: {
            display: isMobile ? 'none' : 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            backgroundColor: 'white',
            paddingTop: '100px',
            marginTop: '-90px',
            overflow: 'auto',
        },
        recipeContainer: {
            display: 'grid',
            gridTemplateColumns: '1fr 3fr',
            gap: '10px',
            maxWidth: '1200px',
            height: 'auto',
            width: '80%',
            borderRadius: '12px',
            padding: '10px',
            border: '2px solid #6D28D9',
        },
        leftSide: {
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
        },
        rightSide: {
            display: 'flex',
            flexDirection: 'column',
            maxHeight: '500px',
            border: '2px solid #f0f0f0',
            borderRadius: '8px',
        },
        mobileView: {
            display: isMobile ? 'block' : 'none',
        }
    };

    return (
        <div>
            <div style={styles.pageContainer}>
                <Card style={styles.recipeContainer}>
                    <div style={styles.leftSide}>
                        <RecipeImage src={recipe.recipeImage} alt="Recipe Image" />
                        <Ingredients ingredients={recipe.detailedIngredients} />
                        <Share instructions={recipe.instructions} ingredients={recipe.detailedIngredients} title={recipe.title} recipeId={searchParams.get('result-id')} />
                    </div>
                    <div style={styles.rightSide}>
                        <RecipeHeader title={recipe.title} onSave={handleSaveRecipe} />
                        <Divider />
                        <RecipeInstructions instructions={recipe.instructions} cookingTime={recipe.cookingTime} />
                    </div>   
                </Card>
            </div>
            <div style={styles.mobileView}>
                <div className="w-full flex justify-center items-center mb-4">
                    <Card className="w-[90%] gap-3">
                        <RecipeHeader title={recipe.title} onSave={handleSaveRecipe} />
                        <Divider/>
                        <div className="flex items-center justify-center w-[70%] mx-auto">
                            <RecipeImage src={recipe.recipeImage} alt="Recipe Image" className="object-cover w-full h-auto max-w-full"/>
                        </div>
                        <div className="flex items-center justify-center w-full mx-auto">
                            <Ingredients ingredients={recipe.detailedIngredients} />
                        </div>
                        <RecipeInstructions instructions={recipe.instructions} cookingTime={recipe.cookingTime} />
                        <Share instructions={recipe.instructions} ingredients={recipe.detailedIngredients} title={recipe.title} recipeId={searchParams.get('result-id')} />
                    </Card>
                </div>
        </div>
        </div>
    );
}
