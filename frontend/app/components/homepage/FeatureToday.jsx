import React from 'react';

const featuredRecipes = [
  {
    id: '1', 
    title: 'Creamy Garlic Parmesan Pasta',
    ingredients: 'pasta, butter, cheese...',
    cookTime: '15 - 30 minutes',
  },
  {
    id: '2',
    title: 'Spicy Honey Glazed Chicken',
    ingredients: 'chicken, honey, olive oil',
    cookTime: '45 minutes',
  },
  {
    id: '3',
    title: 'Stir-Fry Tofu',
    ingredients: 'tofu, vege...',
    cookTime: '15 - 30 minutes',
  },
];

const FeaturedToday = () => {
  return (
    <section className="mt-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-black">Featured Today</h2>
      <div className="flex justify-center gap-6 flex-wrap">
        {featuredRecipes.map((recipe) => (
          <div
            key={recipe.id}
            className="border border-black p-4 w-72 rounded-md shadow-sm cursor-pointer duration-200 hover:scale-105"
          >
            <h3 className="text-xl font-semibold mb-2 text-black">{recipe.title}</h3>
            <p className="mb-2 text-black">
              <span className="font-semibold ">Ingredients:</span> {recipe.ingredients}
            </p>
            <p className="text-black">
              <span className="font-semibold text-black">Cook time:</span> {recipe.cookTime}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedToday;
