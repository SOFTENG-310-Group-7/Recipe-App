import React from "react";
import { Image } from "@nextui-org/react";

/**
 *
 * RecipeImage Component
 *
 * This component renders an image for a recipe.
 * The image is displayed with a rounded border and a fixed width and height.
 *
 * @param {Object} props - The component props.
 * @param {string} props.src - The image source.
 * @param {string} props.alt - The image alt text.
 *
 *
 * @returns {JSX.Element} An image component for a recipe.
 */
export default function RecipeImage({ src, alt }) {
  return (
    <Image
      alt={alt}
      className="object-cover rounded-xl"
      src={src}
      width={300}
      height={195}
      style={{ objectFit: "cover" }}
    />
  );
}
