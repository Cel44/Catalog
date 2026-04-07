export async function getItems(){

   try {
       const res = await fetch (`@/public/data.json`);
       const data = await res.json()

       if (Array.isArray(data)) return data;
       if (data)return [data];

       return []

   } catch (error){
       console.error(error);
       return []
   }
}