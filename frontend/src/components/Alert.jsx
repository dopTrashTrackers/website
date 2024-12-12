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
                body: 'Garbage detected in the post office premises. Please take immediate action to maintain cleanliness. Plastic: 1 Organic: 2 Food Waste: 5',
                phone: '+916386909300'
              }),
            });
            if(response.status === 200){
              alert('Alert generated successfully');
            }
            else{
              alert('Error generating alert');
            }
          }}  
          className="w-full p-24 rounded-lg mb-12"
        >
        </button>
      </div>
    </>
  );
};

export default AlertSystem;
