import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { addCategory, updateCategory } from '../store/actions/actionCreator';

const CategoryForm = ({ show, onHide, selectedCategory }) => {
  const dispatch = useDispatch();
  const [categoryForm, setCategoryForm] = useState({
    name: '',
    createdAt: new Date(),
    updatedAt: new Date()
  });

  useEffect(() => {
    if (selectedCategory) {
      setCategoryForm({
        name: selectedCategory.name,
        createdAt: selectedCategory.createdAt,
        updatedAt: selectedCategory.updatedAt
      })
    } else {
      setCategoryForm({
        name: '',
        createdAt: new Date(),
        updatedAt: new Date()
      })
    }
  }, [selectedCategory])
  

  const changeCategoryFormHandler = (e) => {
    const { value, name } = e.target;
    const newCategoryForm = {
      ...categoryForm,
      [name]: value
    }
    setCategoryForm(newCategoryForm);
  }

  const submitAddCategory = (e) => {
    e.preventDefault();
    dispatch(addCategory(categoryForm))
      .then(() => onHide())
      .catch(err => console.log(err));
  }

  const submitEditCategory = (e) => {
    e.preventDefault();
    dispatch(updateCategory(categoryForm, selectedCategory.id))
    .then(() => onHide())
    .catch(err => console.log(err));
  }

  return (
    <div className='container'>
      <Modal
        show={show}
        onHide={onHide}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            { selectedCategory ? 'Edit Category' : 'Add Category' }
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={selectedCategory ? submitEditCategory : submitAddCategory } className='px-2'>
            <Form.Group className="mb-3" controlId="formCategoryName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name='name' value={categoryForm.name} onChange={changeCategoryFormHandler}/>
            </Form.Group>
            <Button variant="primary" type="submit" className='px-4'>
              { selectedCategory ? 'Edit' : 'Add' }
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default CategoryForm
