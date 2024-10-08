export async function generateRecipe(ingredients, cuisine, dietaryRestriction, mealType, servings) {
    // Construct the recipeData object in JSON format
    const recipeData = {
      ingredients,
      cuisine,
      dietaryRestriction,
      mealType,
      servings
    };
  
    console.log('Params in api.js:', recipeData);
  
    try {
      const response = await fetch('http://localhost:5000/api/recipes/generate-recipes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(recipeData),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      const data = await response.json();

        // Add result-id to each recipe
        return data.map((recipe, index) => ({
            ...recipe,
            'result-id': index,
        }));

    } catch (error) {
      console.error('Failed to generate recipes:', error);
      throw error;
    }
  }
  