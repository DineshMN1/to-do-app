import { useState } from "react"
import "./styles.css" 
function App(){
    const [newItem,setNewItem] = useState("")
    const [todos , setTodos] = useState([])

    function handleSumbit(e) {
        e.preventDefault()

        setTodos((currentTodos) => {
            return[...currentTodos,{id: crypto.randomUUID(),title: newItem, completed : false},]})
            setNewItem("")
     }

    function toggleTodo(id,completed) {
        setTodos(currentTodos => {
            return currentTodos.map(todo => {
                if(todo.id === id){
                    todo.completed =completed
                    return {...todo,completed}
                }
                return todo
            })
        })
    }
    
    function deleteTodo(id) {
        setTodos(currentTodos=> {
            return currentTodos.filter(todo => todo.id !== id)
        })
        
    }
    return(
        <>
        <form onSubmit={handleSumbit} className="new-item-form">
            <div className="form-row">
                <label htmlFor="item">New Item</label>
                <input
                value={newItem}
                onChange={e => setNewItem(e.target.value)} 
                type="text" id="item" />
            </div>
            <button className="btn">Add</button>
        </form>
        <h1 className="header">Todos List</h1>
        <ul className="list">
            {todos.map(todos=> {
                return(
                    <li key={todos.id}>
                <label >
                    <input type="checkbox" checked={todos.completed} onChange={e => toggleTodo(todos.id , e.target.checked)}/>
                    {todos.title}
                </label>
                <button onClick={()=>deleteTodo(todos.id)} className="btn btn-danger">Delete</button>
            </li>
                )
            })}
            
        </ul>
        </>
    )
}

export default App