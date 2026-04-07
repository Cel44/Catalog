import React from 'react';

export default function Header() {
   return (
      <nav className="border-b border-gray-200 bg-pink-300">
         <div className="container mx-auto flex h-16 items-center px-4 justify-between">
            <a href="/" className="flex items-center gap-2 text-2xl font-bold text-white">
               Catalog
            </a>
         </div>
      </nav>
   )
}