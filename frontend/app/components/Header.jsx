"use client"


import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <h1 className="text-4xl font-bold text-purple-700">MEALMATCH</h1>
      <nav className="flex space-x-4">
        <Link href="/saved-recipes" className="text-lg text-blue-500 hover:text-blue-700">
          Saved Recipe
        </Link>
        <Link href="/about" className="text-lg text-blue-500 hover:text-blue-700">
          About
        </Link>
      </nav>
    </header>
  );
}
