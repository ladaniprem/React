import React from 'react'
import { useState } from 'react'
import { Link,useNavigate} from 'react-router-dom'
import { login as authLogin } from '../features/authSlice'
import { Button, Input,Logo} from './index'
import { useDispatch } from 'react-redux'
import authServiceInstance from '../appwrite/auth'
import { useForm } from 'react-hook-form'

function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { register, handleSubmit } = useForm()
  const [error, setError] = useState('')


  const login = async (data) => {
    setError('')
    console.log('Login data:', data)
    // Perform login using authServiceInstance
    try {
      const Session = await authServiceInstance.login(data)
      if (Session) {
        const userData = await authServiceInstance.getCurrentUser()
        if (userData) {
          dispatch(authLogin(userData))
          navigate('/')
        }
      }
    } catch (error) {
      setError(error.message)
    }
  }


  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
      <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md flex flex-col items-center transition-all duration-700 ease-out opacity-0 translate-y-10 animate-fade-in">
        <Logo />
        <h1 className="text-3xl font-extrabold mb-6 text-gray-800 tracking-tight animate-fade-in-down">Login</h1>
        {error && (
          <p className="text-red-500 mb-4 animate-shake">{error}</p>
        )}
        <form onSubmit={handleSubmit(login)} className="w-full space-y-4 animate-fade-in"> // handleSubmit is this time to keyword to handle form submission or one type of event handler
          <Input
            label="email"
            type="email"
            placeholder="Email"
            className="w-full"
            {...register('email', { required: true,
              validate: {
                matchPattern: (value) => 
                  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value) 
                || 'Email address must be a valid address',
              }
             })} // ... nahi lakhite hai to override karega register function ko
          />
          <Input
            label="password"
            type="password"
            placeholder="Password"
            className="w-full"
            {...register('password', { required: true })} // ... nahi lakhite hai to override karega register function ko
          />
          <Button type="submit" className="w-full mt-2 transition-transform duration-200 hover:scale-105">Login</Button>
        </form>
        <p className="mt-6 text-gray-600 animate-fade-in-up">
          Don't have an account?{' '}
          <Link to="/register" className="text-blue-500 hover:underline transition-colors duration-200">
            Register
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Login
