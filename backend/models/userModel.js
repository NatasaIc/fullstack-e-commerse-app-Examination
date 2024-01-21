const mongoose = require('mongoose');
const validator = require('validator');

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
    passwordConfirm: {
      type: String,
      required: [true, 'Please confirm your password'],
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timeseries: true,
  },
);

const User = mongoose.model('User', userSchema);
module.exports = User;
