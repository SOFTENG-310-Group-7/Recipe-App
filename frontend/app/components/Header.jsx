"use client"


import Link from 'next/link';
import {Button} from "@nextui-org/react";

export default function Header() {
  return (
    <div className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <h1 className="text-4xl font-bold text-purple-700">MEALMATCH</h1>
    <div>
     <Button color="primary" variant="ghost" >
        Saved 
      </Button>
      <Button color="primary" variant="ghost">
        About
      </Button>
      </div>
    </div>
  );
}

