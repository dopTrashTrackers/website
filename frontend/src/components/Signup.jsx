import React, { useRef, useState, useEffect } from 'react';
import authService from '../firebaseMethods/auth.js';
import { useDispatch } from 'react-redux';
import { login as storeLogin } from '../store/authSlice.js';
import { useNavigate } from 'react-router-dom';
import "../styles/login.css";
import { Link } from 'react-router-dom';

const Signup = () => {
    const [error, setError] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const formRef = useRef();
    const signup = async (data) => {
        setError("");
        try {
            const session = await authService.createAccount(data);
            if(session){
                const userData = await authService.getCurrentUser();
                if(userData) dispatch(storeLogin(userData));
                navigate("/home");
            }
            else{
                setError("Signup failed");
                setLoading(false);
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
        <div
            className="wrapper"
        >
            <div className="left">
                <div className="logo">
                    CLEAN VISION
                </div>
            </div>
            <div className="right bg-blue-50">
                <p className="text">
                    Sign up <em>now</em> to get started.
                </p>
                <form ref={formRef}>
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
                            <label htmlFor="email">EMAIL<span style={{color:'red', fontSize: '1.25em'}}>*</span></label>
                            <input type="email" id="email" name="email" maxLength="50"
                            style={{ borderColor: email.length === 0 ? "rgb(192, 190, 190)" : undefined }}
                            placeholder="Enter your email"
                            required={true}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            />  
                        </div>
                        <div id="line">
                            <label htmlFor="password">PASSWORD<span style={{color:'red', fontSize: '1.25em'}}>*</span></label>
                            <input type="password" id="password" name="password" maxLength="20"
                                style={{ borderColor: password.length === 0 ? "rgb(192, 190, 190)" : undefined }}
                                placeholder="Enter your password"
                                required={true}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div id="line">
                            {error && <p style={{color: 'red', fontSize: '1.25em'}}>* {error}</p>}
                        </div>
                    </div>
                    <button
                        type='submit'
                        onClick={(e) => {
                            if(formRef.current.reportValidity() === false) return;
                            e.preventDefault();
                            setLoading(true);
                            signup({ email, password });
                        }}
                        className="flex justify-center gap-3 text-white"
                    >{loading && <img width="24" className='spin' height="24" src="../../loading.svg" alt="progress-indicator"/>}
                    {loading==false ? " Sign Up" : "Loading..."}</button>
                </form>
                <div className="signup-link pl-7 -mt-2">
                    Already have an account? <Link to="/" className='text-green-900'>Sign in</Link>
                </div>
            </div>
    </div>
    </>
    );
};

export default Signup;
