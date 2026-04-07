"use client";
import data from "@/public/data.json";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function ItemList() {
   const searchParams = useSearchParams();

   const products = data.products;

   const brandsById = data.brands.map((brand) => ({ id: brand.id, subCategoryId: brand.subCategoryId, name: brand.name }));
   const subCategoriesById = data.subCategories.map((sub) => ({ id: sub.id, categoryId: sub.categoryId, name: sub.name }));
   const categoriesById = data.categories.map((cat) => ({ id: cat.id, name: cat.name }));

   const itemDetails = products.map((product) => {
      const brand = brandsById.find((b) => b.id === product.brandId)?.name || "Unknown Brand";

      return {
         id: product.id,
         name: product.name,
         price: product.price,
         brand
      };
   });

   const category = data.categories.find((cat) => cat.id === searchParams.get("category"));
   const subCategory = data.subCategories.find((sub) => sub.id === searchParams.get("subCategory"));
   const brand = data.brands.find((b) => b.id === searchParams.get("brand"));

   const selectedCategory = category ? category.id : "";
   const selectedSubCategory = subCategory ? subCategory.id : "";
   const selectedBrand = brand ? brand.id : "";

   const filteredProducts = data.products.filter((product) => {
      const brand = data.brands.find(
        (b) => b.id === product.brandId
      );
    
      const sub = data.subCategories.find(
        (s) => s.id === brand?.subCategoryId
      );
    
      return (
        (!selectedCategory || sub?.categoryId === selectedCategory) &&
        (!selectedSubCategory || sub?.id === selectedSubCategory) &&
        (!selectedBrand || product.brandId === selectedBrand)
      );
   });

   return (
      <div> 
         {filteredProducts.map((product) => (
            <div key={product.id} className="text-black border p-4 m-10 rounded-md flex flex-col gap-1 rounded-lg hover:scale-105 transition-transform">
               <h3>{product.name}</h3>
               <p>Brand: {itemDetails.find(item => item.id === product.id)?.brand}</p>
               <p>Price: ${product.price}</p>
            </div>
         ))}
      </div>
   );
}

console.log(data);