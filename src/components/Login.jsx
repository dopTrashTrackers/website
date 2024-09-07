import React, { useState } from 'react';
import authService from '../firebaseMethods/auth.js';
import { useDispatch } from 'react-redux';
import { login as storeLogin } from '../store/authSlice.js';
import { useNavigate } from 'react-router-dom';
import "../styles/login.css";

const Login = () => {
    const [error, setError] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const login = async (data) => {
        setError("");
        try {
            const session = await authService.login(data);
            if(session){
                const userData = await authService.getCurrentUser();
                if(userData) dispatch(storeLogin(userData));
                navigate("/home");
            }
        } catch (error) {
            setLoading(false);
            setError(error.message);
        }
    };
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return ( 
        <>
        <div style={{display: "flex", width: "100%", height: "100vh", margin: "0px"}}
            className="absolute inset-0 z-50"
        >
            <div className="left">
                <div className="logo">
                    CLEAN VISION
                </div>
            </div>
            <div className="right bg-blue-50">
                <p className="text">
                    Login to access full features of our website.
                    <br/>
                    Login in <em>now</em> to get started.
                    <br/><br/>
                </p>
                <form>
                    <div id="form">
                        <div id="line">
                            <label htmlFor="firstn">FIRST NAME</label>
                            <input type="text" id="firstn" name="firstName" maxLength="20"
                            placeholder='Enter your first name'
                            />
                        </div>
                        <div id="line">
                            <label htmlFor="lastn">LAST NAME</label>
                            <input type="text" id="lastn" name="lastName" maxLength="20"
                            placeholder='Enter your last name'
                            />
                        </div>
                        <div id="line">
                            <label htmlFor="email">EMAIL</label>
                            <input type="email" id="email" name="email" maxLength="50"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            />  
                        </div>
                        <div id="line">
                            <label htmlFor="password">PASSWORD</label>
                            <input type="password" id="password" name="password" maxLength="20"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            </div>
                    </div>
                    <button
                        type='submit'
                        onClick={(e) => {
                            e.preventDefault();
                            setLoading(true);
                            login({ email, password });
                        }}
                        className="flex justify-center gap-3 text-white"
                    >{loading && <img width="24" className='spin' style={{color:'white'}} height="24" src="../../public/loading.svg" alt="progress-indicator"/>}
                    {loading==false ? " Log In" : "Loading..."}</button>
                </form>
            </div>
    </div>
    </>
    );
};

export default Login;