const products = [
  {
    _id: 1,
    name: 'All in One Miracle Serum',
    image: './assets/images/All_in_one_miracle_serum.jpg',
    short_description:
      'Experience the magic of our All in One Miracle Serum for radiant and youthful skin.',
    long_description:
      'Unlock the secret to radiant and youthful skin with our All in One Miracle Serum. Formulated with a powerful blend of organic ingredients, this serum addresses multiple skincare concerns, leaving your skin hydrated, revitalized, and visibly glowing. Elevate your skincare routine with this all-encompassing miracle serum.',
    price: 49.99,
    category: 'Skincare',
    brand: 'GUAIA',
    countInStock: 14,
    rating: 4.9,
    numReviews: 10,
  },
  {
    _id: 2,
    name: 'Rosehip Oil',
    image: 'rosehip_oil.jpg',
    short_description:
      'Nourish and rejuvenate your skin with our pure and organic Rosehip Oil.',
    long_description:
      'Indulge in the natural goodness of our Rosehip Oil. Packed with antioxidants and essential fatty acids, this organic oil deeply nourishes and rejuvenates your skin. Experience the benefits of rosehip oil for a radiant and healthy complexion.',
    price: 24.99,
    category: 'Skincare',
    brand: 'GUAIA',
    countInStock: 10,
    rating: 4.5,
    numReviews: 8,
  },
  {
    _id: 3,
    name: 'Organic Glow Foundation',
    image: 'foundation_3.jpg',
    short_description: 'A natural mineral foundation for a flawless look.',
    long_description:
      'Achieve a radiant complexion with our Organic Mineral Foundation. Made with pure, organic minerals, this foundation provides buildable coverage while nourishing your skin.',
    price: 29.99,
    category: 'Makeup',
    brand: 'AISLING',
    countInStock: 10,
    rating: 4.5,
    numReviews: 12,
  },
  {
    _id: 4,
    name: 'All-Natural Lip Balm',
    image: 'lip_balm.jpg',
    short_description: 'Hydrating lip balm with organic ingredients.',
    long_description:
      'Keep your lips moisturized and supple with our All-Natural Lip Balm. Enriched with organic oils and butters, this lip balm provides long-lasting hydration and a hint of natural color.',
    price: 8.99,
    category: 'Makeup',
    brand: 'NCLA',
    countInStock: 17,
    rating: 4.0,
    numReviews: 13,
  },
  {
    _id: 5,
    name: 'Natural Fiber Blush Brush',
    image: 'blush_brush.jpg',
    short_description:
      'Achieve a rosy glow with our natural fiber blush brush.',
    long_description:
      'Add a touch of color to your cheeks with our Natural Fiber Blush Brush. The bristles, made from organic fibers, are gentle on the skin and perfect for applying blush with precision.',
    price: 12.99,
    category: 'Brushes',
    brand: 'NCLA',
    countInStock: 7,
    rating: 3.5,
    numReviews: 8,
  },
  {
    _id: 6,
    name: 'Eco-Friendly Bamboo Eyebrow Brush',
    image: 'bamboo_eyebrow_brush.jpg',
    short_description: 'Shape and define your eyebrows with our bamboo brush.',
    long_description:
      'Achieve perfectly groomed eyebrows with our Eco-Friendly Bamboo Eyebrow Brush. The sustainable bamboo handle and synthetic bristles make it an eco-conscious choice for your beauty routine.',
    price: 9.99,
    category: 'Brushes',
    brand: 'NCLA',
    countInStock: 10,
    rating: 4.8,
    numReviews: 12,
  },
  {
    _id: 7,
    name: 'Bamboo Dry Body Brush',
    image: 'bamboo_body_brush.jpg',
    short_description:
      'Elevate your skincare routine with our luxurious bamboo dry body brush..',
    long_description:
      'Indulge in the ultimate self-care experience with our Bamboo Dry Body Brush. Crafted with a handle made from sustainable wood and bristles made from natural fibers, this brush exfoliates, invigorates, and promotes healthy-looking skin. Elevate your skincare routine to a new level of luxury.',
    price: 9.99,
    category: 'Brushes',
    brand: 'GOOP',
    countInStock: 12,
    rating: 4.9,
    numReviews: 15,
  },
  {
    _id: 8,
    name: 'Fur Mitt Trio',
    image: 'fur_mitt_trio.jpg',
    short_description:
      'A set of luxurious fur mitts for a spa-like experience at home.',
    long_description:
      'Pamper yourself with our Fur Mitt Trio, a set of three plush mitts designed for a spa-like experience. Crafted with care and featuring organic materials, these mitts are perfect for exfoliation and massage.',
    price: 39.99,
    category: 'Massage Tools',
    brand: 'fur',
    countInStock: 10,
    rating: 4.5,
    numReviews: 12,
  },
  {
    _id: 9,
    name: 'Cotton Face Pads',
    image: 'cotton_face_pads.jpg',
    short_description:
      'Gentle and reusable cotton face pads for your skincare routine.',
    long_description:
      'Take a step towards sustainable skincare with our Cotton Face Pads. These reusable pads, made from soft organic cotton, are perfect for removing makeup and applying toner. A eco-friendly addition to your daily routine.',
    price: 14.99,
    category: 'Makeup',
    brand: 'Pardos',
    countInStock: 10,
    rating: 4.5,
    numReviews: 16,
  },
  {
    _id: 10,
    name: 'Summer Solstice Lipstick',
    image: 'summer_solstice_lipstick.jpg',
    short_description:
      'Vibrant and natural lipstick inspired by the colors of summer.',
    long_description:
      'Capture the essence of summer with our Summer Solstice Lipstick. Infused with organic ingredients, this lipstick provides a burst of color while keeping your lips hydrated and nourished.',
    price: 19.99,
    category: 'Makeup',
    brand: 'Meloway',
    countInStock: 14,
    rating: 4.2,
    numReviews: 10,
  },
  {
    _id: 11,
    name: 'Sugar Body Polish Scrub',
    image: 'sugar_body_polish_scrub.jpg',
    short_description:
      'Revitalize your skin with our sweet and organic sugar body scrub.',
    long_description:
      'Treat your skin to a spa-like experience with our Sugar Body Polish Scrub. Made with organic sugar and nourishing oils, this scrub gently exfoliates, leaving your skin smooth, radiant, and irresistibly soft.',
    price: 29.99,
    category: 'Body Care',
    brand: 'república',
    countInStock: 10,
    rating: 4.2,
    numReviews: 8,
  },
  {
    _id: 12,
    name: 'Marble Dry Body Brush',
    image: 'marble_dry_body_brush.jpg',
    short_description:
      'Elevate your skincare routine with our luxurious marble dry body brush.',
    long_description:
      'Indulge in the ultimate self-care experience with our Marble Dry Body Brush. Crafted with a handle made from sustainable wood and bristles made from natural fibers, this brush exfoliates, invigorates, and promotes healthy-looking skin. Elevate your skincare routine to a new level of luxury.',
    price: 34.99,
    category: 'Body Care',
    brand: 'GOOP',
    countInStock: 12,
    rating: 4.8,
    numReviews: 11,
  },
];

export default products;
