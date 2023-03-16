import React, { useEffect, useState } from 'react';
import Loading from '../components/Loading';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { getPrice } from '../helpers';
import ItemForm from '../components/ItemForm';
import { useSelector, useDispatch } from 'react-redux'
import { deleteItem, fetchItems } from '../store/actions/actionItem';

const HomePage = () => {
  const [itemFormShow, setItemFormShow] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const { items, loading } = useSelector((state) => state.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchItems());
  }, [])

  const deleteHandler = (itemId) => {
    dispatch(deleteItem(itemId))
      .catch(err => console.log(err));
  }

  const addItemHandler = () => {
    setSelectedItem(null);
    setItemFormShow(true);
  }

  const editItemHandler = (item) => {
    setSelectedItem(item);
    setItemFormShow(true);
  }

  return (
    <div className='container'>
      {
        loading ? <Loading /> : <>
          <div className='d-flex justify-content-between'>
            <h1>Home</h1>
            <Button variant="primary" className='btn btn-primary px-4'
            onClick={() => addItemHandler()}>Add</Button>
          </div>
          <ItemForm
            show={itemFormShow}
            onHide={() => setItemFormShow(false)}
            selectedItem={selectedItem}
          />
          <hr />
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th width="250">Description</th>
                <th>Price</th>
                <th>Image</th>
                <th>Created By</th>
                <th>Category</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                items.map((item, index) => {
                  return <tr key={item.id}>
                    <td>{index+1}</td>
                    <td>{item.name}</td>
                    <td>{item.description}</td>
                    <td>{getPrice(item.price)}</td>
                    <td><img src={item.imgUrl} alt={item.name} width="100" /></td>
                    <td>{item.User.username}</td>
                    <td>{item.Category.name}</td>
                    <td>
                      <Button onClick={() => editItemHandler(item)} variant="primary" className='btn btn-primary'>Edit</Button>
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
