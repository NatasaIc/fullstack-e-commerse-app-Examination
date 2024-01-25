const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

// Routes for login and logout
router.post('/login', userController.authUser);
router.post('/logout', userController.logoutUser);

// Routes for user profile
router
  .route('/profile')
  .get(userController.getUserProfile)
  .patch(userController.updateUserProfile);

// Routes for all users and individual user by ID
router
  .route('/')
  .get(userController.getAllUsers)
  .post(userController.registerUser);
router
  .route('/:id')
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
