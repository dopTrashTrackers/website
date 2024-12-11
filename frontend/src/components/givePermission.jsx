import React, { useState } from 'react';
import auth from '../firebaseMethods/auth';

const GivePermission = () => {
    const [user, setUser] = useState('');
    const [permission, setPermission] = useState('');

    const handleUserChange = (e) => {
        setUser(e.target.value);
    };

    const handlePermissionChange = (e) => {
        setPermission(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await auth.setAdminPermission({email: user, permission: permission});
        console.log(response);
        setUser('');
        setPermission('');
    };

    return (
        <div className="max-w-md mx-auto m-10 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-center">Give Permission</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        User:
                        <input 
                            type="text" 
                            value={user} 
                            onChange={handleUserChange} 
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </label>
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Permission:
                        <select 
                            value={permission} 
                            onChange={handlePermissionChange} 
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                            <option value="">Select Permission</option>
                            <option value="admin">Admin</option>
                            <option value="superAdmin">Super Admin</option>
                        </select>
                    </label>
                </div>
                <button 
                    type="submit" 
                    className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Give Permission
                </button>
            </form>
        </div>
    );
};

export default GivePermission;