import React, { useEffect, useState } from 'react';
import Loading from '../components/Loading';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { getDate } from '../helpers';

const CategoryPage = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    async function getCategories() {
      try {
        let dataCategories = await fetch('http://localhost:3000/categories');
        if (!dataCategories) throw await dataCategories.text();
        dataCategories = await dataCategories.json();
        setCategories(dataCategories);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    getCategories();
  }, [])
  
  return (
    <div className='container'>
      {
        loading ? <Loading /> : <>
          <h1>Category</h1>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Created At</th>
                <th>Updated At</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                categories.map((category, index) => {
                  return <tr key={category.id}>
                    <td>{index+1}</td>
                    <td>{category.name}</td>
                    <td>{getDate(category.createdAt)}</td>
                    <td>{getDate(category.updatedAt)}</td>
                    <td>
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

export default CategoryPage
