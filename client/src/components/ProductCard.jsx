import { Card, Button } from 'react-bootstrap';
import { useState } from 'react';

export default function ProductCard({ product, onAddToCart }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Card className="h-100 shadow-sm" style={{ minHeight: '400px' }}>
      {/* Imagen con manejo de estado */}
      <div style={{ height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {!imageLoaded && (
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        )}
        <Card.Img
          variant="top"
          src={product.image}
          style={{
            display: imageLoaded ? 'block' : 'none',
            objectFit: 'contain',
            maxHeight: '200px',
            width: 'auto'
          }}
          onLoad={() => setImageLoaded(true)}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://via.placeholder.com/300x200?text=Imagen+no+disponible';
            setImageLoaded(true);
          }}
        />
      </div>
      
      <Card.Body className="d-flex flex-column">
        <Card.Title>{product.name}</Card.Title>
        <Card.Text className="text-success fw-bold">
          ${product.price.toFixed(2)}
        </Card.Text>
        <Button
          variant="primary"
          onClick={onAddToCart}
          className="mt-auto"
        >
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
}