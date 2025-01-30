import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import authService from "../firebaseMethods/auth.js"
import { login, logout } from "../store/authSlice.js"


function AuthLayout({ children, authentication }) {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [loader, setLoader] = useState(true);
    let authStatus = false;

    useEffect(()=>{
        setTimeout(async ()=>{
            const userData = await authService.getCurrentUser();
            if(userData){
                dispatch(login(userData));
                authStatus = true;
              }
              else{
                dispatch(logout());
            }
    
            if(authentication && authentication !== authStatus){
                navigate('/');
            }
            else if(!authentication && authentication !== authStatus){
                navigate('/home');
            }
            setLoader(false);
        }, 1000); //works on 700 too but 1000 to be safe
    },[navigate]);

  return loader ? <h1>Loading...</h1> : <>{children}</>; //TODO: Add a loader here
}
export default AuthLayout;