import React, { useState, useEffect } from 'react';
import authService from '../firebaseMethods/auth';
import { useNavigate } from 'react-router-dom';
import Loader from './Loader';
import "../styles/global.css";

function OfficeList() {
    const [state, setState] = useState('');
    const [district, setDistrict] = useState('');
    const [pincode, setPincode] = useState('');
    const [postOffficeList, setPostOfficeList] = useState({});
    const [sortOrder, setSortOrder] = useState('ascending'); // State for sorting order
    const navigate = useNavigate();

    useEffect(() => {
        authService.getData('postOffices').then((data) => {
            if (data) {
                setPostOfficeList(data);
            }
        });
    }, []);

    // Sorting function based on compliance score
    const sortedPostOffices = Object.keys(postOffficeList).sort((a, b) => {
        const compliantA = postOffficeList[a]?.compliant || 0;
        const compliantB = postOffficeList[b]?.compliant || 0;

        if (sortOrder === 'ascending') {
            return compliantA - compliantB;
        } else {
            return compliantB - compliantA;
        }
    });

    // Handle sort order change
    const handleSortChange = (order) => {
        setSortOrder(order);
    };

    useEffect(() => {
        console.log("list", postOffficeList);
    }, [postOffficeList]);

    return (
        <div className='bg-white backdrop-filter backdrop-blur-lg bg-opacity-30 rounded-lg p-6 w-11/12 md:w-3/4 mt-2 shadow-lg'>
            <div className='flex gap-2 w-full mb-4'>
                <div className="w-1/3">
                    <input
                        type="text"
                        id="state"
                        className="w-full invisible sm:visible px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                        placeholder="Search by state"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                    />
                    <input
                        type="text"
                        id="state"
                        className="w-full sm:hidden px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                        placeholder="State"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                    />
                </div>
                <div className="w-1/3">
                    <input
                        type="text"
                        id="district"
                        className="w-full invisible sm:visible px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                        placeholder="Search by district"
                        value={district}
                        onChange={(e) => setDistrict(e.target.value)}
                    />
                    <input
                        type="text"
                        id="district"
                        className="w-full sm:hidden px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                        placeholder="District"
                        value={district}
                        onChange={(e) => setDistrict(e.target.value)}
                    />
                </div>
                <div className="w-1/3">
                    <input
                        type="text"
                        id="pincode"
                        className="w-full invisible sm:visible px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                        placeholder="Search by pin code"
                        value={pincode}
                        onChange={(e) => setPincode(e.target.value)}
                    />
                    <input
                        type="text"
                        id="pincode"
                        className="w-full sm:hidden px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                        placeholder="PinCode"
                        value={pincode}
                        onChange={(e) => setPincode(e.target.value)}
                    />
                </div>
            </div>

            {/* Sort Button and Dropdown */}
            <div className="flex justify-end mb-4">
            <button
    className="sort-button px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-200"
    onClick={() => handleSortChange(sortOrder === 'ascending' ? 'descending' : 'ascending')}
>
    Sort by Compliance ({sortOrder === 'ascending' ? 'Worst to Best' : 'Best to Worst'})
</button>

            </div>

            <div className='  w-full overflow-y-scroll no-scrollbar relative rounded-lg' style={{maxHeight:"600px"}}>
                <table className="w-full text-sm text-left rtl:text-right text-gray-700 dark:text-gray-400">
                    <thead className=" text-xs text-gray-900 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">Serial No.</th>
                            <th scope="col" className="px-6 py-3">Name</th>
                            <th scope="col" className="px-6 py-3">Pincode</th>
                            <th scope="col" className="px-6 py-3">District</th>
                            <th scope="col" className="px-6 py-3">State</th>
                            <th scope="col" className="px-6 py-3">Compliance</th>
                        </tr>
                    </thead>
                    <tbody>            
                        {
                            sortedPostOffices.map((postOfficeKey, index) => {
                                const postOffice = postOffficeList[postOfficeKey];
                                return (
                                    (
                                        (state === '' && district === '' && pincode === '') ||
                                        (state && postOffice.state.toLowerCase().includes(state.toLowerCase())) ||
                                        (district && postOffice.district.toLowerCase().includes(district.toLowerCase())) ||
                                        (pincode && postOffice.pincode.toLowerCase().includes(pincode.toLowerCase()))
                                    )
                                    &&
                                    <tr key={postOffice.key} className=" officelistcard bg-white border-b dark:bg-gray-800 dark:border-gray-700
                                        hover:bg-gray-50 dark:hover:bg-gray-600 cursor-pointer"
                                        onClick={() => navigate('/home/dashboard/${postOffice.key}')}
                                    >
                                        <td className="px-6 py-4">{index + 1}</td> {/* Serial No. */}
                                        <td className="px-6 py-4">{postOffice.name}</td>
                                        <td className="px-6 py-4">{postOffice.pincode}</td>
                                        <td className="px-6 py-4">{postOffice.district}</td>
                                        <td className="px-6 py-4">{postOffice.state}</td>
                                        <td className="px-6 py-4">{postOffice.compliant}</td> {/* Compliance */}
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
                            <Loader height='50px'/>
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default OfficeList;