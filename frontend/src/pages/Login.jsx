import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from 'react-redux';
import {authActions} from "../store/auth";
import ErrorPage from './ErrorPage';

const Login = () => {
    const isLoggedIn= useSelector((state)=>state.auth.isLoggedIn);
    const dispatch=useDispatch();
    const navigate= useNavigate();
  const[Values,setValues]=useState({
    
    email:"",
    password:""
});

const change= (e) =>{
    const{name,value}=e.target;
    setValues({ ...Values,[name]:value});
};
const handleSubmit=async () => {
    try {
      const res=await axios.post(
        "http://localhost:1000/api/v1/sign-in",
        Values,
        {withCredentials: true });
        dispatch(authActions.login());
        //console.log(res.data);
        toast.success(res.data.message);
        navigate("/profile");
    } catch (error) {
        toast.error(error.response.data.message);
       
    }
};
  return (
    <>{isLoggedIn ? <ErrorPage/> :<div className='h-screen bg-violet-200 flex items-center justify-center'>
        <ToastContainer position="top-center" draggable />
        <div className='w-4/6 md:w-3/6 lg:w-2/6  flex flex-col items-center justify-center'>
        <Link to="/" className='text-2xl font-semibold '>
        PODCASTER
        </Link>
        <div className='mt-6 w-full'>
            
            <div className='w-full flex flex-col mt-2'>
                <label htmlFor=''>Email</label>
                <input 
                type='email' 
                className='mt-2 px-2 py-2 rounded outline-none border border-black' 
                required
                placeholder='Email'
                name='email'
                value={Values.email}
                onChange={change}/>
            </div>
            <div className='w-full flex flex-col mt-2'>
                <label htmlFor=''>Password</label>
                <input 
                type='password' 
                className='mt-2 px-2 py-2 rounded outline-none border border-black' 
                required
                placeholder='Password'
                name='password'
                value={Values.password}
                onChange={change}/>
            </div>
            <div className='w-full flex flex-col mt-2'>
                <button className='px-12 lg:px-6 bg-teal-600 hover:bg-teal-200 hover:text-black  border hover:border-teal-600 text-white  mt-4 transition-all duration-300 rounded py-2' 
                onClick={handleSubmit}>LOGIN</button>
            </div>
            <div className='w-full flex flex-col mt-2'>
                <p className='text-center'>
                    Don't have an account?{" "}
                    <Link to="/signup" className=' px-2 font-semibold hover:text-teal-700'>SIGNUP</Link></p>
            </div>

        </div>
        </div>
    </div>}</>
    
  )
}

export default Login