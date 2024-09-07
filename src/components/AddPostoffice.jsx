import React, { useState, useEffect } from 'react';
import authService from '../firebaseMethods/auth.js';

const AddPostoffice = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    },[]);

    const [pincode, setPincode] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [district, setDistrict] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            pincode,
            name,
            address,
            district,
            city,
            state,
            email,
            phone,
        };
        authService.putData('postOffices', data);

        setPincode('');
        setName('');
        setAddress('');
        setDistrict('');
        setCity('');
        setState('');
        setEmail('');
        setPhone('');
    };

    return (
    <div className='flex flex-col w-full'>
        <div className="container mx-auto mt-20 mb-10">
            <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-8 shadow-md rounded-md">
                <h2 className="text-2xl font-bold mb-6">Register Post Office</h2>
                <div className="mb-4">
                    <label htmlFor="pincode" className="block text-gray-700 font-bold mb-2">Pincode</label>
                    <input
                        type="text"
                        id="pincode"
                        value={pincode}
                        onChange={(e) => setPincode(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="address" className="block text-gray-700 font-bold mb-2">Address</label>
                    <input
                        type="text"
                        id="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="district" className="block text-gray-700 font-bold mb-2">District</label>
                    <input
                        type="text"
                        id="district"
                        value={district}
                        onChange={(e) => setDistrict(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="city" className="block text-gray-700 font-bold mb-2">City</label>
                    <input
                        type="text"
                        id="city"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="state" className="block text-gray-700 font-bold mb-2">State</label>
                    <input
                        type="text"
                        id="state"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="state" className="block text-gray-700 font-bold mb-2">Email</label>
                    <input
                        type="email"
                        id="state"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="state" className="block text-gray-700 font-bold mb-2">Phone Number</label>
                    <input
                        type="number"
                        maxLength={10}
                        id="state"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Submit</button>
            </form>
        </div>
    </div>
    );
};

export default AddPostoffice;