const User = require('./../models/userModel');

// Exporting the signup function as part of the module
exports.signup = async (req, res, next) => {
  // 1. Creating a new user with the data from the request body using the User model
  const newUser = await User.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      user: newUser,
    },
  });
};
