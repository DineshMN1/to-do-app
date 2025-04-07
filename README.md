# Todo App

A simple Todo List application built with **React** and **Firebase Firestore**.  
Users can add, view, update, and delete tasks in real-time.

---

## Tech Stack

- **React** – Frontend framework  
- **Vite** – Fast development environment  
- **Firebase Firestore** – Realtime NoSQL database  
- **Tailwind CSS** – Utility-first CSS framework  

---

## Features

- ✅ Add new tasks  
- ✅ View tasks stored in Firestore  
- ✅ Toggle task completion  
- ✅ Delete tasks  
- ⚡ Realtime updates (optional)  
- 🔐 User authentication integration  

---

## Setup Instructions

1. **Clone the repository**

   ```bash
   git clone https://github.com/DineshMN1/to-do-app.git
   cd to-do-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure Firebase**

   - Go to [Firebase Console](https://console.firebase.google.com/) and create a new project.
   - Enable **Firestore Database** in test mode.
   - In your project settings, copy the Firebase config details.

   Create a `.env` file in the project root with the following content:

   ```env
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   ```

4. **Run the Development Server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:5173](http://localhost:5173) in your browser to see the app in action.

---

## Folder Structure

```
src/
├── Components/
│   └── NewTodo.jsx
├── firebase.js
├── App.jsx
├── styles.css
```

---

## License

MIT – free to use and modify.

---
