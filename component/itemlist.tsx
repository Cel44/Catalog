import { getItems } from '@/app/lib/api';
import { useState, useEffect } from 'react';
import React from 'react';

const [items, setItems] = useState([]);
const [loading, setLoading] = useState(true);

export default function ItemList() {
  
   const fetchData = async () => {
      useEffect(() => {
         async function fetchData() {
            try {
               const data = await getItems();
               setItems(data);
            } catch (err) {
               console.error(err);
               alert("Failed to load items");
            } finally {
               setLoading(false);
            }
         };
         fetchData();
      }, []);
   }

  return (
    <div>
      
    </div>
  );
}
