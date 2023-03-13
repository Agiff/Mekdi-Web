import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ItemCard({ item }) {
  const pesanButton = () => {
    console.log('duar');
  }
  
  const getPrice = (price) => new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(price);

  return (
    <Card className='m-3' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.imgUrl} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <div className='d-flex justify-content-evenly align-items-center'>
          <label>{getPrice(item.price)}</label>
          <Button variant="primary" className='btn btn-warning' onClick={pesanButton}>Pesan</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ItemCard;