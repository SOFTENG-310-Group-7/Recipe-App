import React from "react";
import { Divider } from "@nextui-org/react";

/**
 *
 * Ingredients Component
 *
 * This component renders a list of ingredients required for a recipe.
 * The ingredients are displayed in a container with a header and a divider.
 *
 * @component
 *
 * @param {Object} props - The component props.
 * @param {Array<string>} props.ingredients - The ingredients required for the recipe.
 * @returns
 */
export default function Ingredients({ ingredients }) {
  if (!Array.isArray(ingredients)) {
    return <p>Error: Ingredients data is not available.</p>;
  }

  return (
    <div style={styles.ingredientsContainer}>
      <h3 style={styles.ingredientsHeader}>Ingredients:</h3>
      <Divider />
      <div style={styles.ingredientsList}>
        {ingredients.map((ingredient, index) => (
          <React.Fragment key={index}>
            <small>{ingredient}</small>
            {index < ingredients.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

// CSS in JS is here as it is minimal and scoped to this component
const styles = {
  ingredientsContainer: {
    maxHeight: "200px",
    backgroundColor: "#f0f0f0",
    padding: "10px",
    borderRadius: "8px",
  },
  ingredientsHeader: {
    margin: 0,
    fontWeight: "bold",
  },
  ingredientsList: {
    maxHeight: "150px",
    overflow: "auto",
  },
};
