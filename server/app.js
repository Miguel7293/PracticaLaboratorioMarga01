const express = require('express');
const cors = require('cors');
const productsRouter = require('./routes/products');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/products', productsRouter);

// Servir imágenes estáticas
app.use('/images', express.static('public/images'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});