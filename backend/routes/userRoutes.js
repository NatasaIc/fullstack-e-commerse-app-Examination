const express = require('express');
const userController = require('../controllers/userController');
const { protect, admin } = require('../middleware/authMiddleware');
const router = express.Router();

// Routes for login and logout
router.post('/login', userController.authUser);
router.post('/logout', userController.logoutUser);

// Routes for user profile
router
  .route('/profile')
  .get(protect, userController.getUserProfile)
  .patch(protect, userController.updateUserProfile);

// Routes for all users and individual user by ID
router
  .route('/')
  .get(protect, admin, userController.getAllUsers)
  .post(userController.registerUser);
router
  .route('/:id')
  .get(protect, admin, userController.getUser)
  .patch(protect, admin, userController.updateUser)
  .delete(protect, admin, userController.deleteUser);

module.exports = router;
