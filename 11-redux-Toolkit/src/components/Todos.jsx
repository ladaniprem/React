import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo, updateTodo } from '../features/todo/todoSlice'
import { useState } from 'react'

function Todos() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
    const [editingId, setEditingId] = useState(null)
    const [updatedText, setUpdatedText] = useState('')

    const handleUpdate = (todo) => {
        if (editingId === todo.id) {
            dispatch(updateTodo({ id: todo.id, title: updatedText }))
            setEditingId(null)
            setUpdatedText('')
        } else {
            setEditingId(todo.id)
            setUpdatedText(todo.title || '')
        }
    }

    return (
        <>
            <div className="max-w-3xl mx-auto p-4">
                <h1 className="text-2xl font-bold text-center mb-4">Todos</h1>
                <ul className="space-y-2">
                    {todos.map((todo) => (
                        <li 
                            key={todo.id}
                            className="flex items-center justify-between p-3 bg-gray-700 shadow-md rounded-lg transform hover:scale-102 transition-all duration-200 animate-fade-in"
                        >
                            {editingId === todo.id ? (
                                <input
                                    key={todo.id}
                                    type="text"
                                    value={updatedText}
                                    onChange={(e) => setUpdatedText(e.target.value)}
                                    className="flex-1 mr-2 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            ) : (
                                <span className="text-gray-200">{todo.title}</span>
                            )}
                            <div className="flex gap-2">
                                <button 
                                    onClick={() => handleUpdate(todo)}
                                    className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors duration-200"
                                >
                                    {editingId === todo.id ? 'Save' : 'Edit'}
                                </button>
                                <button 
                                    onClick={() => dispatch(deleteTodo(todo.id))}
                                    className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors duration-200"
                                >
                                    Delete
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Todos
