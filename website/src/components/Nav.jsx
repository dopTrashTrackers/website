import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div 
        className="text-2xl p-4 cursor-pointer fixed top-4 left-4 z-10"
        onClick={toggleNavbar}
      >
        ☰
      </div>
      {isOpen && (
        <nav className="fixed top-0 left-0 h-full w-64 bg-gray-800 text-white flex flex-col p-4 z-10">
          <ul className="space-y-4">
            <li><a href="#home" className="hover:bg-gray-600 p-2 rounded">Home</a></li>
            <li><a href="#login" className="hover:bg-gray-600 p-2 rounded">Login</a></li>
            <li><a href="#dashboard" className="hover:bg-gray-600 p-2 rounded">Dashboard</a></li>
            <li><a href="#faq" className="hover:bg-gray-600 p-2 rounded">FAQ</a></li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Navbar;
