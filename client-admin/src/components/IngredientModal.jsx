import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const IngredientModal = ({ show, onHide, selectedItem }) => {

  useEffect(() => {
    console.log(selectedItem);
  }, [selectedItem])
  
  return (
    <div>
      <Modal
        show={show}
        onHide={onHide}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          {selectedItem?.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='d-flex'>
            <h5 className='me-3'>Ingredients: </h5>
            <div className='d-flex flex-column mt-1'>
              {
                selectedItem?.Ingredients?.map((ingredient, index) => {
                  return <h6>{index+1}. {ingredient.name}</h6>
                })
              }
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default IngredientModal
