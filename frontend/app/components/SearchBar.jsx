"use client"

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import {Input} from "@nextui-org/react";

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
    <Input
    isClearable
    type="email"
    label="Recipe Search"
    variant="bordered"
    placeholder="Enter Recipe name"
    onClear={() => console.log("input cleared")}
    className="max-w-xl "
  />
  );
}