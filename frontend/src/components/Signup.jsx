import React from 'react';

const RegisterUser = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gradient-to-r from-green-900 via-green-700 to-green-900">
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-sm bg-opacity-30 backdrop-filter backdrop-blur-lg">
                <h2 className="text-2xl font-bold mb-4">Register User</h2>
                <form>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                            placeholder="Enter email of user"
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
                            placeholder="Enter password"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-green-800 text-white font-bold py-2 px-4 rounded-md hover:bg-green-900"
                    >
                        Register User
                    </button>
                </form>
            </div>
        </div>
    );
};

export default RegisterUser;