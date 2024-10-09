'use client';

import React, { useContext } from 'react';
import { AuthContext } from '@/app/contexts/AuthContext'; // Assuming you have this context for user authentication

export default function SavedRecipesPage() {
  const { user } = useContext(AuthContext); // Get the current user from AuthContext

  const hardcodedRecipes = [
    {
      _id: '1',
      title: 'Spaghetti Bolognese',
      detailedIngredients: ['200g Spaghetti', '100g Ground Beef', '1 Onion', '2 Garlic Cloves', 'Tomato Sauce'],
      instructions: ['Cook the spaghetti.', 'Brown the ground beef.', 'Add onion and garlic.', 'Stir in tomato sauce.', 'Serve over spaghetti.'],
      cookingTime: '30 minutes',
      tags: ['Italian', 'Dinner'],
      recipeImage: '/spaghetti-bolognese.jpg',  // Correct path
    },
    {
      _id: '2',
      title: 'Caesar Salad',
      detailedIngredients: ['Lettuce', 'Croutons', 'Chicken', 'Parmesan', 'Caesar Dressing'],
      instructions: ['Chop the lettuce.', 'Grill the chicken.', 'Toss ingredients together.', 'Top with Caesar dressing.'],
      cookingTime: '15 minutes',
      tags: ['Salad', 'Healthy'],
      recipeImage: '/caesar-salad.jpg',  // Correct path
    },
    {
      _id: '3',
      title: 'Chocolate Cake',
      detailedIngredients: ['Flour', 'Cocoa Powder', 'Sugar', 'Butter', 'Eggs', 'Baking Powder'],
      instructions: ['Mix dry ingredients.', 'Add wet ingredients.', 'Bake in oven at 180°C for 25 minutes.', 'Let cool before serving.'],
      cookingTime: '40 minutes',
      tags: ['Dessert', 'Baking'],
      recipeImage: '/chocolate-cake.jpg',  // Correct path
    },
  ];

  // Check if the user is logged in
  if (!user) {
    return <p className="text-black">Please log in to see your saved recipes.</p>;
  }

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-4 text-black">Your Saved Recipes</h1>
      {hardcodedRecipes.length === 0 ? (
        <p className="text-black">You haven't saved any recipes yet.</p>
      ) : (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {hardcodedRecipes.map((recipe) => (
            <div key={recipe._id} className="recipe-card p-4 border border-gray-300 rounded-lg shadow-lg text-black">
              <img src={recipe.recipeImage} alt={recipe.title} className="w-full h-40 object-cover rounded-md mb-4" />
              <h2 className="text-2xl font-bold mb-2 text-black">{recipe.title}</h2>
              <p className="text-black"><strong>Cooking Time:</strong> {recipe.cookingTime}</p>
              <p className="text-black"><strong>Tags:</strong> {recipe.tags.join(', ')}</p>
              <ul className="list-disc list-inside mb-2 text-black">
                {recipe.detailedIngredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
              <p className="text-black"><strong>Instructions:</strong></p>
              <ol className="list-decimal list-inside text-black">
                {recipe.instructions.map((instruction, index) => (
                  <li key={index}>{instruction}</li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
