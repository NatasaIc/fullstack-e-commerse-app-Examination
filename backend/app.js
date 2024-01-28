const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');

const productRouter = require('./routes/productRoutes');
const userRouter = require('./routes/userRoutes');
const orderRoutes = require('./routes/orderRoutes');

const app = express();

// MIDDLEWARES
console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// body parser middleware
app.use(express.json());

// Cookie parser middleware
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

// app.use(express.static(`${__dirname}/frontend/public`));

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.use('/api/products', productRouter);
app.use('/api/users', userRouter);
app.use('/api/orders', orderRoutes);

app.use(notFound);
app.use(errorHandler);
module.exports = app;
