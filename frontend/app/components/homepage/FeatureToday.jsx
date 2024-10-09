import React from "react";
import RecipeCard from "./RecipeCard";
import {useRouter} from "next/navigation";

/**
 * Array of featured recipe objects, each containing an ID, title, ingredients,
 * and cook time.
 *
 * @constant {Array<Object>}
 * @property {string} id - Unique identifier for the recipe.
 * @property {string} title - The title of the recipe.
 * @property {string} ingredients - The ingredients required for the recipe.
 * @property {string} cookTime - The time it takes to cook the recipe.
 */
const featuredRecipes = [
  {
    "id": "1",
    "title": "Banana Oat Pancakes",
    "ingredients": [
      "Rolled oats",
      "Bananas",
      "Milk",
      "Eggs",
      "Baking powder",
      "Salt",
      "Cinnamon",
      "Maple syrup (for serving)"
    ],
    "detailedIngredients": [
      "1 cup rolled oats",
      "2 ripe bananas",
      "1 cup milk (or dairy-free alternative)",
      "2 large eggs",
      "2 teaspoons baking powder",
      "1/4 teaspoon salt",
      "1/2 teaspoon cinnamon",
      "Maple syrup for serving"
    ],
    "cookingTime": "20 minutes",
    "instructions": [
      "In a blender, combine oats, bananas, milk, eggs, baking powder, salt, and cinnamon. Blend until smooth.",
      "Heat a non-stick skillet over medium heat and pour in batter to form pancakes.",
      "Cook until bubbles form on the surface, then flip and cook until golden brown.",
      "Serve warm with maple syrup."
    ],
    "recipeImage": "banana-oat-pancakes",
    "tags": [
      "Breakfast",
      "Healthy",
      "Gluten-Free",
      "Easy"
    ]
  },
  {
    "id": "2",
    "title": "Chocolate Chia Pudding",
    "ingredients": [
      "Chia seeds",
      "Cocoa powder",
      "Maple syrup",
      "Vanilla extract",
      "Milk (or dairy-free alternative)"
    ],
    "detailedIngredients": [
      "1/2 cup chia seeds",
      "1/4 cup cocoa powder",
      "1/4 cup maple syrup (or to taste)",
      "1 teaspoon vanilla extract",
      "2 cups milk (or dairy-free alternative)"
    ],
    "cookingTime": "4 hours (chill time included)",
    "instructions": [
      "In a bowl, whisk together chia seeds, cocoa powder, maple syrup, vanilla extract, and milk.",
      "Stir well to combine, making sure there are no clumps.",
      "Refrigerate for at least 4 hours or overnight until thickened.",
      "Stir before serving and enjoy with fresh fruit or nuts."
    ],
    "recipeImage": "chocolate-chia-pudding",
    "tags": [
      "Dessert",
      "Healthy",
      "Vegan",
      "Easy"
    ]
  },
  {
    "id": "3",
    "title": "Shakshuka",
    "ingredients": [
      "Olive oil",
      "Onion",
      "Bell pepper",
      "Garlic",
      "Canned tomatoes",
      "Eggs",
      "Spices (cumin, paprika, salt, pepper)",
      "Fresh parsley"
    ],
    "detailedIngredients": [
      "2 tablespoons olive oil",
      "1 onion, chopped",
      "1 bell pepper, chopped",
      "2 cloves garlic, minced",
      "1 can (14 oz) diced tomatoes",
      "4 large eggs",
      "1 teaspoon cumin",
      "1 teaspoon paprika",
      "Salt and pepper to taste",
      "Fresh parsley for garnish"
    ],
    "cookingTime": "30 minutes",
    "instructions": [
      "In a skillet, heat olive oil over medium heat. Add onion and bell pepper, cooking until softened.",
      "Add garlic and cook for another minute.",
      "Stir in diced tomatoes, cumin, paprika, salt, and pepper. Simmer for 10 minutes.",
      "Make small wells in the sauce and crack eggs into each well.",
      "Cover and cook until eggs are set to your liking.",
      "Garnish with fresh parsley and serve with crusty bread."
    ],
    "recipeImage": "shakshuka",
    "tags": [
      "Breakfast",
      "Mediterranean",
      "Healthy",
      "Easy"
    ]
  },
  {
    "id": "4",
    "title": "Italian Roast Beef Sandwich",
    "ingredients": [
      "Roast beef",
      "Italian rolls",
      "Provolone cheese",
      "Giardiniera",
      "Beef broth"
    ],
    "detailedIngredients": [
      "1 pound sliced roast beef",
      "4 Italian rolls",
      "4 slices provolone cheese",
      "1/2 cup giardiniera (pickled vegetables)",
      "1 cup beef broth"
    ],
    "cookingTime": "15 minutes",
    "instructions": [
      "In a saucepan, heat beef broth until simmering.",
      "Split Italian rolls and place a slice of provolone cheese on each.",
      "Layer roast beef on top of the cheese and add giardiniera.",
      "Place sandwiches under a broiler for a few minutes until cheese is melted.",
      "Serve with hot beef broth for dipping."
    ],
    "recipeImage": "italian-roast-beef-sandwich",
    "tags": [
      "Lunch",
      "Sandwich",
      "Hearty",
      "Easy"
    ]
  },
  {
    "id": "5",
    "title": "Tofu Stir-Fry",
    "ingredients": [
      "Firm tofu",
      "Mixed vegetables",
      "Soy sauce",
      "Garlic",
      "Ginger",
      "Sesame oil",
      "Rice or noodles (for serving)"
    ],
    "detailedIngredients": [
      "1 block firm tofu, pressed and cubed",
      "2 cups mixed vegetables (bell peppers, broccoli, carrots)",
      "1/4 cup soy sauce",
      "2 cloves garlic, minced",
      "1 teaspoon ginger, minced",
      "1 tablespoon sesame oil",
      "Cooked rice or noodles for serving"
    ],
    "cookingTime": "20 minutes",
    "instructions": [
      "In a pan, heat sesame oil over medium heat. Add cubed tofu and cook until golden brown.",
      "Add garlic and ginger, stirring for another minute.",
      "Add mixed vegetables and stir-fry until tender.",
      "Pour in soy sauce and cook for another 2-3 minutes.",
      "Serve hot over rice or noodles."
    ],
    "recipeImage": "tofu-stir-fry",
    "tags": [
      "Dinner",
      "Vegetarian",
      "Healthy",
      "Quick"
    ]
  },
  {
    "id": "6",
    "title": "Japanese Curry Udon",
    "ingredients": [
      "Udon noodles",
      "Japanese curry roux",
      "Vegetables (carrots, potatoes, onion)",
      "Chicken or tofu",
      "Green onions (for garnish)"
    ],
    "detailedIngredients": [
      "2 packs udon noodles",
      "1 box Japanese curry roux (e.g., Golden Curry)",
      "1 carrot, sliced",
      "1 potato, cubed",
      "1 onion, chopped",
      "1 pound chicken or tofu, cubed",
      "2 cups water",
      "Chopped green onions for garnish"
    ],
    "cookingTime": "30 minutes",
    "instructions": [
      "Cook udon noodles according to package instructions and set aside.",
      "In a pot, add water, chicken (or tofu), and vegetables. Bring to a boil.",
      "Add the curry roux and simmer until the vegetables are tender.",
      "Add cooked udon noodles to the pot and stir to combine.",
      "Serve hot, garnished with green onions."
    ],
    "recipeImage": "japanese-curry-udon",
    "tags": [
      "Dinner",
      "Japanese",
      "Comfort Food",
      "Easy"
    ]
  },
  {
    "id": "7",
    "title": "Butter Chicken",
    "ingredients": [
      "Chicken thighs",
      "Butter",
      "Tomato puree",
      "Heavy cream",
      "Garlic",
      "Ginger",
      "Spices (garam masala, cumin, coriander)",
      "Rice (for serving)"
    ],
    "detailedIngredients": [
      "1 pound chicken thighs, cubed",
      "1/4 cup butter",
      "1 can (15 oz) tomato puree",
      "1/2 cup heavy cream",
      "2 cloves garlic, minced",
      "1 tablespoon ginger, minced",
      "2 teaspoons garam masala",
      "1 teaspoon cumin",
      "1 teaspoon coriander",
      "Cooked rice for serving"
    ],
    "cookingTime": "30 minutes",
    "instructions": [
      "In a pan, melt butter over medium heat and sauté garlic and ginger.",
      "Add chicken and cook until browned.",
      "Stir in tomato puree and spices; simmer for 10 minutes.",
      "Add heavy cream and cook for another 5 minutes.",
      "Serve hot with rice."
    ],
    "recipeImage": "butter-chicken",
    "tags": [
      "Dinner",
      "Indian",
      "Comfort Food",
      "Easy"
    ]
  },
  {
    "id": "8",
    "title": "Saag Paneer",
    "ingredients": [
      "Paneer",
      "Spinach",
      "Onion",
      "Garlic",
      "Ginger",
      "Spices (cumin, garam masala)",
      "Cream (optional)"
    ],
    "detailedIngredients": [
      "1 pound paneer, cubed",
      "4 cups fresh spinach (or frozen)",
      "1 onion, chopped",
      "2 cloves garlic, minced",
      "1 tablespoon ginger, minced",
      "1 teaspoon cumin",
      "1 teaspoon garam masala",
      "1/4 cup cream (optional)"
    ],
    "cookingTime": "30 minutes",
    "instructions": [
      "In a pan, sauté onion, garlic, and ginger until softened.",
      "Add spinach and cook until wilted.",
      "Blend spinach mixture until smooth and return to the pan.",
      "Add paneer, spices, and cream; cook for another 5-10 minutes.",
      "Serve hot with naan or rice."
    ],
    "recipeImage": "saag-paneer",
    "tags": [
      "Dinner",
      "Indian",
      "Vegetarian",
      "Healthy"
    ]
  },
  {
    "id": "9",
    "title": "Crème Brûlée",
    "ingredients": [
      "Heavy cream",
      "Egg yolks",
      "Sugar",
      "Vanilla extract",
      "Sugar (for topping)"
    ],
    "detailedIngredients": [
      "2 cups heavy cream",
      "5 large egg yolks",
      "1/2 cup sugar",
      "1 teaspoon vanilla extract",
      "Sugar for caramelizing"
    ],
    "cookingTime": "1 hour (plus chilling time)",
    "instructions": [
      "Preheat oven to 325°F (160°C).",
      "In a saucepan, heat heavy cream until just boiling.",
      "In a bowl, whisk egg yolks and sugar until pale. Slowly add hot cream, whisking continuously.",
      "Stir in vanilla extract.",
      "Pour mixture into ramekins and place in a baking dish. Fill the dish with hot water halfway up the ramekins.",
      "Bake for 30-40 minutes until set. Chill for at least 2 hours.",
      "Before serving, sprinkle sugar on top and caramelize with a torch or broiler."
    ],
    "recipeImage": "creme-brulee",
    "tags": [
      "Dessert",
      "French",
      "Elegant",
      "Classic"
    ]
  },
  {
    "id": "10",
    "title": "Mango Mousse Cake",
    "ingredients": [
      "Mango puree",
      "Heavy cream",
      "Gelatin",
      "Sugar",
      "Lemon juice",
      "Cake base (sponge or graham cracker)"
    ],
    "detailedIngredients": [
      "2 cups mango puree (fresh or canned)",
      "1 cup heavy cream, whipped",
      "2 tablespoons gelatin (dissolved in water)",
      "1/2 cup sugar",
      "1 tablespoon lemon juice",
      "1 cake base (sponge or graham cracker)"
    ],
    "cookingTime": "4 hours (chill time included)",
    "instructions": [
      "In a bowl, combine mango puree, sugar, and lemon juice.",
      "Stir in dissolved gelatin until well combined.",
      "Gently fold in whipped cream until no streaks remain.",
      "Pour the mousse over the cake base in a springform pan.",
      "Chill for at least 4 hours until set. Serve chilled."
    ],
    "recipeImage": "mango-mousse-cake",
    "tags": [
      "Dessert",
      "Mango",
      "No-Bake",
      "Refreshing"
    ]
  },
  {
    "id": "11",
    "title": "Coq au Vin",
    "ingredients": [
      "Chicken",
      "Red wine",
      "Mushrooms",
      "Bacon",
      "Onions",
      "Garlic",
      "Thyme",
      "Carrots"
    ],
    "detailedIngredients": [
      "4 chicken thighs",
      "2 cups red wine",
      "1 cup mushrooms, sliced",
      "4 slices bacon, chopped",
      "1 onion, chopped",
      "2 cloves garlic, minced",
      "1 teaspoon thyme",
      "2 carrots, sliced"
    ],
    "cookingTime": "1.5 hours",
    "instructions": [
      "In a large pot, cook bacon until crispy. Remove and set aside.",
      "In the same pot, brown chicken on all sides. Remove and set aside.",
      "Add onions, garlic, and mushrooms; sauté until softened.",
      "Return chicken and bacon to the pot. Add wine, thyme, and carrots.",
      "Simmer for 1 hour until chicken is tender. Serve with crusty bread."
    ],
    "recipeImage": "coq-au-vin",
    "tags": [
      "Dinner",
      "French",
      "Hearty",
      "Classic"
    ]
  },
  {
    "id": "12",
    "title": "Enchiladas",
    "ingredients": [
      "Corn tortillas",
      "Shredded chicken or beans",
      "Enchilada sauce",
      "Cheese",
      "Onions",
      "Sour cream (for serving)"
    ],
    "detailedIngredients": [
      "8 corn tortillas",
      "2 cups shredded chicken or beans",
      "2 cups enchilada sauce",
      "1 cup cheese (cheddar or Mexican blend)",
      "1 onion, chopped",
      "Sour cream for serving"
    ],
    "cookingTime": "30 minutes",
    "instructions": [
      "Preheat oven to 350°F (175°C).",
      "In a pan, heat enchilada sauce and add shredded chicken or beans.",
      "Fill each tortilla with the mixture, roll them up, and place in a baking dish.",
      "Top with remaining sauce and cheese.",
      "Bake for 20 minutes until heated through and cheese is melted. Serve with sour cream."
    ],
    "recipeImage": "enchiladas",
    "tags": [
      "Dinner",
      "Mexican",
      "Comfort Food",
      "Easy"
    ]
  },
  {
    "id": "13",
    "title": "Kiwi Burger",
    "ingredients": [
      "Ground beef or turkey",
      "Kiwis",
      "Burger buns",
      "Lettuce",
      "Tomato",
      "Onion",
      "Sauce (mayonnaise or your choice)"
    ],
    "detailedIngredients": [
      "1 pound ground beef or turkey",
      "2 ripe kiwis, sliced",
      "4 burger buns",
      "Lettuce leaves",
      "1 tomato, sliced",
      "1 onion, sliced",
      "Mayonnaise or your choice of sauce"
    ],
    "cookingTime": "20 minutes",
    "instructions": [
      "Form the ground meat into patties and season with salt and pepper.",
      "Grill or pan-fry the patties until cooked to your liking.",
      "Toast the burger buns lightly.",
      "Assemble the burgers by placing lettuce, tomato, onion, and a patty on the bun.",
      "Top with sliced kiwi and your choice of sauce before serving."
    ],
    "recipeImage": "kiwi-burger",
    "tags": [
      "Dinner",
      "Fusion",
      "Easy",
      "Unique"
    ]
  },
  {
    "id": "14",
    "title": "Apple Crumble",
    "ingredients": [
      "Apples",
      "Sugar",
      "Cinnamon",
      "Flour",
      "Oats",
      "Butter"
    ],
    "detailedIngredients": [
      "4 cups apples, peeled and sliced",
      "1/2 cup sugar",
      "1 teaspoon cinnamon",
      "1 cup flour",
      "1 cup oats",
      "1/2 cup butter, melted"
    ],
    "cookingTime": "45 minutes",
    "instructions": [
      "Preheat oven to 350°F (175°C).",
      "In a bowl, combine sliced apples, sugar, and cinnamon. Place in a baking dish.",
      "In another bowl, mix flour, oats, and melted butter until crumbly.",
      "Spread the crumble mixture over the apples.",
      "Bake for 30-35 minutes until golden and bubbly. Serve warm with ice cream."
    ],
    "recipeImage": "apple-crumble",
    "tags": [
      "Dessert",
      "Comfort Food",
      "Easy",
      "Fruity"
    ]
  },
  {
    "id": "15",
    "title": "Spotted Dick",
    "ingredients": [
      "Self-raising flour",
      "Sugar",
      "Butter",
      "Dried currants or raisins",
      "Milk",
      "Eggs"
    ],
    "detailedIngredients": [
      "2 cups self-raising flour",
      "1/2 cup sugar",
      "1/2 cup butter, softened",
      "1 cup dried currants or raisins",
      "3/4 cup milk",
      "2 eggs"
    ],
    "cookingTime": "1 hour",
    "instructions": [
      "In a bowl, cream together butter and sugar.",
      "Add eggs and milk, mixing well.",
      "Stir in flour and currants until combined.",
      "Transfer to a greased pudding basin and cover with foil.",
      "Steam for about 1 hour until firm. Serve with custard."
    ],
    "recipeImage": "spotted-dick",
    "tags": [
      "Dessert",
      "British",
      "Traditional",
      "Comfort Food"
    ]
  },
  {
    "id": "16",
    "title": "Chicken Noodle Soup",
    "ingredients": [
      "Chicken broth",
      "Chicken",
      "Noodles",
      "Carrots",
      "Celery",
      "Onion",
      "Garlic",
      "Salt",
      "Pepper"
    ],
    "detailedIngredients": [
      "8 cups chicken broth",
      "1 pound boneless, skinless chicken breasts",
      "1 cup egg noodles",
      "2 carrots, chopped",
      "2 celery stalks, chopped",
      "1 onion, chopped",
      "2 cloves garlic, minced",
      "Salt and pepper to taste"
    ],
    "cookingTime": "30 minutes",
    "instructions": [
      "In a large pot, combine chicken broth, chicken breasts, carrots, celery, onion, and garlic.",
      "Bring to a boil, then reduce heat to low and simmer for 15-20 minutes, or until chicken is cooked through.",
      "Remove chicken breasts from the pot and shred with two forks.",
      "Return shredded chicken to the pot.",
      "Add egg noodles to the pot and cook according to package directions.",
      "Season soup with salt and pepper to taste.",
      "Serve warm."
    ],
    "recipeImage": "chicken-noodle-soup",
    "tags": [
      "Soup",
      "Dinner",
      "Comfort Food",
      "Easy",
      "Healthy"
    ]
  },
  {
    "id": "17",
    "title": "Carbonara",
    "ingredients": [
      "Spaghetti",
      "Eggs",
      "Parmesan cheese",
      "Pancetta or bacon",
      "Black pepper",
      "Salt"
    ],
    "detailedIngredients": [
      "12 oz spaghetti",
      "2 large eggs",
      "1 cup grated Parmesan cheese",
      "4 oz pancetta or bacon, diced",
      "Freshly ground black pepper",
      "Salt to taste"
    ],
    "cookingTime": "20 minutes",
    "instructions": [
      "Cook spaghetti according to package directions. Reserve 1 cup pasta water.",
      "In a pan, cook pancetta or bacon until crispy.",
      "In a bowl, whisk together eggs and Parmesan cheese.",
      "Drain pasta and immediately toss with the pancetta and fat.",
      "Remove from heat and mix in the egg mixture, adding reserved pasta water as needed for creaminess.",
      "Season with salt and black pepper before serving."
    ],
    "recipeImage": "carbonara",
    "tags": [
      "Dinner",
      "Italian",
      "Pasta",
      "Quick"
    ]
  },
  {
    "id": "18",
    "title": "Turkey Pear Swiss Sandwich",
    "ingredients": [
      "Turkey slices",
      "Pear slices",
      "Swiss cheese",
      "Whole grain bread",
      "Honey mustard",
      "Spinach"
    ],
    "detailedIngredients": [
      "8 oz turkey slices",
      "1 ripe pear, thinly sliced",
      "4 slices Swiss cheese",
      "4 slices whole grain bread",
      "2 tablespoons honey mustard",
      "1 cup fresh spinach"
    ],
    "cookingTime": "10 minutes",
    "instructions": [
      "Spread honey mustard on one side of each slice of bread.",
      "Layer turkey, pear slices, Swiss cheese, and spinach on two slices of bread.",
      "Top with remaining bread slices, mustard side down.",
      "Grill or toast in a skillet until golden brown and cheese is melted.",
      "Slice in half and serve warm."
    ],
    "recipeImage": "turkey-pear-swiss-sandwich",
    "tags": [
      "Lunch",
      "Sandwich",
      "Quick",
      "Healthy"
    ]
  },
  {
    "id": "19",
    "title": "Beef Stroganoff",
    "ingredients": [
      "Beef sirloin",
      "Mushrooms",
      "Onion",
      "Garlic",
      "Beef broth",
      "Sour cream",
      "Egg noodles"
    ],
    "detailedIngredients": [
      "1 pound beef sirloin, thinly sliced",
      "8 oz mushrooms, sliced",
      "1 onion, chopped",
      "2 cloves garlic, minced",
      "2 cups beef broth",
      "1 cup sour cream",
      "8 oz egg noodles"
    ],
    "cookingTime": "30 minutes",
    "instructions": [
      "Cook egg noodles according to package instructions.",
      "In a skillet, sauté onion and garlic until softened. Add beef and brown.",
      "Stir in mushrooms and cook until tender.",
      "Add beef broth and simmer for 10 minutes.",
      "Remove from heat and stir in sour cream.",
      "Serve over egg noodles."
    ],
    "recipeImage": "beef-stroganoff",
    "tags": [
      "Dinner",
      "Comfort Food",
      "Hearty",
      "Easy"
    ]
  },
  {
    "id": "20",
    "title": "Panna Cotta",
    "ingredients": [
      "Heavy cream",
      "Sugar",
      "Gelatin",
      "Vanilla extract",
      "Berries (for topping)"
    ],
    "detailedIngredients": [
      "2 cups heavy cream",
      "1/2 cup sugar",
      "1 packet (2 1/4 teaspoons) gelatin",
      "1 teaspoon vanilla extract",
      "Fresh berries for topping"
    ],
    "cookingTime": "4 hours (chill time included)",
    "instructions": [
      "In a saucepan, heat heavy cream and sugar until sugar dissolves.",
      "Sprinkle gelatin over 2 tablespoons of cold water and let sit for 5 minutes.",
      "Stir gelatin into warm cream mixture until dissolved. Add vanilla extract.",
      "Pour into molds and refrigerate for at least 4 hours until set.",
      "Unmold and serve with fresh berries."
    ],
    "recipeImage": "panna-cotta",
    "tags": [
      "Dessert",
      "Italian",
      "No-Bake",
      "Elegant"
    ]
  },
  {
    "id": "21",
    "title": "Croque Madame",
    "ingredients": [
      "Bread",
      "Ham",
      "Gruyère cheese",
      "Eggs",
      "Butter",
      "Milk",
      "Flour"
    ],
    "detailedIngredients": [
      "4 slices bread",
      "4 slices ham",
      "4 slices Gruyère cheese",
      "2 eggs",
      "2 tablespoons butter",
      "1/4 cup milk",
      "2 tablespoons flour"
    ],
    "cookingTime": "20 minutes",
    "instructions": [
      "Preheat oven to 400°F (200°C).",
      "In a pan, melt butter and whisk in flour and milk to make a béchamel sauce.",
      "Layer bread, ham, and cheese in a baking dish. Pour sauce over top.",
      "Bake for 10-15 minutes until golden.",
      "Fry eggs sunny-side up. Top each sandwich with an egg before serving."
    ],
    "recipeImage": "croque-madame",
    "tags": [
      "Breakfast",
      "French",
      "Comfort Food",
      "Savory"
    ]
  }
];

