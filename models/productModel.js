const mongoose = require('mongoose');
const slugify = require('slugify');

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
    slug: String,
    image: {
      type: String,
      required: true,
    },
    short_description: {
      type: String,
      maxlength: [100, 'A product name must have less or equal 100 characters'],
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
    priceDiscount: {
      type: Number,
      validate: {
        validator: function (val) {
          // this only points to current doc on NEW documnet creation
          return val < this.price;
        },
        message: 'Dicount price ({VALUE}) should be below regular price',
      },
    },
    countInStock: {
      type: Number,
      required: true,
      default: 0,
    },
    // reviews: [reviewSchema],
    rating: {
      type: Number,
      default: 4.5,
      min: [1, 'Rating must be abouve 1.0'],
      max: [5, 'Rating nust be below 5.0'],
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

// DOCUMENT MIDDLEWARE: runs before.save() and .create()
productSchema.pre('save', function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
