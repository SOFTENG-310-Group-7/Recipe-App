import dbConnect from '@/utils/dbConnect';
import Recipe from '@/models/Recipe';
import { NextResponse } from 'next/server';

export async function GET(request) {
  const { userId } = request.query;

  if (!userId) {
    return NextResponse.json({ message: 'User ID is required' }, { status: 400 });
  }

  await dbConnect();

  try {
    const recipes = await Recipe.find({ userId });
    return NextResponse.json({ recipes }, { status: 200 });
  } catch (error) {
    console.error('Error fetching saved recipes:', error);
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
  }
}
