# 📝 BlogHub Backend

BlogHub is a secure, modular blogging platform backend built using **Node.js**, **Express**, **MongoDB**, and **JWT Authentication**.

---

## 🚀 Features

- User Registration & Login with JWT
- Secure Password Hashing with Bcrypt
- Create, Read, Update, Delete (CRUD) for Blogs
- Auth-protected profile and blog routes
- Modular folder structure using MVC and service pattern

---

## 🛠️ Technologies Used

- Node.js
- Express.js
- MongoDB & Mongoose
- JWT (JSON Web Token)
- BcryptJS
- CORS
- dotenv

---

## 📁 Folder Structure

```
bloghub-backend/
└── src/
    ├── config/           # MongoDB connection
    ├── controllers/      # Request handlers
    ├── middleware/       # Auth middleware
    ├── models/           # Mongoose models
    ├── routes/           # API routes
    ├── services/         # Business logic
    ├── utils/            # JWT token generator
    ├── app.js            # Express setup
├── server.js             # App entry point
├── .env                  # Environment variables
├── .gitignore            # gitignore files
├── package.json          # json
├── package-lock.json     
└── README.md             # Project info
```

---

## ⚙️ Setup Instructions

1. Clone the repo:
```bash
git clone https://github.com/your-username/bloghub-backend.git
cd bloghub-backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file and add:

```
PORT=3001
MONGO_URI=mongodb://localhost:27017/bloghub
JWT_SECRET=your_jwt_secret_here
```

4. Start the server in development mode:
```bash
npm run dev
```

---

## 🔐 Authentication Headers

Use this header in protected routes:

```
Authorization: Bearer <your_jwt_token>
```

---

## 📡 API Endpoints

### 🔑 Auth Routes

| Method | Endpoint             | Description             |
|--------|----------------------|-------------------------|
| POST   | `/api/auth/register` | Register new user       |
| POST   | `/api/auth/login`    | Login user              |

### 👤 User Routes

| Method | Endpoint         | Description           |
|--------|------------------|-----------------------|
| GET    | `/api/users/me`  | Get current user info |

### 📝 Blog Routes

| Method | Endpoint            | Description                  |
|--------|---------------------|------------------------------|
| GET    | `/api/blogs`        | Get all blogs                |
| GET    | `/api/blogs/:id`    | Get blog by ID               |
| POST   | `/api/blogs`        | Create blog (auth required)  |
| PUT    | `/api/blogs/:id`    | Update blog (author only)    |
| DELETE | `/api/blogs/:id`    | Delete blog (author only)    |

---

## 📅 Last Updated

August 01, 2025

---

## 🧑 Author

**Nishant Jain**  
GitHub: [@your-username](https://github.com/your-username)

