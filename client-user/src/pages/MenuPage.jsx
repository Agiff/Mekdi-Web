import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ItemCard from '../components/ItemCard';
import Loading from '../components/Loading';
import { failureAlert } from '../helpers/sweetalert';
import { fetchItems } from '../store/actions/actionItem';

const MenuPage = () => {
  const { items, loading } = useSelector(state => state.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchItems())
      .catch(error => failureAlert(error.message));
  }, [])
  
  return (
    <div className='container'>
      <div className='d-flex'>
        <div className='d-flex flex-wrap justify-content-center align-items-center'>
          {
            loading ? <Loading /> : items.map(item => {
              return <ItemCard item={item} key={item.id}/>
            })
          }
        </div>
        <img src="https://www.mcdelivery.co.id/id/static/1677662128341/assets/62/img/how_mcdelivery_works_portrait_in.png" alt=""
        className='h-100 mt-3'
        style={{ cursor: 'pointer' }}/>
      </div>
    </div>
  )
}

export default MenuPage
