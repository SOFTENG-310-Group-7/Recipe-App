"use client";

import { useState } from 'react';
import DropDown from './DropDown';
import { generateRecipe } from '../lib/api';

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');
  const [mealType, setMealType] = useState('Any');
  const [servingSize, setServingSize] = useState('Any');
  const [cuisine, setCuisine] = useState('Any');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleDropDownSelect = (label, option) => {
    if (label === 'Meal Type') setMealType(option);
    if (label === 'Serving Size') setServingSize(option);
    if (label === 'Cuisine') setCuisine(option);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
  
    // Extract the individual parameters from your state
    const ingredients = query; // use 'query' state for ingredients
    const selectedCuisine = cuisine; // rename local variable to avoid conflict
    const selectedMealType = mealType; // rename local variable to avoid conflict
    const selectedServingSize = servingSize; // rename local variable to avoid conflict
    const dietaryPreferences = 'gf,vf'; // or set default value if needed
  
    try {
      // Pass the individual parameters to generateRecipe
      const data = await generateRecipe(ingredients, selectedCuisine, dietaryPreferences, selectedMealType, selectedServingSize);
      console.log('API Response:', data);
  
      if (onSearch) {
        onSearch(data);
      }
    } catch (error) {
      console.error('Error fetching the recipe:', error);
    }
  };

  const handleKeyDown = (e) => {
    if ( e.key === 'Enter') {
      e.preventDefault();
      handleSearch(e);
    }
  };

  return (
    <div className="flex flex-col items-center mt-6">
      <div className="flex justify-center mb-4 w-full">
        <form className="w-full max-w-xl" onSubmit={handleSearch}>
          <div className="flex space-x-4">
            <div className="flex rounded-md overflow-hidden w-full">
              <input
                type="text"
                className="w-full rounded-l-md border-2 border-black p-2"
                placeholder="Enter Recipe name or ingredients.."
                onChange={handleInputChange}
                onKeyDown={handleKeyDown} // Replace onKeyPress with onKeyDown
              />
              <button
                type="submit"
                className="bg-black text-white px-6 text-lg font-semibold py-2 rounded-r-md"
              >
                Go
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-4 w-full max-w-xl">
        <DropDown
          label="Meal Type"
          options={["Breakfast", "Lunch", "Dinner", "Any"]}
          onSelect={(option) => handleDropDownSelect('Meal Type', option)}
        />
        <DropDown
          label="Serving Size"
          options={[1, 2, 3, 4, 5, "Any"]}
          onSelect={(option) => handleDropDownSelect('Serving Size', option)}
        />
        <DropDown
          label="Cuisine"
          options={["Italian", "Indian", "French", "Spanish", "Any"]}
          onSelect={(option) => handleDropDownSelect('Cuisine', option)}
        />
      </div>
    </div>
  );
}
