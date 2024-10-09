import React from "react";
/**
 *
 * MobileResult Component
 *
 * This component renders a mobile result component that displays recipe details.
 * The component includes the recipe title, cooking time, tags, and ingredients.
 *
 * @component
 *
 * @param {Object} props - The component props.
 * @param {Object} props.recipe - The recipe object.
 * @param {Function} props.onButtonClick - The function to be called when the button
 * is clicked.
 *
 * @returns {JSX.Element} A mobile result component that displays recipe details.
 */
const MobileResult = ({ recipe, onButtonClick }) => {
  // Display only the first three tags
  const displayedTags = recipe.tags.slice(0, 3);
  // HTML structure for the MobileResult component
  return (
    <div className="w-full">
      <div className="w-full flex justify-center items-center flex-col">
        <div className="flex flex-row justify-between items-center w-[90%]">
          <div className="text-bold text-md">{recipe.title}</div>
          <div className="text-sm text-default-400">{recipe.cookingTime}</div>
        </div>
        <div className="flex gap-2 p-2 w-[90%]">
          {displayedTags.map((tag) => (
            <div
              key={tag}
              className="bg-blue-200 text-blue-600 capitalize text-xs py-1 px-2 rounded-full"
            >
              {tag}
            </div>
          ))}
        </div>
        <div className="flex flex-row justify-between gap-3 items-center w-[90%]">
          <p className="text-sm text-default-600">
            {Array.isArray(recipe.ingredients)
              ? recipe.ingredients.join(", ")
              : "N/A"}
          </p>
          <div className="relative flex items-center gap-2">
            <button
              className="bg-green-500 py-2 px-3 rounded-lg text-md"
              onClick={onButtonClick}
            >
              View
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileResult;
