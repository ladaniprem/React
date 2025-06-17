import { useEffect, useState } from 'react'
import './App.css'
import TodoForm from './Components/TodoForm'
import TodoItem from './Components/TodoItem'
import TodoProvider from './Contexts'

function App() {
  const [todos,setTodos] = useState([])

  const addTodo = (todo) =>{
    setTodos((prev)=>[{id: Date.now(),...todo}, ...prev] )
  }

  const upadateTodo = (id,todo) => {
    setTodos((prev)=>prev.map((prevTodo)=> (prevTodo.id === id ? todo : prevTodo )))

    // second method to write the same Logic
    // setTodos((prev) => prev.map((eachVal) => {
    //   if (eachVal.id === id) {
    //     return { ...todo, id }
    //   } else {
    //     return eachVal
    //   }
    // }))
  }
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo)=> todo.id !== id))
  }

  const toggleComplete = (id) => {
    // setTodos((prev) => prev.map((todo)=> {
    //   if (todo.id === id){
    //     return {...todo, toggleCompleted: !todo.toggleComplete}
    //   }
    //   else{
    //     return todo
    //   }
    // }))
    setTodos((prev) => prev.map((todo) => 
      todo.id === id ? {...todo,toggleComplete:!todo.toggleComplete} : todo ))
  }

  useEffect (()=> {
   const todos = JSON.parse( localStorage.getItem('todos') )

   if (todos && todos.length > 0) {
     setTodos(todos)
   } 
  },[])

  useEffect(() => {
  localStorage.setItem('todos', JSON.stringify(todos))
  },[todos])

  
  // Localstorage ko ap directly use nahi kar sakte, isliye useEffect me use karte hain
  // Localstorage ke ap directly access kar sakhte ho jab tak ap kisi server side rendring ki baat nahi kar rahe ho.


  return (
    <TodoProvider value={{todos,addTodo,upadateTodo,deleteTodo,toggleComplete}}>
    // Wrap the app with TodoProvider to provide context
      <div className="bg-[#172842] min-h-screen py-8">
      <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
      <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
      <div className="mb-4">
        <TodoForm />
      {/* Todo form goes here */} 
      </div>
      <div className="flex flex-wrap gap-y-3">
        <TodoItem />
      {/*Loop and Add TodoItem here */}
      </div>
      </div>
      </div>
    </TodoProvider>
  )
} 

export default App