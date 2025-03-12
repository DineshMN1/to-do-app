import { useState, useEffect } from "react";
import "./styles.css";
import { NewTodo } from "./Components/NewTodo";
import supabase from "./supabase.js"; // Import Supabase

function App() {
    const [todos, setTodos] = useState([]);

    // Fetch Todos from Supabase on Load
    useEffect(() => {
        async function fetchTodos() {
            const { data, error } = await supabase.from("todos").select("*");
            if (error) console.error("Error fetching todos:", error);
            else setTodos(data);
        }
        fetchTodos();
    }, []);

    async function addTodo(title) {
        const { data, error } = await supabase
            .from("todos")
            .insert([{ title, completed: false }])
            .select();
        if (error) console.error("Error adding todo:", error);
        else setTodos([...todos, data[0]]);
    }

    async function toggleTodo(id, completed) {
        const { data, error } = await supabase
            .from("todos")
            .update({ completed })
            .eq("id", id)
            .select();
        if (error) console.error("Error updating todo:", error);
        else
            setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed } : todo)));
    }

    async function deleteTodo(id) {
        const { error } = await supabase.from("todos").delete().eq("id", id);
        if (error) console.error("Error deleting todo:", error);
        else setTodos(todos.filter((todo) => todo.id !== id));
    }

    return (
        <>
            <NewTodo onSubmit={addTodo} />
            <h1 className="text-3xl text-center">Todos List</h1>
            <div className="max-w-lg mx-auto">
                <ul className="list bg-white p-4 rounded-lg shadow-md">
                    {todos.map((todo) => (
                        <li key={todo.id} className="flex items-center gap-4 p-2 border-b border-gray-300">
                            {/* Checkbox */}
                            <input
                                type="checkbox"
                                checked={todo.completed}
                                onChange={(e) => toggleTodo(todo.id, e.target.checked)}
                                className="w-5 h-5 rounded-md border-gray-400 cursor-pointer transition-all focus:ring-2 focus:ring-black checked:bg-black"
                            />

                            {/* Todo Text */}
                            <span className={`text-lg ${todo.completed ? "line-through text-gray-500" : "text-black"}`}>
                                {todo.title}
                            </span>

                            {/* Delete Button */}
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
