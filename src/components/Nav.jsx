import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='md:hidden flex-1'>
      <div 
        className="text-2xl w-6 cursor-pointer relative z-10 delay-75"
        onClick={toggleNavbar}
      >
        {isOpen? "X" : "☰"}
      </div>
      {
        <nav className={`${isOpen?"visible":"invisible"} ${isOpen?"opacity-1":"opacity-0"} transition-opacity duration-300 ease-in-out
          fixed top-full left-0 h-max w-64 bg-blue-gray-50 text-gray-700 shadow-lg flex flex-col z-10`}>
          <Link to='/home' onClick={toggleNavbar} className="hover:bg-blue-200 p-2 px-4">Home</Link>
          <Link to='/home' className="hover:bg-blue-200 p-2 px-4"
          onClick={() => {
            toggleNavbar();
            const anchor = document.querySelector('#faq');
            if(anchor) anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }}
          >FAQ</Link>
          <Link to='/home/register' onClick={toggleNavbar} className="hover:bg-blue-200 p-2 px-4">Register</Link>
        </nav>
      }
    </div>
  );
};

export default Navbar;
