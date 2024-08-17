'use client';

import React, { useState } from 'react';
import { Card, CardHeader, CardBody, Divider, Image } from "@nextui-org/react";

function RecipePhotoCard() {
    return (
        <Card style={{ maxWidth: '300px', minHeight: '180px', overflow: 'hidden' }}>
            <CardBody style={{ padding: 0, marginBottom: '0' }}>
                <Image
                    alt="Cookie"
                    className="object-cover rounded-xl"
                    src="/cookie.jpg"
                    width={300}
                    height={195}
                    style={{ objectFit: 'cover' }}
                />
            </CardBody>
        </Card>
    );
}

function IngredientsCard({ ingredients }) {
    const ingredientList = ingredients.split('\n').filter(item => item.trim() !== '');

    return (
        <Card style={styles.ingredientsCard}>
            <CardHeader>
                <h3 style={styles.ingredientsHeader}>Ingredients:</h3>
            </CardHeader>
            <Divider />
            <CardBody style={styles.cardBody}>
                {ingredientList.map((ingredient, index) => (
                    <React.Fragment key={index}>
                        <small>{ingredient}</small>
                        {index < ingredientList.length - 1 && <Divider />}
                    </React.Fragment>
                ))}
            </CardBody>
        </Card>
    );
}

function RecipeInstructionsCard({ title, instructions, onSave }) {
    return (
        <Card style={styles.recipeCard}>
            <CardHeader style={styles.recipeHeader}>
                <h2 style={styles.recipeTitle}>{title}</h2>
                <button style={styles.saveButton} onClick={onSave}>
                    <Image
                        src="/savebutton.png"
                        alt="Save Recipe"
                        width={50}
                        height={50}
                        style={{ height: 'auto', borderRadius: '8px' }}
                    />
                </button>
            </CardHeader>
            <Divider />
            <CardBody style={styles.cardBody}>
                <h3 style={styles.instructionsTitle}>Recipe Instructions</h3>
                <p style={styles.instructionsText}>{instructions}</p>
            </CardBody>
        </Card>
    );
}

export default function RecipePage() {
    const [recipe, setRecipe] = useState({
        title: "Chocolate Chip Cookies",
        ingredients: `1 cup all-purpose flour
        1/2 cup granulated sugar
        1/4 cup unsalted butter, softened
        1 pinch of salt,
        1 cup chocolate chips`,
        cookingTime: 25,
        instructions: `1. Preheat the oven to 350°F (175°C) and grease a 9-inch round cake pan or line it with parchment paper.
        2. In a medium bowl, whisk together the flour, baking powder, and salt.
        3. In a large bowl, cream the butter and sugar together until light and fluffy.
        4. Beat in the egg, one at a time, then add the vanilla extract.
        5. Gradually add the dry ingredients to the butter mixture, alternating with the milk. Mix until just combined.
        6. Fold in the chocolate chips, if using.
        7. Pour the batter into the prepared pan and smooth the top with a spatula.
        8. Put in the oven on bake for 25 minutes
        9. Serve with whipped cream and enjoy!`,
        recipeImage: "/cookie.jpg",
    });

    const handleSaveRecipe = () => {
        console.log("Recipe saved!");
    };

    return (
        <div style={styles.pageContainer}>
            <Card style={styles.recipeContainer}>
                <div style={styles.leftSide}>
                    <RecipePhotoCard />
                    <IngredientsCard ingredients={recipe.ingredients} />
                </div>
                <div style={styles.rightSide}>
                    <RecipeInstructionsCard title={recipe.title} instructions={recipe.instructions} onSave={handleSaveRecipe} />
                </div>
            </Card>
        </div>
    );
}

const styles = {
    pageContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: 'white',
        paddingTop: '100px'
    },
    recipeContainer: {
        display: 'grid',
        gridTemplateColumns: '1fr 3fr',
        gap: '10px',
        maxWidth: '1200px',
        width: '70%',
        borderRadius: '12px',
        padding: '10px',
        border: '2px solid black',
        backgroundColor: '#f8f9fa',
    },
    leftSide: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
    },
    rightSide: {
        display: 'flex',
        flexDirection: 'column',
    },
    photoCard: {
        maxWidth: '300px',
        minHeight: '180px',
        overflow: '-moz-hidden-unscrollable',
    },
    ingredientsCard: {
        maxWidth: '300px',
        minHeight: '200px',
    },
    recipeCard: {
        maxWidth: '700px',
        minHeight: '405px',
        borderRadius: '8px',
    },
    cardBody: {
        padding: '0 16px',
    },
    ingredientsHeader: {
        margin: 0,
        fontWeight: 'bold',
    },
    recipeHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: '0',
    },
    recipeTitle: {
        fontSize: '30px',
        fontWeight: 'bold',
        margin: 0,
    },
    saveButton: {
        backgroundColor: 'transparent',
        border: 'none',
        cursor: 'pointer',
    },
    instructionsTitle: {
        marginBottom: '10px',
    },
    instructionsText: {
        whiteSpace: 'pre-line',
    },
};
