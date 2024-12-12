import React, { useState, useEffect } from 'react';
import authService from '../firebaseMethods/auth';
import { useNavigate } from 'react-router-dom';
import Loader from './Loader';
import "../styles/global.css";

function OfficeList() {
    const [postalDivision, setPostalDivision] = useState('');
    const [postalRegion, setPostalRegion] = useState('');
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
        authService.getData('postOffices').then((data) => {
            if (data) {
                setPostOfficeList(data);
            }
        });
    }, []);

    // Filter and sort post offices
    const filteredAndSortedPostOffices = Object.keys(postOfficeList)
        .filter((postOfficeKey) => {
            const postOffice = postOfficeList[postOfficeKey] || {};
            const { postal_div = '', postal_reg = '', pincode: officePincode = '' } = postOffice;

            return (
                (postalDivision === '' || postal_div.toLowerCase().includes(postalDivision.toLowerCase())) &&
                (postalRegion === '' || postal_reg.toLowerCase().includes(postalRegion.toLowerCase())) &&
                (pincode === '' || officePincode.toString().includes(pincode))
            );
        })
        .sort((a, b) => {
            const compliantA = postOfficeList[a]?.compliant || 0;
            const compliantB = postOfficeList[b]?.compliant || 0;

            return sortOrder === 'ascending' ? compliantA - compliantB : compliantB - compliantA;
        });

    return (
        <div className='bg-white backdrop-filter backdrop-blur-lg bg-opacity-30 rounded-lg p-6 w-11/12 md:w-3/4 mt-2 shadow-lg'>
            <div className='flex gap-2 w-full mb-4'>
                <div className="w-1/3">
                    <input
                        type="text"
                        id="postalDivision"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                        placeholder="Search by Postal Division"
                        value={postalDivision}
                        onChange={(e) => setPostalDivision(e.target.value)}
                    />
                </div>
                <div className="w-1/3">
                    <input
                        type="text"
                        id="postalRegion"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                        placeholder="Search by Postal Region"
                        value={postalRegion}
                        onChange={(e) => setPostalRegion(e.target.value)}
                    />
                </div>
                <div className="w-1/3">
                    <input
                        type="text"
                        id="pincode"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                        placeholder="Search by Pin Code"
                        value={pincode}
                        onChange={(e) => setPincode(e.target.value)}
                    />
                </div>
            </div>

            {/* Sort Button and Dropdown */}
            <div className="flex justify-end mb-4">
                <button
                    className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-200"
                    onClick={() => handleSortChange(sortOrder === 'ascending' ? 'descending' : 'ascending')}
                >
                    Sort by Compliance ({sortOrder === 'ascending' ? 'Worst to Best' : 'Best to Worst'})
                </button>
            </div>

            <div className='w-full overflow-y-scroll no-scrollbar relative rounded-lg' style={{ maxHeight: "600px" }}>
                <table className="w-full text-sm text-left rtl:text-right text-gray-700 dark:text-gray-400">
                    <thead className="text-xs text-gray-900 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">Serial No.</th>
                            <th scope="col" className="px-6 py-3">Name</th>
                            <th scope="col" className="px-6 py-3">Pincode</th>
                            <th scope="col" className="px-6 py-3">Postal Division</th>
                            <th scope="col" className="px-6 py-3">Postal Region</th>
                            <th scope="col" className="px-6 py-3">Compliance</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            filteredAndSortedPostOffices.map((postOfficeKey, index) => {
                                const postOffice = postOfficeList[postOfficeKey] || {};
                                const { postal_div = '', postal_reg = '', pincode = '', address = '', compliant = 0 } = postOffice;

                                return (
                                    <tr key={postOfficeKey} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 cursor-pointer" onClick={() => navigate(`/home/dashboard/${postOfficeKey}`)}>
                                        <td className="px-6 py-4">{index + 1}</td>
                                        <td className="px-6 py-4">{address}</td>
                                        <td className="px-6 py-4">{pincode}</td>
                                        <td className="px-6 py-4">{postal_div}</td>
                                        <td className="px-6 py-4">{postal_reg}</td>
                                        <td className="px-6 py-4">{compliant}</td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>


                <div className="w-full text-sm text-left rtl:text-right text-gray-700 dark:text-gray-400">
                    {
                        Object.keys(postOfficeList).length === 0 && <Loader height='50px' />
                    }
                </div>
            </div>
        </div>
    );
}

export default OfficeList;