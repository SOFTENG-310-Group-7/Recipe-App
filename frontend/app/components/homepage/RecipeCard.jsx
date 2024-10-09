import React from "react";

/**
 * RecipeCard Component
 *
 * This component is responsible for rendering a card displaying recipe details,
 * including the title, ingredients, and cook time. The card has hover effects and
 * a scaling animation.
 *
 * @component
 *
 * @param {Object} props - The component props.
 * @param {string} props.title - The title of the recipe.
 * @param {string} props.ingredients - A list or description of the ingredients.
 * @param {string} props.cookTime - The time it takes to cook the recipe.
 *
 * @returns {JSX.Element} A styled card component that displays recipe details.
 *
 * @example
 * <RecipeCard
 *   title="Pasta Carbonara"
 *   ingredients="Pasta, Eggs, Cheese, Bacon"
 *   cookTime="20 mins"
 * />
 */
const RecipeCard = ({ title, ingredients, cookTime }) => {
  return (
    <div className="border border-black p-4 w-72 rounded-md shadow-sm cursor-pointer duration-200 hover:scale-105 dark:border-white">
      <h3 className="text-xl font-semibold mb-2 text-black dark:text-purple-400">{title}</h3>
      <p className="mb-2 text-black dark:text-purple-400">
        <span className="font-semibold text-black dark:text-purple-400">Ingredients:</span> {ingredients}
      </p>
      <p className="text-black dark:text-purple-400">
        <span className="font-semibold text-black dark:text-purple-400">Cook time:</span> {cookTime}
      </p>
    </div>
  );
};

export default RecipeCard;
