import React from "react";
import { CardBody } from "@nextui-org/react";

/**
 *
 * RecipeInstructions Component
 *
 * This component renders the instructions for a recipe, including the steps and cooking time.
 * The instructions are displayed in a list format with a title and a cooking time.
 *
 * @component
 *
 * @param {Object} props - The component props.
 * @param {Array<string>} props.instructions - The instructions for the recipe.q
 * @param {string} props.cookingTime - The time it takes to cook the recipe.
 *
 * @returns {JSX.Element} A card body component that displays the instructions for a recipe.
 */
export default function RecipeInstructions({ instructions, cookingTime }) {
  const instructionList = Array.isArray(instructions) ? instructions : [];

  // HTML structure for the RecipeInstructions component
  return (
    <CardBody className="p-4">
      <div className="flex items-center mb-2">
        <h3 className="text-xl font-bold font-serif mr-4 mb-0">
          Recipe Instructions
        </h3>
        {cookingTime && (
          <span className="text-gray-600 text-sm">{cookingTime}</span>
        )}
      </div>
      <div className="overflow-auto max-h-[calc(100%_-_40px)]">
        <ol className="list-decimal pl-4 font-serif">
          {instructionList.map((instruction, index) => (
            <li key={index} className="mb-1">
              {instruction}
            </li>
          ))}
        </ol>
      </div>
    </CardBody>
  );
}

// CSS in JS is here as it is minimal and scoped to this component
const styles = {
  cardBody: {
    padding: "0 16px",
  },
  header: {
    display: "flex",
    alignItems: "center",
    marginBottom: "10px",
  },
  instructionsTitle: {
    marginRight: "10px",
    marginBottom: "0",
  },
  cookingTime: {
    fontSize: "0.9em",
    color: "#888",
    marginTop: "2px",
  },
  instructionsContent: {
    overflow: "auto",
    maxHeight: "calc(100% - 40px)",
  },
  instructionsList: {
    paddingLeft: "10px",
  },
  instructionItem: {
    marginBottom: "2px",
  },
  dash: {
    fontWeight: "bold",
    marginRight: "5px",
  },
};
