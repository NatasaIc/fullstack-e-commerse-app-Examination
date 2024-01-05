const fs = require('fs');
const express = require('express');

const app = express();

app.use(express.json());

const products = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/products.json`)
);

// ROUTE HANDLERS

const getAllProducts = (req, res) => {
  console.log();
  res.status(200).json({
    status: 'success',
    results: products.lenght,
    data: {
      products: products,
    },
  });
};

// ROUTES

app.route('/api/products').get(getAllProducts);

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
