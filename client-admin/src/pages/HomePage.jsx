import React, { useEffect, useState } from 'react';
import ItemCard from '../components/ItemCard';

const HomePage = () => {
  const [items, setItems] = useState([]);
  
  useEffect(() => {
    async function getItems() {
      try {
        let dataItems = await fetch('http://localhost:3000/items');
        if (!dataItems) throw await dataItems.text();
        dataItems = await dataItems.json();
        setItems(dataItems);
      } catch (error) {
        console.log(error);
      }
    }
    getItems();
  }, [])
  

  return (
    <div>
      <h1>Home</h1>
      {
        items.map(item => {
          return <ItemCard key={item.id} item={item}/>
        })
      }
    </div>
  )
}

export default HomePage
