const User = require('../models/userModel');
const asyncHandler = require('../middleware/asyncHandler');

// @desc    Auth user & get token
// @route   GET /api/users/login
// @access  Public
exports.authUser = asyncHandler(async (req, res, next) => {
  res.send('auth user');
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
