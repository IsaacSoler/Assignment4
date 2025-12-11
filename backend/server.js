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
    image: '/assets/laptop.jpg'
  },
  {
    id: 2,
    name: 'Headphones',
    price: 129,
    description: 'Noise-cancelling headphones',
    image: '/assets/headphones.jpg'
  },
  {
    id: 3,
    name: 'Smartphone',
    price: 499,
    description: 'Latest model smartphone',
    image: '/assets/smartphone.jpg'
  },
  {
    id: 4,
    name: 'Smartwatch',
    price: 299,
    description: 'Feature-rich smartwatch',
    image: '/assets/smartwatch.jpg'
  }
];

app.get('/api/products', (req, res) => {
  res.json(products);
});


app.post('/api/select-product', (req, res) => {
  selectedProduct = req.body;
  res.json({ message: 'Product stored' });
});


app.get('/api/selected-product', (req, res) => {
  res.json(selectedProduct);
});


app.post('/api/submit-order', (req, res) => {

  res.json({ message: 'Your item will be delivered soon.' });
});

app.listen(3000, () => {
  console.log('Backend running on http://localhost:3000');
});
