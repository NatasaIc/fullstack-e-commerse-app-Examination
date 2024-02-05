const express = require('express');
const productController = require('../controllers/productController');
const { protect, admin } = require('../middleware/authMiddleware');

// ROUTES
const router = express.Router();
router
  .route('/top')
  .get(productController.aliasTopProducts, productController.getAllProducts);

router.route('/product-stats').get(productController.getProductStats);

router
  .route('/')
  .get(productController.getAllProducts)
  .post(protect, admin, productController.createProduct);
router

  .route('/:id')
  .get(productController.getProductById)
  .patch(protect, admin, productController.updateProduct)
  .delete(protect, admin, productController.deleteProduct);

router
  .route('/:id/reviews')
  .post(protect, productController.createProductReview);

module.exports = router;
