import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'
function Todos() {

    const todos = useSelector (state => state.todos)
    
    const dispatch = useDispatch();


return (
    <>
        <div className="max-w-3xl mx-auto p-4">
            <h1 className="text-2xl font-bold text-center mb-4">Todos</h1>
            <ul className="space-y-2">
                {todos.map((todo) => (
                    <li 
                        key={todo.id}
                        className="flex items-center justify-between p-3 bg-white shadow-md rounded-lg transform hover:scale-102 transition-all duration-200 animate-fade-in"
                    >
                        <span className="text-gray-800">{todo.text}</span>
                        <button 
                            onClick={() => dispatch(removeTodo(todo.id))}
                            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors duration-200"
                        >
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    </>
)
}

export default Todos