/**
 * getFeaturedRecipesForToday component
 *
 * This function is used to get 3 featured recipes based on the current day of the week
 *
 * @returns {({instructions: string[], recipeImage: string, detailedIngredients: string[], ingredients: string[], id: string, title: string, cookingTime: string, tags: string[]}|{instructions: string[], recipeImage: string, detailedIngredients: string[], ingredients: string[], id: string, title: string, cookingTime: string, tags: string[]}|{instructions: string[], recipeImage: string, detailedIngredients: string[], ingredients: string[], id: string, title: string, cookingTime: string, tags: string[]}|{instructions: string[], recipeImage: string, detailedIngredients: string[], ingredients: string[], id: string, title: string, cookingTime: string, tags: string[]}|{instructions: string[], recipeImage: string, detailedIngredients: string[], ingredients: string[], id: string, title: string, cookingTime: string, tags: string[]})[]}
 */
const getFeaturedRecipesForToday = () => {
  // 0 = Sunday, 1 = Monday, etc.
  const today = new Date().getDay();
  const startIndex = (today * 3) % featuredRecipes.length;
  return featuredRecipes.slice(startIndex, startIndex + 3);
};

/**
 * FeaturedToday Component
 *
 * This component renders a section displaying featured recipes for the day.
 * It uses the `RecipeCard` component to display the title, ingredients, and
 * cook time of each featured recipe. The recipes are displayed in a flex layout
 * that is responsive and has hover animations.
 *
 * @component
 *
 * @returns {JSX.Element} A section of featured recipes for the day.
 */
const FeaturedToday = () => {
  const recipesToShow = getFeaturedRecipesForToday();
  const router = useRouter();

  // handle recipe click
  const handleRecipeClick = (id) => {
    router.push(`/recipe-result?result-id=${id}`);
  };

  return (
      <section className="mt-12">
        <h2 className="text-3xl font-bold text-center mb-8 text-black dark:text-white">
          Featured Today
        </h2>
        <div className="flex justify-center gap-6 flex-wrap dark:text-white">
          {recipesToShow.map((recipe, index) => (
              <RecipeCard
                  key={index}
                  title={recipe.title}
                  ingredients={recipe.ingredients.join(", ")}
                  cookTime={recipe.cookingTime}
                  recipeImage={recipe.recipeImage}
                  tags={recipe.tags}
              />
          ))}
        </div>
      </section>
  );
};

export default FeaturedToday;