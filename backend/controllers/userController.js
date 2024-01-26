const User = require('../models/userModel');
const asyncHandler = require('../middleware/asyncHandler');
const jwt = require('jsonwebtoken');

// @desc    Auth user & get token
// @route   GET /api/users/login
// @access  Public
exports.authUser = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: '30d',
    });

    // Set JWT as HTTP-Only cookie
    res.cookie('jwt', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== 'development',
      sameSite: 'strict',
      maxAge: 30 * 24 * 60 * 1000, // 30 Days
    });

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(401);
    throw new Error('Invalid Email or Password');
  }
});

// @desc    Register user
// @route   POST /api/users
// @access  Public
exports.registerUser = asyncHandler(async (req, res, next) => {
  res.send('register user');
});

// @desc    Logout user / clear cookie user
// @route   POST /api/users/logout
// @access  Privet
exports.logoutUser = asyncHandler(async (req, res, next) => {
  res.send('logout user');
});

// @desc    Get user profile
// @route   Get /api/users/profile
// @access  Public
exports.getUserProfile = asyncHandler(async (req, res, next) => {
  res.send('get user profile');
});

// @desc    Update user profile
// @route   PATCH /api/users/profile
// @access  Privet
exports.updateUserProfile = asyncHandler(async (req, res, next) => {
  res.send('Update user profile');
});

// @desc    Get Users
// @route   GET /api/users
// @access  Privet/Admin
exports.getAllUsers = asyncHandler(async (req, res, next) => {
  res.send('get all users');
});

// @desc    Get User by ID
// @route   GET /api/users/:id
// @access  Privet/Admin
exports.getUser = asyncHandler(async (req, res, next) => {
  res.send('get user by ID');
});

// @desc    Update User
// @route   PATCH /api/users/:id
// @access  Privet/Admin
exports.updateUser = asyncHandler(async (req, res, next) => {
  res.send('update user');
});

// @desc    Delete User
// @route   DELETE /api/users/:id
// @access  Privet/Admin
exports.deleteUser = asyncHandler(async (req, res, next) => {
  res.send('delete user');
});
