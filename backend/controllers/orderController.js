const APIFeatures = require('../utils/apiFeatures');
const asyncHandler = require('../middleware/asyncHandler');
const Order = require('../models/orderModel');

// @desc    Create new order
// @route   POST /api/orders
// @access  Private
exports.addItemsToOrder = asyncHandler(async (req, res, next) => {
  res.send('add order items');
});

// @desc    Get logged in users orders
// @route   GET /api/orders/myorders
// @access  Private
exports.getMyOrders = asyncHandler(async (req, res, next) => {
  res.send('get my orders');
});

// @desc    Get order by Id
// @route   GET /api/orders/:id
// @access  Private
exports.getOrderById = asyncHandler(async (req, res, next) => {
  res.send('get order by id');
});

// @desc    Update order to paid
// @route   GET /api/orders/:id/pay
// @access  Private
exports.updateOrderToPaid = asyncHandler(async (req, res, next) => {
  res.send('update order to paid');
});

// @desc    Update to delivered
// @route   GET /api/orders/:id/deliver
// @access  Private/Admin
exports.updateOrderToDelivered = asyncHandler(async (req, res, next) => {
  res.send('update order to delivered');
});

// @desc    Get all orders
// @route   GET /api/orders
// @access  Private/Admin
exports.getAllOrders = asyncHandler(async (req, res, next) => {
  res.send('Get all orders');
});
