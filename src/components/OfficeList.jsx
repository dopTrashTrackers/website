import React from 'react'
import { useState, useEffect } from 'react'
import authService from '../firebaseMethods/auth';
import { Link } from 'react-router-dom';
import Loader from './Loader';
import "../styles/global.css";

function OfficeList() {
    const [state, setState] = useState('');
    const [district, setDistrict] = useState('');
    const [pincode, setPincode] = useState('');
    const [postOffficeList, setPostOfficeList] = useState({});
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
    <div className='bg-white backdrop-filter backdrop-blur-lg bg-opacity-30 rounded-lg p-3 w-3/4 mt-2'>
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
        <div className='w-full overflow-y-scroll no-scrollbar relative' style={{maxHeight:"600px"}}>
            <div className='flex justify-between p-2 bg-gray-100 rounded-lg border-gray-300 mb-1 sticky top-0 z-10'>
                <div className='w-1/4 font-medium'>Name</div>
                <div className='flex gap-2 w-1/2'>
                    <div className='w-1/3 font-medium'>Pincode</div>
                    <div className='w-1/3 font-medium'>District</div>
                    <div className='w-1/3 font-medium'>State</div>
                </div>
            </div>
            {
                Object.keys(postOffficeList).length === 0 &&
                (
                    <>
                    <Loader height='40px'/>
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
                        <Link to={`/dashboard/${postOffice.key}`} key={postOffice.key}>
                            <div className='flex justify-between p-2 bg-gray-100 rounded-lg border border-gray-300'>
                                <div className='w-1/4 font-medium'>{postOffice.name}</div>
                                <div className='flex gap-2 w-1/2'>
                                    <div className='w-1/3 font-medium'>{postOffice.pincode}</div>
                                    <div className='w-1/3 font-medium'>{postOffice.district}</div>
                                    <div className='w-1/3 font-medium'>{postOffice.state}</div>
                                </div>
                            </div>
                        </Link>
                    );
                })
            }
        </div>
    </div>
  )
}

export default OfficeList