import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ItemCard from '../components/ItemCard';
import Loading from '../components/Loading';
import MenuRow from '../components/MenuRow';
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
        <div className='bg-warning p-3 w-100 h-100 card mt-3 text-start'>
          <div className='text-light fs-5' style={{ cursor: 'pointer' }}>
            <p>Regular</p>
          </div>
          <MenuRow name={'Menu Promosi'}/>
          <MenuRow name={'A La Carte & Paket'}/>
          <MenuRow name={'Tambahan'}/>
          <MenuRow name={'Pencuci Mulut'}/>
          <MenuRow name={'Minuman'}/>
          <MenuRow name={'Happy Meal'}/>
          <MenuRow name={'Menu Keluarga'}/>
          <MenuRow name={'McCafe Pastries'}/>
          <MenuRow name={'McCafe Drinks'}/>
          <div className='fs-5' style={{ cursor: 'pointer' }}>
            <p>Breakfast</p>
            <p></p>
          </div>
        </div>
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
