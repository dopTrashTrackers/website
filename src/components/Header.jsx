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
    <header className="bg-white/30 shadow w-full sticky top-0 z-50 backdrop-blur-xl">
      <div className="container px-0 py-3">
        <div className="flex items-center w-full justify-between">
          <div className="hidden w-full text-lg text-gray-600 px-24 md:flex md:items-center gap-1">
            <Link to='/home' className="inline-block px-6 py-2 duration-200 hover:bg-blue-200 hover:text-white rounded-full cursor-pointer">Home</Link>
            <div className="inline-block px-6 py-2 duration-200 hover:bg-blue-200 hover:text-white rounded-full cursor-pointer"
            onClick={() => {
              navigate('/home');
              const anchor = document.querySelector('#faq');
              anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }}
            >FAQ</div>
            <Link to='/register' className="inline-block px-6 py-2 duration-200 hover:bg-blue-200 hover:text-white rounded-full cursor-pointer">Register</Link>
          </div>
          <Link to='/home' className="w-full text-gray-700 flex items-center justify-center md:text-center text-2xl font-semibold cursor-pointer">
            <img src="../../India2.png" alt="" className='h-10' />
          </Link>
          <div className="flex items-center justify-end w-full">
            { !authStatus && <Link to='/' className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-1 rounded-md focus:outline-none cursor-pointer">Login</Link>}
            { authStatus && <button onClick={()=>logoutHandler()} className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-1 rounded-md focus:outline-none cursor-pointer">Logout</button>}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header