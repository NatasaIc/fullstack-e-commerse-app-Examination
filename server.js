const fs = require('fs');
const express = require('express');
const morgan = require('morgan');

const app = express();

// MIDDLEWARES
app.use(morgan('dev'));

app.use(express.json());

app.use((req, res, next) => {
  console.log('Hello from the middleware');
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

const products = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/products.json`)
);

// ROUTE HANDLERS

const getAllProducts = (req, res) => {
  console.log(req.requestTime);
  res.status(200).json({
    status: 'success',
    requestedAt: req.requestTime,
    results: products.lenght,
    data: {
      products: products,
    },
  });
};

const getProduct = (req, res) => {
  const id = req.params.id * 1;
  const product = products.find((el) => el.id === id);

  if (!product) {
    return res.status(404).json({
      error: 'Not found',
      message: 'Invalid ID',
    });
  }

  res.status(200).json({
    status: 'success',
    data: {
      product,
    },
  });
};

// ROUTES

app.route('/api/products').get(getAllProducts);
app.route('/api/products/:id').get(getProduct);

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
