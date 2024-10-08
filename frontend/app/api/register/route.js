// app/api/register/route.js

export const runtime = 'nodejs'; // Ensure Node.js runtime

import dbConnect from '@/utils/dbConnect';
import User from '@/models/User';
import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';

export async function POST(request) {
  const { username, password } = await request.json();

  // Basic validation
  if (!username || !password) {
    return NextResponse.json(
      { message: 'Username and password are required.' },
      { status: 400 }
    );
  }

  await dbConnect();

  try {
    // Check if the username already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return NextResponse.json(
        { message: 'Username already taken.' },
        { status: 400 }
      );
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10); // 10 salt rounds

    // Create the new user
    const newUser = new User({
      username,
      password: hashedPassword,
    });

    await newUser.save();

    return NextResponse.json(
      { message: 'User registered successfully.' },
      { status: 201 }
    );
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { message: 'Server error during registration.' },
      { status: 500 }
    );
  }
}
