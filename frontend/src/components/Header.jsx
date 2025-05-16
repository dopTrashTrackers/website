import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import authService from "../firebaseMethods/auth";
import { logout } from "../store/authSlice";
import Nav from "./Nav";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const [isSuperAdmin, setIsSuperAdmin] = useState(false);
  const [isUser, setIsUser] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    authService
      .curUserType()
      .then((type) => {
        if (type === "superAdmin") {
          setIsSuperAdmin(true);
        }
        else if (type === "user") {
          setIsUser(true);
        }
        else if (type === "admin") {
          setIsAdmin(true);
        }
      })
      .catch((error) => {
        console.error("Error fetching user type:", error);
      });
  }, []);

  const logoutHandler = () => {
    authService
      .logout()
      .then(() => {
        dispatch(logout());
        navigate("/");
      })
      .catch((error) => {
        console.error("Error during logout:", error);
      });
  };
  const {slug} = useParams();

  return (
    <header
      className="bg-white/30 shadow w-full sticky top-0 z-50 backdrop-blur-xl px-10 py-3 flex items-center justify-between gap-2"
    >
      <Nav />

      <div className="hidden md:flex md:flex-1 md:items-center gap-4 text-lg text-gray-700 nav-links">
        <Link
          to="/home"
          className="px-6 py-2 rounded-full hover:bg-blue-200 hover:text-white duration-200 cursor-pointer"
        >
          Home
        </Link>
        <Link
          to="/home"
          className="px-6 py-2 rounded-full hover:bg-blue-200 hover:text-white duration-200 cursor-pointer faq-link"
          onClick={() => {
            const anchor = document.querySelector("#faq");
            if (anchor) anchor.scrollIntoView({ behavior: "smooth", block: "center" });
          }}
        >
          FAQ
        </Link>
        {(isAdmin || isSuperAdmin) && <Link
          to="/home/register"
          className="px-6 py-2 rounded-full hover:bg-blue-200 hover:text-white duration-200 cursor-pointer register-link"
        >
          Register
        </Link>}
        {isSuperAdmin && (
          <Link
            to="/home/permission"
            className="px-6 py-2 rounded-full hover:bg-blue-200 hover:text-white duration-200 cursor-pointer add-admin-link"
          >
            Add_Admin
          </Link>
        )}
        {isUser && (
          <Link
            to="/home/raise-complaint"
            className="px-6 py-2 rounded-full hover:bg-blue-200 hover:text-white duration-200 cursor-pointer office-link"
          >
            Raise_Complaint
          </Link>
        )}
        {window.location.pathname.startsWith("/home/dashboard/") && (
          <Link
            to={`/home/dashboard/${slug}/new-cam`}
            className="px-6 py-2 rounded-full hover:bg-blue-200 hover:text-white duration-200 cursor-pointer office-link"
          >
            New_Camera
          </Link>
        )}
      </div>

      {/* <Link
        to="/home"
        className="flex-1 text-gray-700 flex items-center justify-center text-2xl font-semibold cursor-pointer header-logo h-10"
      >

      </Link>
      <img src="../../India1.png" alt="Website Logo" className="h-10" /> */}

      <div className="flex items-center justify-end w-full">
        {!authStatus ? (
          <Link
            to="/"
            className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-1 rounded-md focus:outline-none cursor-pointer"
          >
            Login
          </Link>
        ) : (
          <button
            onClick={logoutHandler}
            className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-1 rounded-md focus:outline-none cursor-pointer logout-button"
          >
            Logout
          </button>
        )}
      </div>
    </header>
  );
}

export default Header;