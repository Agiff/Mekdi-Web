import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Loading from './Loading';
import useFetch from '../hooks/useFetch';
import Modal from 'react-bootstrap/Modal';

const ItemForm = (props) => {
  const [categories, loading, error] = useFetch('categories');
  const [itemForm, setItemForm] = useState({
    name: '',
    description: '',
    price: 0,
    imgUrl: '',
    authorId: 1,
    categoryId: 0
  });

  const changeItemFormHandler = (e) => {
    const { value, name } = e.target;
    const newItemForm = {
      ...itemForm,
      [name]: value
    }
    setItemForm(newItemForm);
  }

  const submitAddItem = async (e) => {
    e.preventDefault();
    await fetch('http://localhost:3000/items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(itemForm)
    });
    props.onHide();
  }

  if (error) return <div>{error}</div>

  return (
    <div className='container'>
      {
        loading ? <Loading /> : <>
          <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                { props.selectedItem ? 'Edit Item' : 'Add Item' }
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={submitAddItem} className='px-2'>
                <Form.Group className="mb-3" controlId="formItemName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" name='name' value={props.selectedItem ? props.selectedItem?.name : ''} onChange={changeItemFormHandler}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formItemDescription">
                  <Form.Label>Description</Form.Label>
                  <Form.Control as="textarea" rows={3} name='description' value={props.selectedItem ? props.selectedItem?.description : ''} onChange={changeItemFormHandler} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formItemPrice">
                  <Form.Label>Price</Form.Label>
                  <Form.Control type="number" name='price' value={props.selectedItem ? props.selectedItem?.price : ''} onChange={changeItemFormHandler} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formItemImage">
                  <Form.Label>Image</Form.Label>
                  <Form.Control type="text" name='imgUrl' value={props.selectedItem ? props.selectedItem?.imgUrl : ''} onChange={changeItemFormHandler} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formItemCategory">
                  <Form.Label>Category</Form.Label>
                  <Form.Select aria-label="Default select example" name='categoryId' onChange={changeItemFormHandler}>
                    <option>-- Select --</option>
                    {
                      categories.map(category => <option selected={category.id === props.selectedItem?.categoryId} value={category.id} key={category.id}>{category.name}</option>)
                    }
                  </Form.Select>
                </Form.Group>
                
                <Button variant="primary" type="submit" className='px-4'>
                  { props.selectedItem ? 'Edit' : 'Add' }
                </Button>
              </Form>
            </Modal.Body>
          </Modal>
        </>
      }
    </div>
  )
}

export default ItemForm
