### README for Backend

# Fitness Equipment and Accessories - Backend

## Live link

[Visit Live Site](https://fitness-equipment-and-accessories-backend.vercel.app)

## Overview

We're developing a comprehensive e-commerce website for fitness equipment using Node.js, Express, Mongoose, and TypeScript. This platform offers robust product management capabilities for administrators and secure payment processing with optional Stripe integration. The backend supports all core functionalities required for a seamless e-commerce experience.

## Backend Requirements

- Node.js 🟢
- Express.js 🌐
- Mongoose 🍃
- TypeScript 📘

## Core Functionalities

1. **Product Listings**: Retrieve and filter products based on search terms, categories, and price ranges.
2. **Product Details**: Retrieve detailed information for a single product.
3. **Add to Cart**: Add products to the user's cart with quantity control.
4. **Cart Management**: Increase/decrease product quantity and remove products from the cart.
5. **Checkout**: Process user details and handle payment methods (Cash on Delivery and optional Stripe).
6. **Product Management**: CRUD operations for product management by administrators.
7. **User Authentication**: Secure user login and registration.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Md-Rijwan-Jannat/Fitness-Equipment-And-Accessories-Backend.git
   cd Fitness-Equipment-And-Accessories-Backend

   ```

2. Install dependencies:

   ```bash
   yarn install
   Set up environment variables:
   Create a .env file in the root directory and add the following:
   ```

.env

```bash
NODE_ENV ='development'
PORT=5000
database_url=mongodb://localhost:27017/fitness-equipment-and-accessories
```

```bash
npm start:dev
The backend server will be running on:

``bash
http://localhost:5000
```

## API Endpoints

- POST /api/v1/products/create-product: Create single product.
- GET /api/v1/products: Retrieve all products.
- GET /api/v1/products/:id: Retrieve a single product by ID.
- DELETE /api/v1/products/:id: Add a product to the cart.
- PUT /api/v1/products/:id
  : Update the quantity of a product in the cart.
- DELETE /api/v1/orders/create-user-order-details
  : Remove a product from the cart.
- POST /api/v1/checkout: Process checkout and payment.

## Contribution

Feel free to contribute by creating pull requests. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License.

```

```
