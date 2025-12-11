const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

let selectedProduct = null;

const products = [
  {
    id: 1,
    name: 'Laptop',
    price: 899,
    description: 'Powerful laptop',
    image: 'https://via.placeholder.com/200'
  },
  {
    id: 2,
    name: 'Headphones',
    price: 129,
    description: 'Noise-cancelling headphones',
    image: 'https://via.placeholder.com/200'
  },
  {
    id: 3,
    name: 'Keyboard',
    price: 49,
    description: 'Mechanical keyboard',
    image: 'https://via.placeholder.com/200'
  },
  {
    id: 4,
    name: 'Mouse',
    price: 29,
    description: 'Wireless mouse',
    image: 'https://via.placeholder.com/200'
  }
];

// 1. GET /api/products
app.get('/api/products', (req, res) => {
  res.json(products);
});

// 2. POST /api/select-product
app.post('/api/select-product', (req, res) => {
  selectedProduct = req.body;
  res.json({ message: 'Product stored' });
});

// 3. GET /api/selected-product
app.get('/api/selected-product', (req, res) => {
  res.json(selectedProduct);
});

// 4. POST /api/submit-order
app.post('/api/submit-order', (req, res) => {
  // you could log req.body here if you want to see the order
  res.json({ message: 'Your item will be delivered soon.' });
});

app.listen(3000, () => {
  console.log('Backend running on http://localhost:3000');
});
