

export async function generateRecipe(recipeData) {
    try {
      const response = await fetch('http://localhost:5000/api/recipes/generate', {
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
      return data;
    } catch (error) {
      console.error('Failed to generate recipe:', error);
      throw error;
    }
  }