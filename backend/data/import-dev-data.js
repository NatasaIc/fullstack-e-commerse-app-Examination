const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const products = require('./products');
const Product = require('../models/productModel');
const users = require('./users');
const User = require('../models/userModel');
const Order = require('../models/orderModel');

dotenv.config({ path: './config.env' });

const DB = process.env.MONGO_URI;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connection successful'));

// IMPORT DATA INTO DATABASE
const importData = async () => {
  try {
    // Deleting existing data in collections
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    // Inserting users into the database and retrieving the created users
    const createdUsers = await User.insertMany(users);

    // Extracting the id of the first user (assumed to be an admin user)
    const adminUser = createdUsers[0]._id;

    // Mapping over product data to add admin user to each product
    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser };
    });

    // Inserting products into the database
    await Product.insertMany(sampleProducts);

    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

const deleteData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    console.log('Data Destroyed!');
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
}

console.log(process.argv);
