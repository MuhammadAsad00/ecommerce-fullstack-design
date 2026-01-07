# 🛒 Full‑Stack E‑Commerce Application (MERN + Tailwind)

A modern **full‑stack e‑commerce web application** built using the **MERN stack** with **Tailwind CSS** for a clean, responsive UI. This project demonstrates real‑world features such as authentication, product management, cart handling, and secure checkout — designed to be production‑ready and easy to extend.

---

## 🚀 Features

### 👤 User Features

* User authentication (Register / Login / Logout)
* JWT‑based secure authentication
* Browse products by category
* Product search & filtering
* Product details page
* Add / remove items from cart
* Quantity management in cart
* Order placement (basic flow)
* Responsive UI (mobile‑first)

### 🛠️ Admin Features

* Admin authentication
* Add, update, and delete products
* Manage product images
* View all users
* Manage orders

---

## 🧰 Tech Stack

### Frontend

* **React.js**
* **Tailwind CSS**
* React Router
* Axios
* Context API

### Backend

* **Node.js**
* **Express.js**
* **MongoDB** (Mongoose)
* JSON Web Tokens (JWT)
* Bcrypt.js (password hashing)

### Other Tools

* Cloudinary (image uploads)
* dotenv (environment variables)
* Multer (file handling)

---

## 📂 Project Structure

```
root/
├── frontend/        # React frontend
│   ├── src/
│   ├── components/
│   ├── pages/
│   ├── context/
│   └── utils/
│
├── backend/        # Node.js backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── config/
│
└── README.md
```

---

## ⚙️ Environment Variables

Create a `.env` file in the **server** directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

---

## 🧪 Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

### 2️⃣ Backend setup

```bash
cd server
npm install
npm run dev
```

### 3️⃣ Frontend setup

```bash
cd client
npm install
npm run dev
```

---

## 🌐 API Overview

| Method | Endpoint           | Description         |
| ------ | ------------------ | ------------------- |
| POST   | /api/auth/register | Register user       |
| POST   | /api/auth/login    | Login user          |
| GET    | /api/products      | Get all products    |
| POST   | /api/products      | Add product (Admin) |
| PUT    | /api/products/:id  | Update product      |
| DELETE | /api/products/:id  | Delete product      |

---

## 📸 Screenshots

> Add screenshots or GIFs of your application here to improve visibility and engagement.

---

## 🔒 Security

* Passwords hashed using **bcrypt**
* Protected routes using JWT middleware
* Role‑based access control (Admin/User)

---

## 🧠 What I Learned

* Building scalable REST APIs
* Authentication & authorization flows
* Managing global state with Context API
* Secure backend development
* Clean UI design with Tailwind CSS

---

## 🛣️ Future Improvements

* Payment gateway integration (Stripe)
* Order history & tracking
* Wishlist feature
* Product reviews & ratings
* Admin dashboard analytics

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repo
2. Create a new branch
3. Commit your changes
4. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License**.

---

## 👨‍💻 Author

**Muhammad Asad**
Full‑Stack Developer (MERN)

If you find this project helpful, don’t forget to ⭐ the repository!
