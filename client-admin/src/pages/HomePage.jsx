import React, { useEffect, useState } from 'react';
import Loading from '../components/Loading';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { getPrice } from '../helpers';
import ItemForm from '../components/ItemForm';
import { useSelector, useDispatch } from 'react-redux'
import { deleteItem, fetchItems } from '../store/actions/actionItem';
import { failureAlert, successAlert } from '../helpers/sweetalert';
import IngredientModal from '../components/IngredientModal';

const HomePage = () => {
  const [itemFormShow, setItemFormShow] = useState(false);
  const [ingredientShow, setIngredientShow] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const { items, loading } = useSelector((state) => state.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchItems())
      .catch(error => failureAlert(error.message))
  }, [])

  const deleteHandler = (itemId) => {
    dispatch(deleteItem(itemId))
      .then(() => successAlert('Item removed'))
      .catch(error => failureAlert(error.message));
  }

  const addItemHandler = () => {
    setSelectedItem(null);
    setItemFormShow(true);
  }

  const editItemHandler = (item) => {
    setSelectedItem(item);
    setItemFormShow(true);
  }

  const showIngredients = (item) => {
    setSelectedItem(item);
    setIngredientShow(true);
  }

  return (
    <div className='container'>
      {
        loading ? <Loading /> : <>
          <div className='d-flex justify-content-end mb-3'>
            <Button variant="primary" className='btn btn-primary px-4'
            onClick={() => addItemHandler()}>Create Item</Button>
          </div>
          <ItemForm
            show={itemFormShow}
            onHide={() => setItemFormShow(false)}
            selectedItem={selectedItem}
          />
          <IngredientModal
            show={ingredientShow}
            onHide={() => setIngredientShow(false)}
            selectedItem={selectedItem}
          />
          <Table bordered hover>
            <thead>
              <tr>
                <th>NO</th>
                <th>NAME</th>
                <th>CATEGORY</th>
                <th>PRICE</th>
                <th>CREATED BY</th>
                <th>IMAGE</th>
                <th>INGREDIENTS</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {
                items?.map((item, index) => {
                  return <tr key={item.id}>
                    <td>{index+1}</td>
                    <td width={'200'}>{item.name}</td>
                    <td>{item.Category?.name}</td>
                    <td>{getPrice(item.price)}</td>
                    <td>{item.User?.username}</td>
                    <td><img src={item.imgUrl} alt={item.name} width="100" /></td>
                    <td><Button onClick={() => showIngredients(item)} variant="primary" className='btn btn-success'>Show Ingredient</Button></td>
                    <td>
                      <Button onClick={() => editItemHandler(item)} variant="primary" className='btn btn-primary me-3'>Edit</Button>
                      <Button onClick={() => deleteHandler(item.id)} variant="primary" className='btn btn-danger'>Delete</Button>
                    </td>
                  </tr>
                })
              }
            </tbody>
          </Table>
        </>
      }
    </div>
  )
}

export default HomePage
