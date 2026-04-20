import React from 'react';

export default function Header() {
   return (
      <nav className="border-b border-gray-200 bg-pink-300">
         <div className="container mx-4 flex h-16 items-center justify-between">
            <h1 className="flex items-center gap-2 text-2xl font-bold text-white">
               Catalog 
            </h1>
         </div>
      </nav>
   )
}