const express = require('express');
const orderController = require('../controllers/orderController');
const { protect, admin } = require('../middleware/authMiddleware');
const router = express.Router();

router
  .route('/')
  .post(protect, orderController.addItemsToOrder)
  .get(protect, admin, orderController.getAllOrders);

router.route('/myorder').get(protect, orderController.getMyOrders);
router.route('/:id').get(protect, orderController.getOrderById);
router.route('/:id/pay').patch(protect, orderController.updateOrderToPaid);
router
  .route('/:id/deliver')
  .patch(protect, admin, orderController.updateOrderToDelivered);

module.exports = router;
