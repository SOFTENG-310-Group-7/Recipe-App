import React, { useState } from 'react';
import { CardHeader, Image } from "@nextui-org/react";

export default function RecipeHeader({ title, onSave, userId, recipeId }) {
    const [isSaved, setIsSaved] = useState(false);

    const handleSaveRecipe = async () => {
        console.log('Save button clicked!');
    
        // Check if userId and recipeId are passed correctly
        console.log('userId:', userId);
        console.log('recipeId:', recipeId);
    
        try {
            const response = await fetch('/api/recipes', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    userId, // Use userId from props
                    title, // Assuming title is passed as prop
                    detailedIngredients: 'Sample Ingredients', // Use actual ingredients
                    instructions: 'Sample Instructions', // Use actual instructions
                    cookingTime: '30 minutes', // Example cooking time
                    tags: ['tag1', 'tag2'], // Example tags
                    recipeImage: '/default.png', // Example image path
                }),
            });
    
            if (response.ok) {
                console.log('Recipe saved successfully!');
                setIsSaved(true); // Set isSaved to true on success
                setTimeout(() => setIsSaved(false), 3000); // Hide message after 3 seconds
            } else {
                console.error('Error saving recipe:', response.statusText);
            }
        } catch (error) {
            console.error('Failed to save recipe:', error);
        }
    };
    

    return (
        <CardHeader style={styles.recipeHeader}>
            <h2 className="text-4xl font-bold font-serif" style={styles.recipeTitle}>{title}</h2>
            <button style={styles.saveButton} onClick={handleSaveRecipe}>
                <Image
                    src="/savebutton.png"
                    alt="Save Recipe"
                    width={50}
                    height={50}
                    style={{ height: 'auto', borderRadius: '8px' }}
                />
            </button>
            {isSaved && <p style={styles.savedMessage}>Recipe Saved!</p>}
        </CardHeader>
    );
}

const styles = {
    recipeHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        paddingBottom: '0',
        fontWeight: 'bold',
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
    savedMessage: {
        color: 'green',
        fontWeight: 'bold',
        marginTop: '10px',
    },
};
