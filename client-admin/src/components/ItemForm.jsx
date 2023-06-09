import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { failureAlert, successAlert } from '../helpers/sweetalert';
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
    categoryId: 1,
    ingredients: ['']
  });

  useEffect(() => {
    dispatch(fetchCategories());
    if (selectedItem) {
      const dataIngredients = selectedItem.Ingredients.map(el => el.name);
      if (!dataIngredients.length) dataIngredients.push('');
      setItemForm({
        name: selectedItem.name,
        description: selectedItem.description,
        price: selectedItem.price,
        imgUrl: selectedItem.imgUrl,
        categoryId: selectedItem.categoryId,
        ingredients: dataIngredients
      })
    } else {
      setItemForm({
        name: '',
        description: '',
        price: 0,
        imgUrl: '',
        categoryId: 1,
        ingredients: ['']
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
      .then(() => {
        onHide();
        successAlert('Item added');
      })
      .catch(error => failureAlert(error.message));
  }

  const submitEditItem = (e) => {
    e.preventDefault();
    dispatch(updateItem(itemForm, selectedItem.id))
    .then(() => {
      onHide();
      successAlert('Item updated');
    })
    .catch(error => failureAlert(error.message));
  }

  const addIngredientField = () => {
    const newItemForm = {
      ...itemForm,
      ingredients: [...itemForm.ingredients, ''],
    };
    setItemForm(newItemForm);
  };

  const changeIngredientField = (e, index) => {
    const newIngredients = [...itemForm.ingredients];
    newIngredients[index] = e.target.value;
    const newItemForm = {
      ...itemForm,
      ingredients: newIngredients,
    };
    setItemForm(newItemForm);
  };

  return (
    <div className='container'>
      <Modal
        show={show}
        onHide={() => {
          onHide();
          setItemForm({
            name: '',
            description: '',
            price: 0,
            imgUrl: '',
            categoryId: 1,
            ingredients: ['']
          });
        }}
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

            <Form.Label>Ingredients</Form.Label>
            {itemForm.ingredients.map((ingredient, index) => (
              <Form.Group className="mb-3" controlId={`formIngredient${index}`} key={index}>
                <Form.Control type="text" name={`ingredient${index + 1}`} value={ingredient} onChange={(e) => changeIngredientField(e, index)} />
              </Form.Group>
            ))}

            <div className='d-flex justify-content-between'>
              <Button variant="warning" type="button" className='px-4' onClick={addIngredientField}>
                Add Ingredient
              </Button>

              <Button variant="primary" type="submit" className='px-4'>
                { selectedItem ? 'Edit' : 'Add' }
              </Button>
            </div>

          </Form>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default ItemForm
