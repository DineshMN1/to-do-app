import { useEffect, useState } from "react";
import "./styles.css";
import { NewTodo } from "./Components/NewTodo";
import db from "./firebase";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore";

function App() {
  const [todos, setTodos] = useState([]);

  // Fetch Todos from Firebase
  useEffect(() => {
    async function fetchTodos() {
      const todosCol = collection(db, "todos");
      const todosSnapshot = await getDocs(todosCol);
      const todosList = todosSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTodos(todosList);
    }
    fetchTodos();
  }, []);

  // Add Todo
  async function addTodo(title) {
    const docRef = await addDoc(collection(db, "todos"), {
      title,
      completed: false,
    });
    setTodos([...todos, { id: docRef.id, title, completed: false }]);
  }

  // Toggle Completed
  async function toggleTodo(id, completed) {
    const todoRef = doc(db, "todos", id);
    await updateDoc(todoRef, { completed });
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed } : todo)));
  }

  // Delete Todo
  async function deleteTodo(id) {
    const todoRef = doc(db, "todos", id);
    await deleteDoc(todoRef);
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <>
      <NewTodo onSubmit={addTodo} />
      <h1 className="text-3xl text-center">Todos List</h1>
      <div className="max-w-lg mx-auto">
        <ul className="list bg-white p-4 rounded-lg shadow-md">
          {todos.map((todo) => (
            <li key={todo.id} className="flex items-center gap-4 p-2 border-b border-gray-300">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={(e) => toggleTodo(todo.id, e.target.checked)}
                className="w-5 h-5 rounded-md border-gray-400 cursor-pointer transition-all focus:ring-2 focus:ring-black checked:bg-black"
              />
              <span className={`text-lg ${todo.completed ? "line-through text-gray-500" : "text-black"}`}>
                {todo.title}
              </span>
              <button
                onClick={() => deleteTodo(todo.id)}
                className="ml-auto bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
