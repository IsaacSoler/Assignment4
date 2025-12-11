const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

let selectedProduct = null;

const products = [
  {
    id: 1,
    name: "Laptop",
    price: 899,
    description: "Powerful laptop",
    image: "https://via.placeholder.com/200"
  },
  {
    id: 2,
    name: "Headphones",
    price: 129,
    description: "Noise-cancelling",
    image: "https://via.placeholder.com/200"
  },
  {
    id: 3,
    name: "Keyboard",
    price: 49,
    description: "Mechanical keyboard",
    image: "https://via.placeholder.com/200"
  },
  {
    id: 4,
    name: "Mouse",
    price: 29,
    description: "Wireless mouse",
    image: "https://via.placeholder.com/200"
  }
];

// GET products
app.get('/api/products', (req, res) => {
  res.json(products);
});

// POST selected product
app.post('/api/select-product', (req, res) => {
  selectedProduct = req.body;
  res.json({ message: "Product stored" });
});

// GET selected product
app.get('/api/selected-product', (req, res) => {
  res.json(selectedProduct);
});

// POST order
app.post('/api/submit-order', (req, res) => {
  res.json({ message: "Your item will be delivered soon." });
});

app.listen(3000, () => console.log("Backend running on port 3000"));
