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
      // validate: [validator.isEmail, 'Please provide a valid email'],
    },
    photo: String,
    password: {
      type: String,
      required: [true, 'Please provide a password'],
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

// This method compares the enteredPassword with the hashed password stored in the user object.
userSchema.methods.matchPassword = async function (enteredPassword) {
  // Return the result of the comparison (true if passwords match, false otherwise).
  try {
    return await bcrypt.compare(enteredPassword, this.password);
  } catch (error) {
    throw error; // or handle the error as needed
  }
};

// Define a pre-save middleware for the userSchema.
userSchema.pre('save', async function (next) {
  if (!this.isModified('password' || !this.password)) {
    // If not modified, proceed to the next middleware or save operation.
    next();
  }
  try {
    // If the password has been modified, generate a salt using bcrypt with a cost factor of 10.
    const salt = await bcrypt.genSalt(10);
    // Hash the password using the generated salt and update the user object's password field.
    this.password = await bcrypt.hash(this.password, salt);
    next(); // Pass the error to the next middleware
  } catch (error) {
    next(error);
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
