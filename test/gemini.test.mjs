import { expect } from 'chai';
import sinon from 'sinon';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { generateRecipe } from '../server/api/gemini/client.js';
import dotenv from 'dotenv';

dotenv.config({ path: './server/config.env' });
const apiKey = process.env.GEMINI_API_KEY;
console.log('API Key:', apiKey);
const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

describe('generateRecipe', () => {
    let genAIStub;
    let modelStub;

    before(() => {
        genAIStub = sinon.stub(GoogleGenerativeAI.prototype, 'getGenerativeModel');
        modelStub = sinon.stub(model, 'generateContent');
    });

    after(() => {
        genAIStub.restore();
        modelStub.restore();
    });

    it('should generate a recipe', async () => {
        const params = {
            title: 'Recipe 1',
            ingredients: ['Ingredient 1', 'Ingredient 2'],
            detailedIngredients: ['Detailed Ingredient 1', 'Detailed Ingredient 2'],
            cookingTime: '1 hour',
            instructions: 'Step 1, Step 2',
            recipeImage: 'recipe-image',
            tags: ['tag1', 'tag2']
        };

        const response = {
            text: () => 'Generated recipe'
        };

        modelStub.returns(Promise.resolve({ response }));
        const recipe = await generateRecipe(params);
        expect(recipe).to.equal('Generated recipe');
    });

    it('should handle errors', async () => {
        const params = {
            title: 'Recipe 1',
            ingredients: ['Ingredient 1', 'Ingredient 2'],
            detailedIngredients: ['Detailed Ingredient 1', 'Detailed Ingredient 2'],
            cookingTime: '1 hour',
            instructions: 'Step 1, Step 2',
            recipeImage: 'recipe-image',
            tags: ['tag1', 'tag2']
        };

        modelStub.throws('Error');
        try {
            await generateRecipe(params);
        } catch (error) {
            expect(error).to.be.an('error');
        }
    });
});


