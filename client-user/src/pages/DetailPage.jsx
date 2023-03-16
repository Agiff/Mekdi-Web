import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Loading from '../components/Loading';
import { getPrice } from '../helpers';
import { fetchItemDetail } from '../store/actions/actionItem';

const DetailPage = () => {
  const { itemId } = useParams();
  const dispatch = useDispatch();
  const { itemDetail, loading } = useSelector(state => state.items);

  useEffect(() => {
    dispatch(fetchItemDetail(itemId));
  }, [])

  return (
    <>
      {
        loading ? <Loading /> :
        <div className='row'>
          <h1>Detail Page {itemDetail.id}</h1>
          <div className='col-8'>
            <img src={itemDetail.imgUrl} alt={itemDetail.name} className='w-100' />
          </div>
          <div className='col-4' style={{textAlign: 'start'}}>
            <h4>{itemDetail.name}</h4>
            <div className='d-flex justify-content-between pe-4'>
              <h4>{getPrice(itemDetail.price)}</h4>
              <h4>{itemDetail.categoryId}</h4>
            </div>
            <p>{itemDetail.description}</p>
          </div>
        </div>
      }
    </>
  )
}

export default DetailPage
