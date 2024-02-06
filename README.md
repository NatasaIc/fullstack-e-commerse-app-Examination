This project is a part of my examination for the degree in webdevelopment in e-commerce at medieinstitutet in Stockholm. It is a full- featured shopping cart with PayPal & credit/debit payments.

<!-- toc -->

- [Features](#features)
- [Usage](#usage)
  - [Install](#install)
  - [Run](#run)
- [Build & Deploy](#build--deploy)
- [Seeding Data](#seeding-data)

<!-- tocstop -->

## Fetures

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

## Usage

1. Clone the repository:
   https://github.com/NatasaIc/fullstack-e-commerse-app-Examination.git
2. Place the provided config.env file in the root of the project

## Install

npm install
cd frontend
npm install

## Run

Run frontend and backend
npm run dev

Backend only
npm run server

## Build & Deploy

cd frontend
npm run build

## Seeding Data

```
Import data:
node backend/data/import-dev-data.js --import

Delete data:
node backend/data/import-dev-data.js --delete
```
