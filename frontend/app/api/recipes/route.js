import dbConnect from '@/utils/dbConnect';
import Recipe from '@/models/Recipe';
import { NextResponse } from 'next/server';

export async function POST(request) {
  const { userId, title, detailedIngredients, instructions, cookingTime, tags, recipeImage } = await request.json();

  if (!userId || !title || !instructions || !detailedIngredients || !cookingTime) {
    return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
  }

  await dbConnect();

  try {
    const newRecipe = new Recipe({
      userId,
      title,
      detailedIngredients,
      instructions,
      cookingTime,
      tags,
      recipeImage,
    });

    await newRecipe.save();

    return NextResponse.json({ message: 'Recipe saved successfully.' }, { status: 201 });
  } catch (error) {
    console.error('Save recipe error:', error);
    return NextResponse.json({ message: 'Server error during recipe saving.' }, { status: 500 });
  }
}
