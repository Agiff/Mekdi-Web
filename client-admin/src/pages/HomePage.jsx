import React, { useEffect, useState } from 'react';
import Loading from '../components/Loading';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const HomePage = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    async function getItems() {
      try {
        let dataItems = await fetch('http://localhost:3000/items');
        if (!dataItems) throw await dataItems.text();
        dataItems = await dataItems.json();
        setItems(dataItems);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    getItems();
  }, [])
  

  return (
    <div>
      {
        loading ? <Loading /> : <>
          <h1>Home</h1>
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
                    <td>Rp. {item.price}</td>
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
