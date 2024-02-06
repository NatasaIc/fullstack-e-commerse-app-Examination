﻿<img src='./frontend//src//assets//E (3).png' alt="Logo" height="100"/>

As part of my assessment for the Web Development in E-commerce program at Medieinstitutet in Stockholm, I've undertaken a comprehensive project. It is a full- featured shopping cart with PayPal & credit/debit payments. As the zenith of my full-stack development journey, this project serves as my final exam in e-commerce, built with the MERN stack incorporating Redux Toolkit alongside MongoDB Atlas for seamless management of product listings, orders, and user authentication.

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

## Dependencies

# Frontend

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

You can use the following commands to seed the database with some sample users and products as well as destroy all data

```
Import data:
node backend/data/import-dev-data.js --import

Delete data:
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
