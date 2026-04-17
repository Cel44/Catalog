"use client"

import { useSearchParams, useRouter } from "next/navigation";
import data from "@/data/data.json";
import Link from "next/link";

export default function Breadcrumbs() {
   const searchParams = useSearchParams();
   const router = useRouter();

   const categoryId = searchParams.get("category");
   const subCategoryId = searchParams.get("subCategory");
   const brandId = searchParams.get("brand");

   const category = data.categories.find((cat) => cat.id === categoryId);
   const subCategory = data.subCategories.find((sub) => sub.id === subCategoryId);
   const brand = data.brands.find((b) => b.id === brandId);

   function removeFilter(key: string){
      const params = new URLSearchParams(searchParams.toString());
      params.delete(key);

      const qs = params.toString();
      router.push(qs ? `/?${qs}` : `/`);
   }

   let allCategories;

   if (!category && !subCategory && !brand) {
      allCategories = <span className="px-4"> All Categories</span>;
   }

   return (
      <div className="flex ml-10 items-center w-max text-white bg-pink-600 rounded-2xl py-1 px-6" aria-label="Breadcrumbs">

         <div>
            {allCategories}
         </div>

         {category && 
         <span
            onClick={() => removeFilter("category")}
            className="cursor-pointer"
         >
            {category.name} 
         </span>}

         {subCategory && (
         <div>
            <span className="px-4">&gt;</span>
            <span
               onClick={() => removeFilter("subCategory")}
               className="cursor-pointer"
            >
               {subCategory.name}
            </span>
         </div>
         )}

         {brand && (
            <div>
               <span className="px-4">&gt;</span>
               <span
                  onClick={() => removeFilter("brand")}
                  className="cursor-pointer"
               >
                  {brand.name}
               </span>
            </div>
         )}
      </div>
   );
}
