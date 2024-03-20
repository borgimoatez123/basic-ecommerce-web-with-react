import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Product(props) {
const {produit}=props // lazm t7ha fi object 

  return (
    <>
 <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={produit.image} />
      <Card.Body>
        <Card.Title>{produit.title}</Card.Title>
        <Card.Text>
          {produit.description}
        </Card.Text>
     <Link className=" btn btn-primary" to={`/product/${produit.id}`}>dettt</Link>
      </Card.Body>
    </Card>
    </>
  );
}

export default Product;
