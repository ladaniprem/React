import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button, Input,Logo } from './index'
import { useDispatch } from 'react-redux'
import authServiceInstance from '../appwrite/auth'
import { useForm } from 'react-hook-form'
import { signup as authSignup } from '../features/authSlice'

function Signup() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { register, handleSubmit } = useForm()
    const [error, setError] = useState('')

    const signup = async (data) => {
        setError('')
        console.log('Signup data:', data)
        try {
            const userData = await authServiceInstance.createAccount(data)
            if (userData){
                const userData = await authServiceInstance.getCurrentUser()
                if (userData){
                    dispatch(authSignup(userData))
                    navigate('/')
                }
            }
        } catch (error) {
            setError(error.message)
        }
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 animate-fade-in">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md animate-slide-up">
                <div className="flex justify-center mb-6">
                    <Logo />
                </div>
                <h2 className="text-2xl font-bold text-center mb-4">Sign Up</h2>
                {error && (
                    <div className="mb-4 text-red-600 text-center animate-pulse">
                        {error}
                    </div>
                )}
                <form onSubmit={handleSubmit(signup)} className="space-y-4">
                    <Input
                        label="Name"
                        type="text"
                        placeholder="Enter your name"
                        {...register("name", { required: true,
                            validate: {
                                matchPattern: (value) =>
                                    /^[a-zA-Z\s]+$/.test(value) || 'Name must contain only letters and spaces',
                            }
                         })}
                        
                    />
                    <Input
                        label="Email"
                        type="email"
                        placeholder="Enter your email"
                        {...register("email", { required: true })}
                    />
                    <Input
                        label="Password"
                        type="password"
                        placeholder="Enter your password"
                        {...register("password", { required: true, minLength: 6 })}
                    />
                    <Button type="submit" className="w-full animate-bounce-once">
                        Sign Up
                    </Button>
                </form>
                <p className="mt-4 text-center text-gray-600">
                    Already have an account?{" "}
                    <Link to="/login" className="text-blue-500 hover:underline">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default Signup
