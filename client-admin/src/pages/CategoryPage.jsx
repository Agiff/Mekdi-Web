import React, { useEffect, useState } from 'react';
import Loading from '../components/Loading';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { getDate } from '../helpers';
import CategoryForm from '../components/CategoryForm';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCategory, fetchCategories } from '../store/actions/actionCreator';

const CategoryPage = () => {
  const [categoryFormShow, setCategoryFormShow] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const { categories, loading } = useSelector(state => state.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [])
  
  const deleteHandler = (categoryId) => {
    dispatch(deleteCategory(categoryId))
      .catch(err => console.log(err));
  }

  const addCategoryHandler = () => {
    setSelectedCategory(null);
    setCategoryFormShow(true);
  }

  const editCategoryHandler = (category) => {
    setSelectedCategory(category);
    setCategoryFormShow(true);
  }

  return (
    <div className='container'>
      {
        loading ? <Loading /> : <>
          <div className='d-flex justify-content-between'>
            <h1>Category</h1>
            <Button variant="primary" className='btn btn-primary px-4'
            onClick={() => addCategoryHandler()}>Add</Button>
          </div>
          <CategoryForm
            show={categoryFormShow}
            onHide={() => setCategoryFormShow(false)}
            selectedCategory={selectedCategory}
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
                      <Button onClick={() => editCategoryHandler(category)} variant="primary" className='btn btn-primary'>Edit</Button>
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
