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
        <label htmlFor="item" className="text-3xl mb-2 dark:text-white">
          New Item
        </label>
        <input
          className="w-full max-w-md bg-black/10 dark:bg-white/10 border border-black/10 dark:border-white/20 rounded-lg px-3 py-2 placeholder:text-sm focus:outline-none focus:border-black focus:bg-black/5 dark:focus:border-white dark:text-white"
          placeholder="New Todo..."
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          type="text"
          id="item"
        />
      </div>
      <button
        className="w-[22%] bg-black dark:bg-white text-white dark:text-black py-2 mt-4 px-6 rounded-lg hover:bg-black/70 dark:hover:bg-white/80 transition duration-300"
        type="submit"
      >
        Add
      </button>
    </form>
  );
}
