# Quick Cart E-Commerce Platform

A modern e-commerce platform built with React and Node.js, featuring a responsive design and seamless shopping experience.

## 🚀 Features

- Responsive design for all devices
- User authentication and authorization
- Product catalog with filtering options
- Shopping cart functionality
- Secure payment integration
- Real-time product updates
- User profile management

## 🛠️ Tech Stack

### Frontend
- React 18
- Vite
- TailwindCSS
- React Router DOM
- Axios
- Font Awesome
- AOS (Animate On Scroll)

### Backend
- Node.js
- Express
- MongoDB
- JWT Authentication
- Bcrypt
- CORS

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Setting up the project

1. Clone the repository
```bash
git clone <repository-url>
cd quick-cart
```

2. Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

3. Backend Setup
```bash
cd backend
npm install
# Create .env file and add required environment variables
npm start
```

### Environment Variables

Create `.env` files in both frontend and backend directories:

#### Backend `.env`
```
PORT=7000
MONGODB_URI=mongodb://127.0.0.1:27017/e-comm
JWT_SECRET=your_jwt_secret
```

## 🏗️ Project Structure

```
quick-cart/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── contextStore/
│   │   ├── login/
│   │   └── assets/
│   ├── public/
│   └── package.json
├── backend/
│   ├── server.js
│   ├── routes/
│   ├── models/
│   └── package.json
└── README.md
```

## 🚦 API Routes

### Products
- `GET /products` - Get all products
- `GET /products/:id` - Get specific product
- `POST /products` - Add new product (Admin)
- `PUT /products/:id` - Update product (Admin)
- `DELETE /products/:id` - Delete product (Admin)

### Authentication
- `POST /register` - User registration
- `POST /login` - User login

## 💻 Development

1. Frontend development server:
```bash
cd frontend
npm run dev
```

2. Backend development server:
```bash
cd backend
npm start
```

## 🧪 Testing

```bash
# Frontend tests
cd frontend
npm run test

# Backend tests
cd backend
npm test
```

## 🔐 Security

- JWT for authentication
- Bcrypt for password hashing
- CORS enabled
- Environment variables for sensitive data

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 👥 Authors

- Initial work - [Dawinder Singh]

## 🙏 Acknowledgments

- React Team
- Node.js Community
- MongoDB Team
- All contributors

## 📧 Contact

For any queries or support, please contact: [dawinder.dhiman.dev@gmail.com]