import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import authService from '../firebaseMethods/auth';
import { logout } from '../store/authSlice';

function Header() {
  const authStatus = useSelector(state => state.auth.status);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutHandler = () => {
    authService.logout().then(() => {
        dispatch(logout());
    }).then(() => {
        navigate("/");
    })
    .catch((error) => {
        console.error(error);
    });
  }

  return (
    <div>
      <header className="bg-white shadow fixed w-full backdrop:blur-md opacity-80">
        <div className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="hidden w-full text-gray-600 md:flex md:items-center">
              <Link to='/' className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full">Home</Link>
              <Link to='/faq' className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full">FAQ</Link>
              <Link to='/contact' className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full">Contact</Link>
            </div>
            <Link to='/' className="w-full text-gray-700 md:text-center text-2xl font-semibold">
              Post Office
            </Link>
            <div className="flex items-center justify-end w-full">
              { !authStatus && <Link to='/login' className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-1 rounded-md focus:outline-none">Login</Link>}
              { authStatus && <button onClick={()=>logoutHandler()} className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-1 rounded-md focus:outline-none">Logout</button>}
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header