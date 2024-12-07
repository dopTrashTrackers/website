import React, { useState, useRef } from 'react';

const AlertSystem = () => {

  return (
    <>
      <div className='flex justify-center'>
        <button
          onClick={async ()=> {
            const response = await fetch('http://localhost:3000/alert', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                email: 'sihbgp2024@gmail.com',
                subject: 'Garbage Alert',
                body: 'Garbage is overflowing in your area. Please take necessary action.',
              }),
            });
            if(response.status === 200){
              alert('Alert generated successfully');
            }
            else{
              alert('Error generating alert');
            }
          }}  
          className="bg-green-200 text-black w-40 p-2 rounded-lg mb-12 hover:bg-green-700"
        >
          Generate Alert !!
        </button>
      </div>
    </>
  );
};

export default AlertSystem;
