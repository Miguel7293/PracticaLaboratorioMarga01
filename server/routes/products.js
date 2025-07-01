const express = require('express');
const router = express.Router();

const products = [
  { id: 1, name: 'Smartphone', price: 599.99, image: 'phone.jpg' },
  { id: 2, name: 'Laptop', price: 999.99, image: 'laptop.jpg' },
  { id: 3, name: 'Headphones', price: 149.99, image: 'headphones.jpg' }
];

router.get('/', (req, res) => {
  res.json(products);
});

module.exports = router;