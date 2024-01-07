const express = require('express');
const fs = require('fs');
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

const createProduct = (req, res) => {
  //console.log(req.body);

  const newId = products[products.lenght - 1].id + 1;
  const newProduct = Object.assign({ id: newId }, req.body);

  products.push(newProduct);

  fs.writeFile(
    `${__dirname}/dev-data/products-simple.json`,
    JSON.stringify(products),
    (err) => {
      res.status(201).json({
        status: 'success',
        data: {
          product: newProduct,
        },
      });
    }
  );
};

// ROUTES
app.route('/api/products').get(getAllProducts).post(createProduct);
app.route('/api/products/:id').get(getProduct);

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
