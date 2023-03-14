import React from 'react';
import useFetch from '../hooks/useFetch';
import ItemCard from '../components/ItemCard';
import Loading from '../components/Loading';

const MenuPage = () => {
  const [items, loading, error] = useFetch('items');

  if (error) return <div>{error}</div>

  return (
    <div>
      <h1>Menu</h1>
      <div className='d-flex flex-wrap justify-content-center align-items-center p-3'>
        {
          loading ? <Loading /> : items.map(item => {
            return <ItemCard item={item} key={item.id}/>
          })
        }
      </div>
    </div>
  )
}

export default MenuPage
