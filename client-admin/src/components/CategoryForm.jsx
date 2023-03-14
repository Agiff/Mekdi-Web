import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const CategoryForm = (props) => {
  const [categoryForm, setCategoryForm] = useState({
    name: '',
    createdAt: new Date(),
    updatedAt: new Date()
  });

  const changeCategoryFormHandler = (e) => {
    const { value, name } = e.target;
    const newCategoryForm = {
      ...categoryForm,
      [name]: value
    }
    setCategoryForm(newCategoryForm);
  }

  const submitAddCategory = async (e) => {
    e.preventDefault();
    await fetch('http://localhost:3000/categories', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(categoryForm)
    });
    props.onHide();
  }

  return (
    <div className='container'>
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add Category
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={submitAddCategory} className='px-2'>
            <Form.Group className="mb-3" controlId="formCategoryName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name='name' onChange={changeCategoryFormHandler}/>
            </Form.Group>
            <Button variant="primary" type="submit" className='px-4'>
              Add
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default CategoryForm
