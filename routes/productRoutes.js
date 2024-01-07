const express = require('express');
const fs = require('fs');

const products = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/products.json`)
);

// ROUTE HANDLERS
const getAllProducts = (req, res) => {
  console.log(req.requestTime);
  res.status(200).json({
    status: 'success',
    requestedAt: req.requestTime,
    results: products.length,
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
      status: 'fail',
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

  const newId = products[products.length - 1].id + 1;
  const newProduct = Object.assign({ id: newId }, req.body);

  products.push(newProduct);

  fs.writeFile(
    `${__dirname}/../dev-data/products-simple.json`,
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

const updateProduct = (req, res) => {
  if (req.params.id * 1 > products.length) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID',
    });
  }

  res.status(200).json({
    status: 'sucess',
    data: {
      product: '<Updated product here...',
    },
  });
};

const deleteProduct = (req, res) => {
  if (req.params.id * 1 > products.length) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID',
    });
  }
  res.status(204).json({
    status: 'sucess',
    data: null,
  });
};

// ROUTES
const router = express.Router();

router.route('/').get(getAllProducts).post(createProduct);
router.route('/:id').get(getProduct).patch(updateProduct).delete(deleteProduct);

module.exports = router;
