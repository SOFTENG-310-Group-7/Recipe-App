import React from 'react';
import Image from 'next/image';

// Importing images
import pasta from '../img/pasta.png';
import pizza from '../img/pizza.png';
import vegan from '../img/vegan.png';
import dessert from '../img/dessert.png';
import breakfast from '../img/breakfast.png';

const categories = [
  { title: 'Pasta', img: pasta },
  { title: 'Pizza', img: pizza },
  { title: 'Vegan', img: vegan },
  { title: 'Dessert', img: dessert },
  { title: 'Breakfast', img: breakfast },
];

const PopularCategories = () => {
  return (
    <div className="text-center mt-12">
      <h2 className="text-2xl font-bold mb-8">Popular Categories</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {categories.map((category, index) => (
          <div key={index} className="flex flex-col items-center">
<div className="w-24 h-24 rounded-full overflow-hidden shadow-lg cursor-pointer">
              <Image
                src={category.img}
                alt={category.title}
                width={96}
                height={96}
                className="object-cover w-full h-full"
              />
            </div>
            <p className="mt-4 text-lg font-medium">{category.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularCategories;

