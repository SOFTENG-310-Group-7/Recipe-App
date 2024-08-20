const { GoogleGenerativeAI } = require('@google/generative-ai');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });


const generateRecipe = async (params) => {
    try {

        const prompt = "You are a recipe generator. Generate 5 recipes with the following details:\n1. Recipe Name\n2. List of Ingredients without portion\n3. Step-by-Step Cooking Instructions\n4. Cooking Time\n5. Number of Servings\n6.Tags related to the dish(eg:spicy,healthy)\n7. Name of image (this must be a 1-2 word description with any space characters replaced by '-') from the following prompts:"
        + JSON.stringify(params)
        +"\nFormat the response as a JSON object with fields `title`, `ingredients`, `cookingTime`, `instructions`, 'recipeImage','tags'. Your response must only be in these json fields with no other information";
        const result = await model.generateContent(prompt);
        const response = await result.response;
        console.log('Response:', response.text());
        return response.text();
    } catch (error) {
        console.error('Error communicating with Gemini API:', error);
        throw error;
    }
};

// const generateRecipe = async (params) => {
//     try {
//         const prompt = `
//         You are a recipe generator. Generate 5 unique recipes with the following details for each recipe:
//         1. Recipe Name
//         2. List of Ingredients without portion
//         3. Step-by-Step Cooking Instructions
//         4. Cooking Time
//         5. Number of Servings
//         6. Tags related to the dish (e.g., spicy, healthy)
//         7. Name of image (this must be a 1-2 word description with any space characters replaced by '-') 

//         The recipes should be generated based on the following prompts:
//         ${JSON.stringify(params)}

//         Format the response as a JSON array where each element is a JSON object with the fields \`title\`, \`ingredients\`, \`cookingTime\`, \`instructions\`, \`recipeImage\`, and \`tags\`. Your response must only be this JSON array with no other information.
//         `;

//         const result = await model.generateContent(prompt);
//         const responseText = await result.response.text();
//         console.log('Response:', responseText);

//         // Parse the response text into a JSON array
//         const recipes = JSON.parse(responseText);

//         // Return the recipes array
//         return recipes;
//     } catch (error) {
//         console.error('Error communicating with Gemini API:', error);
//         throw error;
//     }
// };


module.exports = { generateRecipe };
