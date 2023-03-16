import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ItemCard from '../components/ItemCard';
import Loading from '../components/Loading';
import { fetchItems } from '../store/actions/actionItem';

const MenuPage = () => {
  const { items, loading } = useSelector(state => state.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchItems());
  }, [])
  
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
