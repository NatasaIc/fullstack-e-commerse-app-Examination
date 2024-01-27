const asyncHandler = require('../middleware/asyncHandler');
const User = require('../models/userModel');
const generateToken = require('../utils/generateToken');

// @desc    Auth user & get token
// @route   GET /api/users/login
// @access  Public
exports.authUser = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  let user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    // Generate the token and set it in the response cookie.
    generateToken(res, user._id);

    res.status(200).json({
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
  const { name, email, password } = req.body;
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error('Email already exists');
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    generateToken(res, user._id);
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
});

// @desc    Logout user / clear cookie user
// @route   POST /api/users/logout
// @access  Privet
exports.logoutUser = asyncHandler(async (req, res, next) => {
  res.cookie('jwt', '', {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ meassage: 'Logged out successfully' });
});

// @desc    Get user profile
// @route   Get /api/users/profile
// @access  Public
exports.getUserProfile = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user._id);

  if (user) {
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error('No user found');
  }
});

// @desc    Update user profile
// @route   PATCH /api/users/profile
// @access  Privet
exports.updateUserProfile = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();

    res.status(200).json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error('User not found!');
  }
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
