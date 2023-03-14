import React from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../components/Loading';
import { getPrice } from '../helpers';
import useFetch from '../hooks/useFetch';

const DetailPage = () => {
  const { itemId } = useParams();
  const [item, loading, error] = useFetch('items', itemId)

  if (error) return <div>{error}</div>

  return (
    <>
      {
        loading ? <Loading /> :
        <div className='row'>
          <h1>Detail Page {item.id}</h1>
          <div className='col-8'>
            <img src={item.imgUrl} alt={item.name} className='w-100' />
          </div>
          <div className='col-4' style={{textAlign: 'start'}}>
            <h4>{item.name}</h4>
            <div className='d-flex justify-content-between pe-4'>
              <h4>{getPrice(item.price)}</h4>
              <h4>{item.categoryId}</h4>
            </div>
            <p>{item.description}</p>
          </div>
        </div>
      }
    </>
  )
}

export default DetailPage
