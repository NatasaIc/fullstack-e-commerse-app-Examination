# Full-Featured E-Commerce Web Application

<img src='./frontend//src//assets//E (3).png' alt="Logo"/>

As part of my assessment for the Web Development in E-commerce program at Medieinstitutet in Stockholm, I've undertaken a comprehensive project. It is a full- featured shopping cart with PayPal & credit/debit payments. As the zenith of my full-stack development journey, this project serves as my final exam in e-commerce, built with the MERN stack incorporating Redux Toolkit alongside MongoDB Atlas for seamless management of product listings, orders, and user authentication.

<!-- toc -->

- [Features](#features)
- [Dependencies](#dependencies)
- [Usage](#usage)
  - [Installation](#installation)
  - [Running](#running)
- [Build & Deploy](#build--deploy)
- [Seed Data](#seeding-data)
- [Sample User Logins](#sample-user-logins)
- [Troubleshooting](#troubleshooting)

<!-- tocstop -->

## Features

- Full featured shopping cart
- Product reviews and ratings
- Top products carousel
- Product pagination
- Product search feature
- User profile with orders
- Admin product management
- Admin user management
- Admin Order details page
- Mark orders as delivered option
- Checkout process (shipping, payment method, etc)
- PayPal / credit card integration
- Database seeder (products & users)

<details>
<summary><b>Backend Dependencies:</b></summary>

- bcryptjs: ^2.4.3
- cookie-parser: ^1.4.6
- dotenv: ^16.3.1
- express: ^4.18.2
- json: ^11.0.0
- jsonwebtoken: ^9.0.2
- mongoose: ^8.0.3
- morgan: ^1.10.0
- nodemon: ^3.0.2
- validator: ^13.11.0

</details>

### Frontend:

- @paypal/react-paypal-js: ^8.1.3
- @reduxjs/toolkit: ^2.0.1
- bootstrap: ^5.3.2
- react-bootstrap: ^2.10.0
- react-dom: ^18.2.0
- react-icons: ^5.0.1
- react-redux: ^9.1.0
- react-router-bootstrap: ^0.26.2
- react-router-dom: ^6.21.2
- react-scripts: 5.0.1
- react-toastify: ^10.0.4

---

#### Usage

1. Clone the repository:

```
https://github.com/NatasaIc/fullstack-e-commerse-app-Examination.git

2. Place the provided config.env file in the root of the project.

3. Alternatively, use the .env.example file to configure your own database and seed the data in the data folder in the backend.

```

#### Installation

```

npm install
cd frontend
npm install

```

#### Running

---

Run both frontend and backend:

```
npm run dev
```

Run backend only:

```
npm run server
```

#### Build & Deploy

---

To build the frontend for deployment:

```
cd frontend
npm run build
```

#### Seed Data

You can use the following commands to seed the database with some sample users and products as well as destroy all data:

```
#### Import data:

node backend/data/import-dev-data.js --import

#### Delete data:

node backend/data/import-dev-data.js --delete
```

Sample user login

```
email: admin@example.com
password: 123456

email: loulou@example.com
password: 123456

email: leo@example.com
password: 123456
```

##### Troubleshooting

If you encounter any issues during installation or setup, pleas check the following troubleshooting steps:

- Ensure all dependencies are installed correctly.
- Verify that your environment variables are configured properly.
- Check the project's GitHub issues for known problems or solutions.
