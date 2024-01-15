const mongoose = require('mongoose');

// const reviewSchema = mongoose.Schema(
//   {
//     user: {
//       type: mongoose.Schema.Types.ObjectId,
//       required: true,
//       ref: 'User',
//     },
//     name: {
//       type: String,
//       required: true,
//     },
//     rating: {
//       type: Number,
//       required: true,
//     },
//     comment: {
//       type: String,
//       required: true,
//       trim: true,
//     },
//   },
//   {
//     timestamps: true,
//   },
// );

const productSchema = new mongoose.Schema(
  {
    // user: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   required: true,
    //   ref: 'User',
    // },
    name: {
      type: String,
      required: [true, 'A product must have a name'],
      unique: true,
    },
    image: {
      type: String,
      required: true,
    },
    short_description: {
      type: String,
      maxlength: 100,
      required: true,
    },
    long_description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: [true, 'A product must have a price'],
    },
    category: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    priceDiscount: Number,
    countInStock: {
      type: Number,
      required: true,
      default: 0,
    },
    // reviews: [reviewSchema],
    rating: {
      type: Number,
      required: true,
      default: 0,
    },
    numReviews: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  },
);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
