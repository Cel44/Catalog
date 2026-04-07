"use client";
import { useRouter, useSearchParams } from 'next/navigation';
import data from '@/public/data.json';
import { useState } from 'react';

export default function Navbar() {
   const router = useRouter();
   const searchParams = useSearchParams();

   const [category, setCategory] = useState(searchParams.get("category") || "");
   const [subCategory, setSubCategory] = useState(searchParams.get("subCategory") || "");
   const [brand, setBrand] = useState(searchParams.get("brand") || "");

   function applyFilter(){
      const params = new URLSearchParams();
      if(category) params.set('category', category);
      if(subCategory) params.set('subCategory', subCategory);
      if(brand) params.set('brand', brand);

      router.push(`/?${params.toString()}`);
   }

   const filteredSubCategories = data.subCategories.filter((sub) => {
      return !category || sub.categoryId === category;
    });

   const filteredBrands = data.brands.filter((b) => {
      return !subCategory || b.subCategoryId === subCategory;
   });

   return ( 
         <div className="flex gap-6 bg-gray-100 px-4">
       
           {/* CATEGORY */}
            <select
               value={category}
               onChange={(e) => { setCategory(e.target.value); setSubCategory(""); setBrand(""); }}
               className='p-1 px-2 text-white my-1.5 rounded-md bg-pink-400 inset-ring-1 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 focus:ring-offset-gray-100'
            >
               <option value="">All Categories</option>
                  {data.categories.map((cat) => (
                     <option key={cat.id} value={cat.id}>
                     {cat.name}
               </option>
               ))}
            </select>
       
            {/* SUBCATEGORY */}
            <select
               disabled={!category}
               value={subCategory}
               onChange={(e) => { setSubCategory(e.target.value); setBrand(""); }}
               className='p-1 px-2 text-white my-1.5 rounded-md bg-pink-400 inset-ring-1 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 focus:ring-offset-gray-100'
            >
               <option value="">All Subcategories</option>
               {filteredSubCategories.map((sub) => (
                  <option key={sub.id} value={sub.id}>
                  {sub.name}
                  </option>
               ))}
            </select>
       
            {/* BRAND */}
            <select
               disabled={!subCategory}
               value={brand}
               onChange={(e) => setBrand(e.target.value)}
               className='p-1 px-2 text-white my-1.5 rounded-md bg-pink-400 inset-ring-1 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 focus:ring-offset-gray-100'
            >
               <option value="">All Brands</option>
               {filteredBrands.map((brand) => (
                  <option key={brand.id} value={brand.id}>
                  {brand.name}
               </option>
               ))}
            </select>

            {/* BUTTON */}
            <button
               onClick={applyFilter}
               className="p-1 px-2 text-white my-1.5 rounded-md bg-pink-400 inset-ring-1 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 focus:ring-offset-gray-100"
            >
               Filter
            </button>

            <a href="/" className="p-1 px-2 text-white my-1.5 rounded-md bg-pink-400 inset-ring-1 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 focus:ring-offset-gray-100">
               Reset
            </a>
       
         </div>
       );
}