const { GoogleGenerativeAI } = require('@google/generative-ai');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });


const generateRecipe = async (params) => {
    try {
        const { ingredients, cuisine, dietaryRestriction, mealType, servings } = params;

        const prompt = `
            You are a recipe generator. Generate five to ten recipes with the following details:
            1. Recipe Name.
            2. List of Ingredients (without portion sizes). IMPORTANT: Do not include any non-food items or any inedible objects in the ingredients list. Only generate recipes with actual food items.
            3. Detailed list of ingredients (with portion sizes). For all ingredients that have common alternatives, suggest one or two substitutions with their equivalent amounts (e.g., 'olive oil' can be substituted with 'sunflower oil' or 'butter', and provide appropriate amounts).
            4. Fully detailed Step-by-Step Cooking Instructions.
            5. Cooking Time.
            6. Number of Servings.
            7. Tags related to the dish (e.g., any dietary restriction, meal type, cuisine, spicy, healthy, preparation difficulty, etc.).
            8. Name of image (this must be a 1-2 word description with any space characters replaced by '-') from the following prompts: ${JSON.stringify(params)}.

            Prioritize the following (in order of most important to least important):
            1. Dietary Restriction: ${dietaryRestriction}. If a specific dietary restriction is selected, ensure the recipe adheres to this dietary preference.
            2. Meal Type: ${mealType}. If a specific meal type is selected, ensure the recipe will be suitable for this meal.
            3. Cuisine: ${cuisine}. If a specific cuisine is selected, ensure the recipe is aligned with this cuisine.

            Format the response as a JSON object with fields: 'title', 'ingredients', 'detailedIngredients' , 'cookingTime', 'instructions', 'recipeImage', 'tags'.
            Your response must only be in these JSON fields with no other information.

            IMPORTANT: Do not include any offensive, harmful, or inappropriate content in the recipes or instructions.
            Reject any prompt that contains inappropriate language, and do not generate or return any results for such prompts.
        `;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        console.log('Response:', response.text());
        return response.text();
    } catch (error) {
        console.error('Error communicating with Gemini API:', error);
        throw error;
    }
};


module.exports = { generateRecipe };
