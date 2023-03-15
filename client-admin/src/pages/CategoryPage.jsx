import React, { useEffect, useState } from 'react';
import Loading from '../components/Loading';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { getDate } from '../helpers';
import CategoryForm from '../components/CategoryForm';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories, loadingCategories } from '../store/actions/actionCreator';

const CategoryPage = () => {
  const [categoryFormShow, setCategoryFormShow] = React.useState(false);
  const [error, setError] = useState('');
  const { categories, loading } = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    async function getCategories() {
      try {
        dispatch(loadingCategories(true));
        const response = await fetch('http://localhost:3000/categories');
        if (!response.ok) throw await response.text();
        const categories = await response.json();
        dispatch(fetchCategories(categories));
        dispatch(loadingCategories(false));
      } catch (err) {
        setError(err);
      }
    }
    getCategories();
  }, [])
  
  const deleteHandler = async (id) => {
    await fetch('http://localhost:3000/categories/' + id, {
      method: 'DELETE'
    });
  }

  if (error) <div>{error}</div>

  return (
    <div className='container'>
      {
        loading ? <Loading /> : <>
          <div className='d-flex justify-content-between'>
            <h1>Category</h1>
            <Button variant="primary" className='btn btn-primary px-4'
            onClick={() => setCategoryFormShow(true)}>Add</Button>
          </div>
          <CategoryForm
            show={categoryFormShow}
            onHide={() => setCategoryFormShow(false)}
          />
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
                      <Button variant="primary" className='btn btn-primary'>Edit</Button>
                      <Button onClick={() => deleteHandler(category.id)} variant="primary" className='btn btn-danger'>Delete</Button>
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
