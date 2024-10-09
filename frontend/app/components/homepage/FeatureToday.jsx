import React from "react";
import RecipeCard from "./RecipeCard";

/**
 * Array of featured recipe objects, each containing an ID, title, ingredients,
 * and cook time.
 *
 * @constant {Array<Object>}
 * @property {string} id - Unique identifier for the recipe.
 * @property {string} title - The title of the recipe.
 * @property {string} ingredients - The ingredients required for the recipe.
 * @property {string} cookTime - The time it takes to cook the recipe.
 */
const featuredRecipes = [
  {
    id: "1",
    title: "Creamy Garlic Parmesan Pasta",
    ingredients: "pasta, butter, cheese...",
    cookTime: "15 - 30 minutes",
  },
  {
    id: "2",
    title: "Spicy Honey Glazed Chicken",
    ingredients: "chicken, honey, olive oil",
    cookTime: "45 minutes",
  },
  {
    id: "3",
    title: "Stir-Fry Tofu",
    ingredients: "tofu, vege...",
    cookTime: "15 - 30 minutes",
  },
];

/**
 * FeaturedToday Component
 *
 * This component renders a section displaying featured recipes for the day.
 * It uses the `RecipeCard` component to display the title, ingredients, and
 * cook time of each featured recipe. The recipes are displayed in a flex layout
 * that is responsive and has hover animations.
 *
 * @component
 *
 * @returns {JSX.Element} A section of featured recipes for the day.
 *
 */
const FeaturedToday = () => {
  return (
    <section className="mt-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-black dark:text-white">
        Featured Today
      </h2>
      <div className="flex justify-center gap-6 flex-wrap dark:text-white">
        {featuredRecipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            title={recipe.title}
            ingredients={recipe.ingredients}
            cookTime={recipe.cookTime}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturedToday;
