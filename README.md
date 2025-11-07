# 🚀 Fullstack Auth Project

A complete **Login & Registration system** built using **React (Vite)** for the frontend and **Node.js + Express + MongoDB** for the backend — both deployed on **Render**.

---

## 🌐 Live Demo

**🖥 Frontend (React App)**  
🔗 [https://fullstack-px2h.onrender.com](https://fullstack-px2h.onrender.com)

**⚙️ Backend (API Server)**  
🔗 [https://fullstack-auth-project-7ipc.onrender.com](https://fullstack-auth-project-7ipc.onrender.com)

---

## ✨ Features

✅ Register new users  
✅ Secure Login with JWT  
✅ Protected `/api/profile` route  
✅ MongoDB Atlas for data storage  
✅ Password hashing with bcrypt  
✅ Full deployment on Render (Free tier)

---

## 🧠 Tech Stack

**Frontend:**  
- React (Vite)
- Axios  
- TailwindCSS (for UI)  

**Backend:**  
- Node.js  
- Express.js  
- MongoDB (Atlas)  
- Mongoose  
- JWT Authentication  
- bcryptjs for password hashing  
- dotenv for environment variables  

---

## 📁 Folder Structure

fullstack-auth-project/
│
├── client/ # React frontend
│ ├── src/
│ ├── .env
│ ├── package.json
│ └── ...
│
├── server/ # Express backend
│ ├── server.js
│ ├── userModel.js
│ ├── .env
│ └── package.json
│
└── README.md

yaml
Copy code

---

## 🔐 Environment Variables

### 🗄 In `/server/.env`
PORT=5000
MONGO_URI=mongodb+srv://santhosh:hlO772pCD5XHNNtJ@cluster0.mql7j9a.mongodb.net/?retryWrites=true&w=majority
JWT_SECRET=supersecretkey

shell
Copy code

### 💻 In `/client/.env`
VITE_API_BASE=https://fullstack-auth-project-7ipc.onrender.com

yaml
Copy code

---

## 🚀 Deployment

- **Frontend:** Render → Static Site  
- **Backend:** Render → Web Service  
- **Database:** MongoDB Atlas  

---

## 🧩 How It Works

1️⃣ User registers → Password hashed & stored in MongoDB  
2️⃣ User logs in → Server sends JWT token  
3️⃣ React saves token in localStorage  
4️⃣ “Get Profile” → hits `/api/profile` using token  
5️⃣ Logout → removes token from localStorage  

---

## 💡 Quick Demo Flow (for Interview)

1️⃣ Open 👉 [https://fullstack-px2h.onrender.com](https://fullstack-px2h.onrender.com)  
2️⃣ Register a user → for example `demo123 / 12345`  
3️⃣ Login → “🔓 Logged in successfully!”  
4️⃣ Click **Get Profile** → you’ll see the authenticated user  
5️⃣ (Optional) Open backend 👉 [https://fullstack-auth-project-7ipc.onrender.com](https://fullstack-auth-project-7ipc.onrender.com)

🗣 *“It’s fully deployed with a working authentication flow and secure backend.”*

---

## 📸 Preview

🧩 Registration & Login Flow  
(You can add screenshots later from your Render frontend)

---

## 👨‍💻 Author

**👤 Santhosh Dulam**  
📧 [santhosh.dulam45@gmail.com](mailto:santhosh.dulam45@gmail.com)  
💼 [LinkedIn](https://linkedin.com/in/santhosh-dulam-94b8b9242)  
🌍 [GitHub](https://github.com/SanthoshDulam)

---

⭐ If you like this project, give it a **star** on GitHub! ⭐
