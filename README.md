This project is a part of my examination for the degree in webdevelopment in e-commerce at medieinstitutet in Stockholm. It is a full- featured shopping cart with PayPal & credit/debit payments.

# Fetures

Full featured shopping cart
Product reviews and ratings
Top products carousel
Product pagination
Product search feature
User profile with orders
Admin product management
Admin user management
Admin Order details page
Mark orders as delivered option
Checkout process (shipping, payment method, etc)
PayPal / credit card integration
Database seeder (products & users)

# Usage

Create a MongoDB database and obtain your MongoDB URI - MongoDB Atlas
Create a PayPal account and obtain your Client ID - PayPal Developer

# ENV Variables

NODE_ENV=production
PORT = 8000
MONGO_URI = your mongodb uri
JWT_SECRET = 'abc123'
PAYPAL_CLIENT_ID = your paypal client id

# Install

npm install
cd frontend
npm install

# Run

Run frontend and backend
npm run dev

Backend only
npm run server

# Build & Deploy

cd frontend
npm run build

# Seeding Data

Import data:
node backend/data/import-dev-data.js --import

Delete data:
node backend/data/import-dev-data.js --delete
