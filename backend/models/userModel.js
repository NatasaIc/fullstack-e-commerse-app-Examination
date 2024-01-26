const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: [true, 'Please provide your email'],
      unique: true,
      lowercase: true,
      validate: [validator.isEmail, 'Please provide a valid email'],
    },
    photo: String,
    password: {
      type: String,
      required: [true, 'Please provide a password'],
      minLength: [8, 'Password should be at least 8 characters'],
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
    productId: {
      type: mongoose.Schema.ObjectId,
      ref: 'Product',
    },
  },
  {
    timeseries: true,
  },
);

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model('User', userSchema);
module.exports = User;
