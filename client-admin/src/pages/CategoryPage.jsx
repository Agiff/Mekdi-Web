import React, { useEffect, useState } from 'react';
import Loading from '../components/Loading';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { getDate } from '../helpers';
import CategoryForm from '../components/CategoryForm';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCategory, fetchCategories } from '../store/actions/actionCategory';
import { failureAlert, successAlert } from '../helpers/sweetalert';

const CategoryPage = () => {
  const [categoryFormShow, setCategoryFormShow] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const { categories, loading } = useSelector(state => state.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories())
      .catch(error => failureAlert(error.message));
  }, [])
  
  const deleteHandler = (categoryId) => {
    dispatch(deleteCategory(categoryId))
      .then(() => successAlert('Category removed'))
      .catch(error => failureAlert(error.message));
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
          <div className='d-flex justify-content-end mb-3'>
            <Button variant="primary" className='btn btn-primary px-4'
            onClick={() => addCategoryHandler()}>Create Category</Button>
          </div>
          <CategoryForm
            show={categoryFormShow}
            onHide={() => setCategoryFormShow(false)}
            selectedCategory={selectedCategory}
          />
          <Table bordered hover>
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
                      <Button onClick={() => editCategoryHandler(category)} variant="primary" className='btn btn-primary me-3'>Edit</Button>
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
