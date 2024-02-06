const bcrypt = require('bcryptjs');

const users = [
  {
    name: 'Natasa Iconomou',
    email: 'admin@example.com',
    photo: 'user1.jpg',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Lourdes Browning',
    email: 'loulou@example.com',
    photo: 'user2.jpg',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: false,
  },
  {
    name: 'Sophie Louise Hart',
    email: 'sophie@example.com',
    photo: 'user3.jpg',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: false,
  },
  {
    name: 'Ayla Cornell',
    email: 'ayls@example.com',
    photo: 'user4.jpg',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: false,
  },
  {
    name: 'Leo Gillespie',
    email: 'leo@example.com',
    photo: 'user5.jpg',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: false,
  },
  {
    name: 'Jennifer Hardy',
    email: 'jennifer@example.com',
    photo: 'user6.jpg',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: false,
  },
];

module.exports = users;
