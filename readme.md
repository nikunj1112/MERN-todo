# 📝 MERN Stack Todo Manager App

A modern, secure, and responsive **Todo Management Web Application** built using the **MERN Stack (MongoDB, Express.js, React.js, Node.js)**.  
This application helps users manage daily tasks with authentication, filters, and a clean professional UI.

---

## ✨ Features

### 👤 Authentication
- User Registration (Signup)
- User Login with JWT Authentication
- Secure protected routes
- Logout functionality

### 📝 Todo Management
- Create Todo with title & description
- Update Todo (mark complete / pending)
- Delete Todo
- Get Todos (only logged-in user)
- Filter Todos (All / Pending / Completed)
- Search Todos

### 🔐 Security
- Password hashing with bcrypt
- JWT based authentication
- Protected APIs using middleware

### 🎨 UI / UX
- Clean, modern and responsive UI
- Bootstrap based styling
- Professional color palette
- Toast notifications for actions (success/error)

---

## 🛠️ Tech Stack

**Frontend:**
- React.js (Vite)
- React Router DOM
- Axios
- Bootstrap 5
- React Toastify

**Backend:**
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- Bcrypt (Password Hashing)

**Tools:**
- Postman (API testing)
- Git & GitHub

---


🎥 **Demo Video:**  

https://drive.google.com/file/d/1n299jrrh5glPv3-xg0Ja85tBl7kUcQaS/view?usp=sharing

---

## 📸 Screenshots

### 🔐 Authentication (Login / Register)
<img width="450" height="700" alt="Screenshot 2026-02-24 at 6 08 40 PM" src="https://github.com/user-attachments/assets/a1218d6d-29a9-4247-87a2-ed272c13d7ed" />
<img width="450" height="700" alt="Screenshot 2026-02-24 at 6 08 49 PM" src="https://github.com/user-attachments/assets/48960c7e-9fac-4fec-b822-14a2356baa4b" />


### 📋 Dashboard (Todos UI)
<img width="1401" height="702" alt="Screenshot 2026-02-24 at 6 08 25 PM" src="https://github.com/user-attachments/assets/5066d1ec-538a-4e94-9228-033cc8812355" />


### 🧪 Postman API Testing
<img width="450" height="700" alt="Screenshot 2026-02-24 at 5 59 51 PM" src="https://github.com/user-attachments/assets/96641f35-86d3-49d1-9b9c-e110cd16f9ae" />
<img width="450" height="700" alt="Screenshot 2026-02-24 at 6 00 18 PM" src="https://github.com/user-attachments/assets/b3113cb2-75a8-4335-8625-eb6489a5a3a7" />


---

## 📂 Project Folder Structure

```bash
MERN-TODO/
│
├── server/
│   ├── controllers/
│   │   ├── auth_controller.js
│   │   └── todo_controller.js
│   ├── models/
│   │   ├── user_models.js
│   │   └── todo_models.js
│   ├── routes/
│   │   ├── auth_routes.js
│   │   └── todo_routes.js
│   ├── middlewares/
│   │   └── auth_middleware.js
│   ├── config/db.js
│   ├── .env
│   └── server.js
│
├── client/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   └── FirstPage.jsx
│   │   ├── api/db.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
└── README.md
```


---

## ▶️ Installation & Setup
   ### 1️⃣ Clone Repository
  - git clone https://github.com/nikunj1112/MERN-todo
  - cd mern-todo-app
### 2️⃣ Backend Setup
- cd server
- npm install
- npm run dev
### 3️⃣ Frontend Setup
- cd client
- npm install
- npm run dev

### Frontend will run on:
👉 http://localhost:5173

### Backend will run on:
👉 http://localhost:1975

---


## 🎯 Future Improvements
- Profile management
- Drag & drop todos
- Due date & priority
- Dark mode
- Mobile app version (React Native)

## 👨‍💻 Developer

**Name:** Nikunj Rana

**GitHub:** https://github.com/nikunj1112

**LinkedIn:** https://www.linkedin.com/in/nikunj-rana-7ba712319/

---
