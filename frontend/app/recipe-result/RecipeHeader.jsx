import React from "react";
import { CardHeader, Image } from "@nextui-org/react";

/**
 *
 * RecipeHeader Component
 *
 * This component renders the header of a recipe card, including the title and a save button.
 * The save button calls the `onSave` function when clicked.
 *
 * @component
 *
 * @param {Object} props - The component props.
 * @param {string} props.title - The title of the recipe.
 * @param {Function} props.onSave - The function to be called when the recipe is saved.
 *
 * @returns {JSX.Element} A header component for a recipe card.
 */
export default function RecipeHeader({ title, onSave }) {
  return (
    <CardHeader style={styles.recipeHeader}>
      <h2 className="text-4xl font-bold font-serif" style={styles.recipeTitle}>
        {title}
      </h2>
      <button style={styles.saveButton} onClick={onSave}>
        <Image
          src="/savebutton.png"
          alt="Save Recipe"
          width={50}
          height={50}
          style={{ height: "auto", borderRadius: "8px" }}
        />
      </button>
    </CardHeader>
  );
}

// CSS in JS is here as it is minimal and scoped to this component
const styles = {
  recipeHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingBottom: "0",
    fontWeight: "bold",
  },
  recipeTitle: {
    fontSize: "30px",
    fontWeight: "bold",
    margin: 0,
  },
  saveButton: {
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
  },
};
