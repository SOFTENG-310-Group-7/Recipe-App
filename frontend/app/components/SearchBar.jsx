"use client";

import { useState } from 'react';
import { Input } from "@nextui-org/react";
import DropDown from './DropDown';

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(query);
    }
  };

  return (
    <div className="flex flex-col items-center mt-6">
      <div className="flex justify-center mb-4 w-full">
        <Input
          isClearable
          type="text"
          label="Recipe Search"
          variant="bordered"
          placeholder="Enter Recipe name, Ingredient, or anything"
          onClear={() => console.log("input cleared")}
          onChange={handleInputChange}
          className="w-full max-w-2xl"  
        />
      </div>

      <div className="flex justify-center gap-4">
        <DropDown label="Meal Type" options={["Breakfast", "Lunch", "Dinner","Any"]} />
        <DropDown label="Serving Size" options={[1, 2, 3, 4, 5]} />
        <DropDown label="Cuisine" options={["Italian", "Indian", "French", "Spanish" ,"Any"]} />
      </div>
    </div>
  );
}
