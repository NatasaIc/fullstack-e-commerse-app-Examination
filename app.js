const express = require('express');
const morgan = require('morgan');

const productRouter = require('./routes/productRoutes');
// const userRouter = require('./routes/userRoutes');

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

app.use('/api/products', productRouter);
// app.use('/api/users', userRouter);

module.exports = app;
