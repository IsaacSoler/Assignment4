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
    image: 'https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/dell-plus/db16255/media-gallery/non-touch/laptop-dell-plus-db16255nt-ice-bl-fpr-gallery-5.psd?fmt=png-alpha&pscan=auto&scl=1&hei=804&wid=979&qlt=100,1&resMode=sharp2&size=979,804&chrss=full'
  },
  {
    id: 2,
    name: 'Headphones',
    price: 129,
    description: 'Noise-cancelling headphones',
    image: 'https://i5.walmartimages.com/seo/VILINICE-Noise-Cancelling-Headphones-Wireless-Bluetooth-Over-Ear-Headphones-with-Microphone-Black-Q8_b994b99c-835f-42fc-8094-9f6be0f9273b.be59955399cdbd1c25011d4a4251ba9b.jpeg'
  },
  {
    id: 3,
    name: 'Smartphone',
    price: 499,
    description: 'Latest model smartphone',
    image: 'https://pisces.bbystatic.com/image2/BestBuy_US/dam/REF-3700314-cell-google-bento-sv_DER-60429297-6587-4a73-96d2-63456a39c6c9.jpg;format=webp'
  },
  {
    id: 4,
    name: 'Smartwatch',
    price: 299,
    description: 'Feature-rich smartwatch',
    image: 'https://i5.walmartimages.com/seo/Clearance-1-7-Smart-Watch-Men-Women-Bluetooth-Call-Make-Calls-Text-Reply-AI-Control-Fitness-Tracker-Compatible-iOS-Android-IP67-Waterproof-3-Days-Use_968b4597-f28f-4227-8553-c1763422632c.bc4b5da0c7cc5f813d85c340eba3138c.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF'
  }
];

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.post('/api/select-product', (req, res) => {
  console.log('Selected product from frontend:', req.body);
  selectedProduct = req.body;
  res.json({ message: 'Product selected' });
});

app.get('/api/selected-product', (req, res) => {
  console.log('Returning selected product:', selectedProduct);
  res.json(selectedProduct);
});

app.post('/api/submit-order', (req, res) => {
  console.log('Order received:', req.body);
  res.json({ message: 'Your item will be delivered soon.' });
});

app.listen(3000, () => {
  console.log('Backend running on http://localhost:3000');
});