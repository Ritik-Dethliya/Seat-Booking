# Seat-Booking App

A full-stack web application to book seats that are **nearby to each other**, built using the MERN stack.

---

## 📚 Table of Contents

- Home
- Login
- SignUp 

---

## 🧾 About

This app allows users to book multiple seats that are close to each other. It's logic also useful for theaters, buses, classrooms, etc., where seat grouping is important.

---

## 🛠️ Tech Stack

**Frontend**  
- [React](https://reactjs.org/)
- HTML5, CSS3, JavaScript  
- Context API or Redux

**Backend**  
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)

**Database**  
- [MongoDB](https://www.mongodb.com/)

**Development Tools**  
- [Visual Studio Code](https://code.visualstudio.com/)
- Postman (for API testing)
- Git & GitHub (version control)

---

## ✨ Features

- Seat layout with real-time selection
- Algorithm to book nearby available seats
- User authentication 
- Responsive design for mobile and desktop
- Error handling and validation

---

## 🚀 Installation

### Folder Structure
```
├── backend/ # Backend (Node.js + Express)
│ ├── modules/ # Logic modules (controllers/services)
│ ├── routers/ # API route handlers
│ ├── db.config.js # MongoDB connection setup
│ ├── package.json # Backend dependencies and scripts
│
├── frontend/ # Frontend (React)
│ ├── public/ # Static files like index.html
│ └── src/ # React components and pages
│ ├── components/ # Reusable UI components (optional)
│ ├── pages/ # Page components (optional)
│ └── App.jsx # Main React app file
│
└── README.md # Project documentation

### Prerequisites

- Node.js & npm
- MongoDB

### 🚀 Clone & Run the Project

#### 1. Clone the Repository

```bash
git clone https://github.com/Ritik-Dethliya/Seat-Booking.git
cd Seat-Booking

## start Frontend
cd frontend
npm install
npm run dev

### start Backend
Open new Terminal
cd ../backend
npm install
node server.js