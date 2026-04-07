import ItemList from "@/component/itemlist";


export default function Home() {
  return (
   <div className="flex min-h-screen flex-col justify-center bg-gray-200">
     
     <main className="flex-1">
         
         <section className="container mx-auto p-4">
           <div className="text-center">
               <h1 className="text-black font-bold">Welcome to Our Store</h1>
               <p className="text-black">Explore our wide range of products</p>
           </div>
         </section>

         {/* Item Lists */}
         <section>
            <ItemList />
         </section>
         
     </main>
   </div>
  );
}
