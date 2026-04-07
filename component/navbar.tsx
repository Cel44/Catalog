"use client";
import { useRouter, useSearchParams } from 'next/navigation';
import data from '@/public/data.json';

export default function Navbar() {
   const router = useRouter();
   const searchParams = useSearchParams();

   function setCategory (category:string) {
      const params = new URLSearchParams(searchParams.toString());
      params.set('category', category);
      router.push(`/?${params.toString()}`);
   }

   function setSubCategory (subCategory:string) {
      const params = new URLSearchParams(searchParams.toString());
      params.set('subCategory', subCategory);
      router.push(`/?${params.toString()}`);
   }

   function setBrands (brands:string) {
      const params = new URLSearchParams(searchParams.toString());
      params.set('brands', brands);
      router.push(`/?${params.toString()}`);
   }

   const selectedCategory = searchParams.get('category') || '';
   const selectedSubCategory = searchParams.get('subCategory') || '';
   const selectedBrand = searchParams.get('brands') || '';

   return ( 
         <div className="flex gap-6 bg-gray-100 px-4">
       
           {/* CATEGORY */}
           <select
             value={selectedCategory}
             onChange={(e) => setCategory(e.target.value)}
             className='text-black onTarget:bg-gray-300'
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
             value={selectedSubCategory}
             onChange={(e) => setSubCategory(e.target.value)}
           >
             <option value="">All Subcategories</option>
             {data.subCategories.map((sub) => (
               <option key={sub.id} value={sub.id}>
                 {sub.name}
               </option>
             ))}
           </select>
       
           {/* BRAND */}
           <select
             value={selectedBrand}
             onChange={(e) => setBrands(e.target.value)}
             className='text-black'
           >
             <option value="">All Brands</option>
             {data.brands.map((brand) => (
               <option key={brand.id} value={brand.id}>
                 {brand.name}
               </option>
             ))}
           </select>
       
         </div>
       );
}