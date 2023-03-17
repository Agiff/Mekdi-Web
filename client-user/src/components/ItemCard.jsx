import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import { getPrice } from '../helpers';

function ItemCard({ item }) {
  const navigate = useNavigate();
  const pesanButton = () => {
    console.log('duar');
  }
  
  return (
    <Card className='m-3' style={{ width: '18rem' }}>
      <Card.Img style={{cursor: 'pointer'}} variant="top" src={item.imgUrl} onClick={() => navigate(`/detail/${item.id}`)}/>
      <Card.Body>
        <Card.Title className='text-truncate'>{item.name}</Card.Title>
        <div className='d-flex justify-content-between align-items-center mt-4'>
          <label className='text-success'>{getPrice(item.price)}</label>
          <Button variant="primary" className='btn btn-warning px-5 text-danger border-danger' onClick={pesanButton}>PESAN</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ItemCard;