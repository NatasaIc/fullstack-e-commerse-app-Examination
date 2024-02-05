const Product = require('../models/productModel');
const APIFeatures = require('../utils/apiFeatures');
const asyncHandler = require('../middleware/asyncHandler');

// @desc    Get top products
// @route   GET /api/products
// @access  Public
exports.aliasTopProducts = (req, res, next) => {
  req.query.limit = '5';
  req.query.sort = '-rating,price';
  req.query.fields = 'name,price,image';
  next();
};

// ROUTE HANDLERS

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
exports.getAllProducts = asyncHandler(async (req, res) => {
  let filter = {};
  if (req.params.tourId) filter = { tour: req.params.tourId };
  // EXECUTE QUERY
  const features = new APIFeatures(Product.find(filter), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();
  const products = await features.query;

  // SEND RESPONSE
  res.status(200).json({
    status: 'success',
    results: products.length,
    data: {
      products,
    },
  });
});

// @desc    Fetch a product
// @route   GET /api/products/:id
// @access  Private/admin
exports.getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  res.status(200).json({
    status: 'success',
    data: {
      product,
    },
  });
});

// @desc    Create a product
// @route   POST /api/products
// @access  Private/admin
exports.createProduct = asyncHandler(async (req, res) => {
  const product = new Product({
    name: 'Sample name',
    price: 0,
    user: req.user._id,
    image: '/images/sample.jpg',
    brand: 'Sample brand',
    category: 'Sample category',
    countInStock: 0,
    numReviews: 0,
    description: 'Sample description',
  });

  const createdProduct = await product.save();
  res.status(201).json(createdProduct);
});

// @desc    Update a product
// @route   PATCH /api/products/:id
// @access  Private/admin
exports.updateProduct = asyncHandler(async (req, res) => {
  console.log('Authenticated User:', req.user);
  const { name, price, description, image, brand, category, countInStock } =
    req.body;

  const product = await Product.findById(req.params.id);

  if (product) {
    product.name = name;
    product.price = price;
    product.description = description;
    product.image = image;
    product.brand = brand;
    product.category = category;
    product.countInStock = countInStock;

    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
});

// @desc    Delete a product
// @route   Delete /api/products/:id
// @access  Private/admin
exports.deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findByIdAndDelete(req.params.id);

  if (product) {
    await Product.deleteOne({ _id: product._id });
    res.status(200).json({ message: 'Product deleted' });
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
});

// @desc    Get product stats
// @route   GET /api/products/product-stats
// @access  Public
exports.getProductStats = asyncHandler(async (req, res) => {
  const stats = await Product.aggregate([
    {
      $match: { rating: { $gte: 4.2 } },
    },
    {
      $group: {
        _id: { $toUpper: '$category' },
        numProducts: { $sum: 1 },
        avgRating: { $avg: '$rating' },
        avgPrice: { $avg: '$price' },
        minPrice: { $min: '$price' },
        maxPrice: { $max: '$price' },
      },
    },
    {
      $sort: { avgPrice: 1 },
    },
  ]);

  res.status(200).json({
    status: 'success',
    data: {
      stats,
    },
  });
});
