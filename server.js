const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({ path: './config.env' });

const DB = process.env.MONGO_URI;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connection successful'));

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A product must have a name'],
    unique: true,
  },
  image: {
    type: String,
  },
  price: {
    type: Number,
    required: [true, 'A product must have a price'],
  },
});

const Product = mongoose.model('Product', productSchema);

const testProduct = new Product({
  name: 'Test Product',
  image: '/images/test-product.jpg',
  price: 100,
  rating: 4.5,
});

testProduct
  .save()
  .then((doc) => {
    console.log(doc);
  })
  .catch((err) => {
    console.log('error:', err);
  });

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
