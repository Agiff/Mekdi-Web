import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Loading from '../components/Loading';
import { getPrice } from '../helpers';
import { failureAlert } from '../helpers/sweetalert';
import { fetchItemDetail } from '../store/actions/actionItem';

const DetailPage = () => {
  const { itemId } = useParams();
  const dispatch = useDispatch();
  const { itemDetail, loading } = useSelector(state => state.items);

  useEffect(() => {
    dispatch(fetchItemDetail(itemId))
      .catch(error => failureAlert(error.message));
  }, [])

  return (
    <div className='container py-5'>
      {
        loading ? <Loading /> :
        <div className='row'>
          <div className='col-8'>
            <img src={itemDetail.imgUrl} alt={itemDetail.name} width={500} />
          </div>
          <div className='col-4' style={{textAlign: 'start'}}>
            <h2 className='mb-3'>{itemDetail.name}</h2>
            <div className='d-flex justify-content-between pe-4 mb-3'>
              <h4>{getPrice(itemDetail.price)}</h4>
              <h4>{itemDetail.Category?.name}</h4>
            </div>
            <p className='mb-4 text-secondary'>{itemDetail.description}</p>
            <h5 className='mb-3'>Ingredients: </h5>
            {
              itemDetail.Ingredients?.length <= 0 ? '-' :
              <>
                {
                  itemDetail.Ingredients?.map((ingredient, index) => {
                    return (
                      <p key={index}>{index+1}. {ingredient.name}</p>
                    )
                  })
                }
              </>
            }
          </div>
        </div>
      }
    </div>
  )
}

export default DetailPage
