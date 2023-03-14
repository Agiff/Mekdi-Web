import React from 'react';
import Loading from '../components/Loading';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import useFetch from '../hooks/useFetch';
import { getPrice } from '../helpers';

const HomePage = () => {
  const [items, loading, error] = useFetch('items');

  if (error) return <div>{error}</div>

  return (
    <div className='container'>
      {
        loading ? <Loading /> : <>
          <div className='d-flex justify-content-between'>
            <h1>Home</h1>
            <Button variant="primary" className='btn btn-primary px-4'>Add</Button>
          </div>
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
                      <Button variant="primary" className='btn btn-danger'>Delete</Button>
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
