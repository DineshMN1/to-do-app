import { useState } from "react";

export function NewTodo({ onSubmit }) {
    const [newItem, setNewItem] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        if (newItem.trim() === "") return;

        onSubmit(newItem);
        setNewItem("");
    }

    return (
        <form onSubmit={handleSubmit} className="text-xl text-center py-10">
            <div className="form-row flex flex-col items-center">
                <label htmlFor="item" className="text-3xl mb-2">New Item</label>
                <input 
                    className="w-full max-w-md bg-black/10 border border-black/10 rounded-lg px-3 py-2 placeholder:text-sm focus:outline-none focus:border-black focus:bg-black/5"
                    placeholder="New Todo..."
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)}
                    type="text" 
                    id="item" 
                />
            </div>
            <button 
                className="w-[22%] bg-black text-white py-2 mt-4 px-6 rounded-lg hover:bg-black/70 transition duration-300" 
                type="submit"
            >
                Add
            </button>
        </form>
    );
}

