# ECommerce Fullstack Application

A complete eCommerce web application built with React (frontend) and Express.js (backend), featuring user authentication, product management, shopping cart, and admin panel.

## 🚀 Features

### Frontend (React)
- **Responsive Design**: Mobile and desktop compatible
- **User Authentication**: Login/Register with JWT tokens
- **Product Catalog**: Browse products with search and filtering
- **Shopping Cart**: Add/remove items, quantity management
- **Product Details**: Detailed product pages with add to cart
- **Admin Panel**: Product management for administrators
- **Search Functionality**: Global search from navbar and local search in listing

### Backend (Express.js)
- **RESTful API**: Complete API for products, cart, and authentication
- **JWT Authentication**: Secure user authentication and authorization
- **Admin Features**: Protected admin endpoints for product CRUD
- **Cart Management**: Persistent cart with user sessions
- **CORS Enabled**: Cross-origin requests supported

## 🛠️ Tech Stack

- **Frontend**: React 19.2.5, React Router, TailwindCSS
- **Backend**: Express.js, Node.js
- **Authentication**: JWT, bcryptjs
- **Database**: In-memory (for demo - easily replaceable with real DB)

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## 🚀 How to Run

### 1. Backend Setup

```bash
cd backend
npm install
npm start
```

Backend will run on `http://localhost:4000`

### 2. Frontend Setup

```bash
cd frontend
npm install
npm start
```

Frontend will run on `http://localhost:3001` (or next available port)

### 3. Access the Application

Open your browser and go to:
- **Frontend**: `http://localhost:3001` (or the port shown in terminal)
- **Backend API**: `http://localhost:4000`

## 👤 User Accounts

### Admin Account
- **Email**: `admin@example.com`
- **Password**: `password`
- **Role**: Administrator (can manage products)

### Regular User Account
- **Email**: `user@example.com`
- **Password**: `password`
- **Role**: Regular user

### Create New Account
- Click "Login" in navbar → "create a new account"
- Fill registration form

## 🎯 Key Features Guide

### 🛒 Shopping
1. Browse products on home page
2. Click "View All" on category sections
3. Use search bar in navbar for global search
4. Click product cards to view details
5. Add items to cart from product details
6. Manage cart quantities and checkout

### 🔍 Search & Filter
- **Global Search**: Use navbar search bar
- **Category Filter**: Select category in navbar search
- **Local Search**: Search within listing page
- **Sorting**: Sort by price, rating, featured

### 👨‍💼 Admin Panel
1. Login with admin account
2. Click profile dropdown → "Admin Panel"
3. Add new products with form
4. Edit existing products
5. Delete products
6. View all products in table format

### 🔐 Authentication
- Login/Register from navbar
- Persistent sessions with JWT
- Admin role-based access control
- Secure password hashing

## 📁 Project Structure

```
ecommerce-fullstack-design/
├── backend/
│   ├── server.js          # Main backend server
│   ├── package.json       # Backend dependencies
│   └── node_modules/
├── frontend/
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── context/       # React contexts
│   │   ├── data/          # Static data
│   │   └── assets/        # Images and media
│   ├── package.json       # Frontend dependencies
│   └── public/            # Static files
└── README.md
```

## 🔧 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user info

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get product by ID

### Cart
- `GET /api/cart` - Get user's cart
- `POST /api/cart` - Add item to cart
- `PUT /api/cart/:productId` - Update item quantity
- `DELETE /api/cart/:productId` - Remove item from cart

### Admin (Protected)
- `GET /api/admin/products` - Get all products (admin)
- `POST /api/admin/products` - Create product (admin)
- `PUT /api/admin/products/:id` - Update product (admin)
- `DELETE /api/admin/products/:id` - Delete product (admin)

## 🎨 Design

The application follows the Figma design with:
- Modern, clean UI
- Responsive layout for all devices
- Consistent color scheme and typography
- Smooth animations and transitions
- Professional eCommerce aesthetics

## 🚀 Deployment

### Backend Deployment
```bash
cd backend
npm run build  # If using build process
npm start
```

### Frontend Deployment
```bash
cd frontend
npm run build
# Serve the build folder with any static server
```

## 🤝 Contributing

1. Fork the repository
2. Create feature branch
3. Commit changes
4. Push to branch
5. Create Pull Request

## 📝 Notes

- This is a demo application with in-memory data storage
- For production, replace in-memory storage with a real database (MongoDB, PostgreSQL, etc.)
- JWT secret should be stored in environment variables
- Add proper error handling and validation for production use

---

**Built with ❤️ for complete eCommerce functionality**

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
