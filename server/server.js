const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');
const recipeRoutes = require('../routes/recipes');
const connectDB = require('./db');

const app = express(); 
dotenv.config({ path: './config.env' });

app.use(cors());
app.use(bodyParser.json());

app.use('/api/recipes', recipeRoutes);

// Connect to the database and start the server
const startServer = async () => {
    try {
        const db = await connectDB();
        app.locals.db = db;
        app.listen(5000, () => console.log('Server is running on port 5000.'));
    } catch (error) {
        console.error('Failed to start the server', error);
        process.exit(1);
    }
};

startServer();

let generated_recipes = [];

// Endpoint to see recipes
app.get("/api", (req, res) => {
    res.json({ generatedRecipes: generated_recipes });
});

// Endpoint to add generated recipes to the backend
app.post("/api/generated-recipes", (req, res) => {
    const { recipes } = req.body;

    if (recipes && Array.isArray(recipes)) {
        generated_recipes = recipes; // Replace existing recipes with the new ones
        res.status(200).send({ message: 'Recipes stored successfully' });
    } else {
        res.status(400).send({ message: 'Invalid recipe data' });
    }
});

// Endpoint to see recipes
app.get("/api/generated-recipes", (req, res) => {
    res.json({ generatedRecipes: generated_recipes });
});

module.exports = app;
