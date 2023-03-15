import React, { useEffect, useState } from 'react';
import Loading from '../components/Loading';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { getPrice } from '../helpers';
import ItemForm from '../components/ItemForm';
import { useSelector, useDispatch } from 'react-redux'

const HomePage = () => {
  const [itemFormShow, setItemFormShow] = React.useState(false);
  const [error, setError] = useState('');
  const { items, loading } = useSelector((state) => state)
  const dispatch = useDispatch();

  useEffect(() => {
    async function getItems() {
      try {
        dispatch({ type: 'items/changeLoading', payload: true });
        const response = await fetch('http://localhost:3000/items');
        if (!response.ok) throw await response.text();
        const items = await response.json();
        dispatch({ type: 'items/fetchSuccess', payload: items });
        dispatch({ type: 'items/changeLoading', payload: false });
      } catch (err) {
        setError(err);
      }
    }
    getItems();
  }, [])

  const deleteHandler = async (id) => {
    await fetch('http://localhost:3000/items/' + id, {
      method: 'DELETE'
    });
  }

  if (error) return <div>{error}</div>

  return (
    <div className='container'>
      {
        loading ? <Loading /> : <>
          <div className='d-flex justify-content-between'>
            <h1>Home</h1>
            <Button variant="primary" className='btn btn-primary px-4'
            onClick={() => setItemFormShow(true)}>Add</Button>
          </div>
          <ItemForm
            show={itemFormShow}
            onHide={() => setItemFormShow(false)}
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
                <th>Author</th>
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
                    <td>{item.authorId}</td>
                    <td>{item.categoryId}</td>
                    <td>
                      <Button variant="primary" className='btn btn-primary'>Edit</Button>
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
