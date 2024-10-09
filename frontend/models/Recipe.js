import mongoose from 'mongoose';

const RecipeSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  detailedIngredients: [
    {
      type: String, // You can also use an array of objects if you want more details for each ingredient
    },
  ],
  instructions: {
    type: [String], // Array of instructions
    required: true,
  },
  cookingTime: {
    type: String, // You can use a string or a number depending on how you structure the cooking time
    required: true,
  },
  tags: {
    type: [String], // Array of tags related to the recipe
  },
  recipeImage: {
    type: String, // URL to the recipe image
  },
  savedAt: {
    type: Date,
    default: Date.now,
  },
});

const Recipe = mongoose.models.Recipe || mongoose.model('Recipe', RecipeSchema);

export default Recipe;
