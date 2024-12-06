import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


function AuthLayout({ children, authentication }) {

    const navigate = useNavigate();
    const [loader, setLoader] = useState(true);
    const authStatus = useSelector((state)=>state.auth.status);

    useEffect(()=>{
        if(authentication && authentication !== authStatus){
            navigate('/');
        }
        else if(!authentication && authentication !== authStatus){
            navigate('/home');
        }
        setLoader(false); 
    },[authStatus, navigate]);

  return loader ? <h1>Loading...</h1> : <>{children}</>;
}
export default AuthLayout;