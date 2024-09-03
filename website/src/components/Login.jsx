import React, { useState } from 'react';
import authService from '../firebaseMethods/auth';
import { useDispatch } from 'react-redux';
import { login as storeLogin } from '../store/authSlice';
import {Footer, Header} from './index.js';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [error, setError] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const login = async (data) => {
        setError("");
        try {
            const session = await authService.login(data);
            if(session){
                const userData = await authService.getCurrentUser();
                if(userData) dispatch(storeLogin(userData));
                navigate("/");
            }
        } catch (error) {
            setError(error.message);
        }
    };
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return ( 
        <div className='w-full flex flex-col'>
            <Header/>
            <div className="flex w-full items-center justify-center h-screen bg-gradient-to-r from-green-900 via-green-700 to-green-900">
                <div className="bg-white rounded-lg shadow-lg p-8 max-w-sm bg-opacity-30 backdrop-filter backdrop-blur-lg">
                    <h2 className="text-2xl font-bold mb-4">Login</h2>
                    <form>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button
                            type="submit"
                            onClick={(e) => {
                                e.preventDefault();
                                login({ email, password });
                            }}
                            className="w-full bg-green-800 text-white font-bold py-2 px-4 rounded-md hover:bg-green-900"
                        >
                            Sign In
                        </button>
                    </form>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Login;