import React from 'react'
import { useState, useEffect } from 'react'
import authService from '../firebaseMethods/auth';
import { useNavigate } from 'react-router-dom';
import Loader from './Loader';
import "../styles/global.css";

function OfficeList() {
    const [state, setState] = useState('');
    const [district, setDistrict] = useState('');
    const [pincode, setPincode] = useState('');
    const [postOffficeList, setPostOfficeList] = useState({});
    const navigate = useNavigate();
    useEffect(() => {
        authService.getData('postOffices').then(
        (data) => {
            if(data) setPostOfficeList(data);
        })
    },[]);
    useEffect(()=>{
        console.log("list",postOffficeList);
    },[postOffficeList]);
    
return (
    <div className='bg-white backdrop-filter backdrop-blur-lg bg-opacity-30 rounded-lg p-6 w-3/4 mt-2 shadow-lg'>
        <div className='flex gap-2 w-full mb-4'>
            <div className="w-1/3">
                <input
                    type="text"
                    id="state"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                    placeholder="Search by state"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                />
            </div>
            <div className="w-1/3">
                <input
                    type="text"
                    id="district"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                    placeholder="Search by district"
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
                />
            </div>
            <div className="w-1/3">
                <input
                    type="text"
                    id="pincode"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                    placeholder="Search by pin code"
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                />
            </div>
        </div>
        <div className='w-full overflow-y-scroll no-scrollbar relative rounded-lg' style={{maxHeight:"600px"}}>
            <table className="w-full text-sm text-left rtl:text-right text-gray-700 dark:text-gray-400">
                <thead className="text-xs text-gray-900 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                        Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                        Pincode
                        </th>
                        <th scope="col" className="px-6 py-3">
                        District
                        </th>
                        <th scope="col" className="px-6 py-3">
                        State
                        </th>
                    </tr>
                </thead>
                <tbody>            
                    {
                        Object.keys(postOffficeList).map((postOfficeKey) => {
                            const postOffice = postOffficeList[postOfficeKey];
                            return (
                                (
                                    (state === '' && district === '' && pincode === '') ||
                                    (state && postOffice.state.toLowerCase().includes(state.toLowerCase())) ||
                                    (district && postOffice.district.toLowerCase().includes(district.toLowerCase())) ||
                                    (pincode && postOffice.pincode.toLowerCase().includes(pincode.toLowerCase()))
                                )
                                &&
                                <tr key={postOffice.key} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700
                                    hover:bg-gray-50 dark:hover:bg-gray-600 cursor-pointer"
                                    onClick={() => navigate(`/dashboard/${postOffice.key}`)}
                                >
                                    <td className="px-6 py-4">{postOffice.name}</td>
                                    <td className="px-6 py-4">{postOffice.pincode}</td>
                                    <td className="px-6 py-4">{postOffice.district}</td>
                                    <td className="px-6 py-4">{postOffice.state}</td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>

            <div className="w-full text-sm text-left rtl:text-right text-gray-700 dark:text-gray-400">
                {
                    Object.keys(postOffficeList).length === 0 &&
                    (
                        <>
                            <Loader height='50px'/>
                            <Loader height='50px'/>
                            <Loader height='50px'/>
                            <Loader height='50px'/>
                            <Loader height='40px'/>
                            <Loader height='40px'/>
                            <Loader height='40px'/>
                            <Loader height='40px'/>
                            <Loader height='40px'/>
                            <Loader height='40px'/>
                            <Loader height='40px'/>
                        </>
                    )
                }
            </div>
        </div>
    </div>
)
}

export default OfficeList