import { Row, Col } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const products = [
  { 
    id: 1, 
    name: 'Smartphone', 
    price: 599.99, 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsHJcN6aLxmnOCnFC2stECzN_sYImbw0p2CA&s' 
  },
  { 
    id: 2, 
    name: 'Laptop', 
    price: 1300, 
    image: 'https://promart.vteximg.com.br/arquivos/ids/8489206-1000-1000/image-ad14032e1b39454eb975e573d77b6a04.jpg?v=638695474754170000' 
  },
    { 
    id: 3, 
    name: 'HeaPhones', 
    price: 67, 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg7XWy1cmt1D3uUjF29eo2q4HgqJaGEu9XDg&s' 
  },  { 
    id: 4, 
    name: 'cableUTP', 
    price: 45, 
    image: 'https://www.kroton.com.pe/wp-content/uploads/2016/12/9040-LSZH.jpg' 
  },
];
export default function Catalog() {
  const { addToCart } = useContext(CartContext);

  return (
    <Row xs={1} md={3} className="g-4">
      {products.map(product => (
        <Col key={product.id}>
          <ProductCard 
            product={product} 
            onAddToCart={() => addToCart(product)} 
          />
        </Col>
      ))}
    </Row>
  );
}