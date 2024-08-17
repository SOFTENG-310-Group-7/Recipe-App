import React from "react";
const columns = [
    {name: "RECIPE", uid: "recipe"},
    {name: "INGREDIENTS", uid: "ingredients"},
    {name: "TAGS", uid: "tags"},
    {name: "ACTIONS", uid: "actions"},
  ];

const recipes = [
  {
    id: 1,
    recipe: "Spaghetti Bolognese",
    cooktime: "30 mins",
    ingredients: "Spaghetti, Ground Beef, Tomato Sauce, Garlic, Onion, Olive Oil",
    tags: "DF, GF, VG",
    avatar: "https://i.pravatar.cc/150?u=recipe1",
  },
  {
    id: 2,
    recipe: "Vegetarian Tacos",
    cooktime: "20 mins",
    ingredients: "Tortillas, Black Beans, Avocado, Corn, Salsa, Cheese",
    tags: "VG, GF",
    avatar: "https://i.pravatar.cc/150?u=recipe2",
  },
  {
    id: 3,
    recipe: "Chicken Caesar Salad",
    cooktime: "15 mins",
    ingredients: "Chicken Breast, Romaine Lettuce, Croutons, Parmesan, Caesar Dressing",
    tags: "GF",
    avatar: "https://i.pravatar.cc/150?u=recipe3",
  },
  {
    id: 4,
    recipe: "Thai Green Curry",
    cooktime: "40 mins",
    ingredients: "Chicken, Coconut Milk, Green Curry Paste, Bamboo Shoots, Basil",
    tags: "DF, GF",
    avatar: "https://i.pravatar.cc/150?u=recipe4",
  },
  {
    id: 5,
    recipe: "Vegan Pancakes",
    cooktime: "25 mins",
    ingredients: "Flour, Almond Milk, Banana, Maple Syrup, Baking Powder",
    tags: "VG, DF",
    avatar: "https://i.pravatar.cc/150?u=recipe5",
  },
];

export {columns, recipes};
