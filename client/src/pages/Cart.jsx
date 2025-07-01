import { Table, Button, Badge } from 'react-bootstrap';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export default function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div>
      <h2 className="mb-4">
        Your Cart <Badge bg="secondary">{cart.length}</Badge>
      </h2>
      
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cart.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>${item.price.toFixed(2)}</td>
              <td>{item.quantity}</td>
              <td>${(item.price * item.quantity).toFixed(2)}</td>
              <td>
                <Button 
                  variant="danger" 
                  size="sm"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <h4 className="text-end mt-3">
        Total: <span className="text-primary">${total.toFixed(2)}</span>
      </h4>
    </div>
  );
}