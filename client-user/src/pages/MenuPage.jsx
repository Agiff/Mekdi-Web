import React from 'react';
import { useState, useEffect } from 'react';
import ItemCard from '../components/ItemCard';
import Loading from '../components/Loading';

const MenuPage = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    async function getItems() {
      try {
        let dataItems = await fetch('http://localhost:3000/items');
        if (!dataItems) throw await dataItems.text();
        dataItems = await dataItems.json();
        setItems(dataItems);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    getItems();
  }, [])

  return (
    <div>
      <h1>Menu</h1>
      <div className='d-flex flex-wrap justify-content-center align-items-center p-3'>
        {
          loading ? <Loading /> : items.map(item => {
            return <ItemCard item={item}/>
          })
        }
      </div>
    </div>
  )
}

export default MenuPage
