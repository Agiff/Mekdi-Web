import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../store/actions/actionCategory';
import { addItem, updateItem } from '../store/actions/actionItem';

const ItemForm = ({ show, onHide, selectedItem }) => {
  const dispatch = useDispatch();
  const { categories } = useSelector(state => state.categories);
  const [itemForm, setItemForm] = useState({
    name: '',
    description: '',
    price: 0,
    imgUrl: '',
    categoryId: 0
  });

  useEffect(() => {
    dispatch(fetchCategories());
    if (selectedItem) {
      setItemForm({
        name: selectedItem.name,
        description: selectedItem.description,
        price: selectedItem.price,
        imgUrl: selectedItem.imgUrl,
        categoryId: selectedItem.categoryId
      })
    } else {
      setItemForm({
        name: '',
        description: '',
        price: 0,
        imgUrl: '',
        categoryId: 1
      })
    }
  }, [selectedItem])

  const changeItemFormHandler = (e) => {
    const { value, name } = e.target;
    const newItemForm = {
      ...itemForm,
      [name]: value
    }
    setItemForm(newItemForm);
  }

  const submitAddItem = (e) => {
    e.preventDefault();
    dispatch(addItem(itemForm))
      .then(() => onHide())
      .catch(err => console.log(err));
  }

  const submitEditItem = (e) => {
    e.preventDefault();
    dispatch(updateItem(itemForm, selectedItem.id))
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
            { selectedItem ? 'Edit Item' : 'Add Item' }
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={selectedItem ? submitEditItem : submitAddItem} className='px-2'>
            <Form.Group className="mb-3" controlId="formItemName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name='name' value={itemForm.name} onChange={changeItemFormHandler}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formItemDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} name='description' value={itemForm.description} onChange={changeItemFormHandler} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formItemPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control type="number" name='price' value={itemForm.price} onChange={changeItemFormHandler} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formItemImage">
              <Form.Label>Image</Form.Label>
              <Form.Control type="text" name='imgUrl' value={itemForm.imgUrl} onChange={changeItemFormHandler} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formItemCategory">
              <Form.Label>Category</Form.Label>
              <Form.Select aria-label="Default select example" name='categoryId' value={itemForm.categoryId} onChange={changeItemFormHandler}>
                {
                  categories?.map(category => <option value={category.id} key={category.id}>{category.name}</option>)
                }
              </Form.Select>
            </Form.Group>
            
            <Button variant="primary" type="submit" className='px-4'>
              { selectedItem ? 'Edit' : 'Add' }
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default ItemForm
