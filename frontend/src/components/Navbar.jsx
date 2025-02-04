import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoReorderThreeOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
//console.log(MobileNav);
const Navbar = () => {
const [MobileNav,setMobileNav,closeMobileNav]=useState(false);

    const navLinks=[
    {
        name:"HOME",
        path:"/",
    },
    {
        name:"CATEGORIES",
        path:"/categories",
    },
    {
        name:"ALL PODCASTS",
        path:"/all-Podcasts",
    },
    {
        name:"PROFILE",
        path:"/profile",
    },
   
];
  return (
    <nav className='px-2 md:px-8 lg:px-4 py-2 relative'>
        <div className='flex items-center justify-between'>
        <div className='logo brand-name w-2/6 flex items-center '>
        <img 
        src="https://cdn-icons-png.flaticon.com/512/5077/5077327.png"
        alt=''
        className='px-3 h-14'
        />
            <Link to="/" className='text-2xl font-bold px-2' >
            PODCASTER
            </Link>
        </div>
        <div className='hidden w-2/6 lg:flex items-center justify-center'>
        {navLinks.map((items,i)=>(
            <Link key={i} to={items.path} className='px-4 ms-4  hover:text-teal-500 transition-all duration-300'>
                {items.name}
            </Link>
        ))}</div>
        <div className='hidden w-2/6 lg:flex  items-center justify-end'>
        <Link to="/login" className='px-6 py-3 border border-teal-400 rounded-full hover:bg-teal-200 transition-all duration-300'>
        LOGIN
        </Link>
        <Link to="/signup" className='ms-4 px-6 py-3 bg-teal-400 hover:bg-teal-200 border border-teal-200 hover:border-teal-600 rounded-full text-black transition-all duration-300'>
        SIGNUP
        </Link>
        </div>
        <div className='w-4/6 flex items-center justify-end lg:hidden z-50'>
        <button className={`text-4xl transform ${
            MobileNav ? "rotate-[360deg]" : "rotate-180"
        }transition-all duration-300`}
        onClick={() => setMobileNav(!MobileNav)}>
           {MobileNav ? <RxCross2 /> : <IoReorderThreeOutline />} 
        </button>
        </div>
        </div>

        <div 
        className={`fixed top-0 left-0 w-full h-screen bg-blue-100 ${
            MobileNav ? "translate-y-0" : "translate-y-[-100%]"
        } transition-transform duration-500 ease-in-out `}
        >
           
        <div className='h-full flex flex-col items-center justify-center'>
            {" "}
            {navLinks.map((items,i)=>(
            <Link key={i} 
             to={items.path} 
             className='mb-8 text-2xl hover:font-semibold transition-all duration-300'
             onClick={closeMobileNav}
            >
                {items.name}
            </Link>
        ))}

            <Link 
             to="/login" 
             className='mb-8 text-2xl hover:font-semibold transition-all duration-300'
            >
               Login
            </Link>
            <Link 
             to="/signup" 
             className='mb-8 text-2xl hover:font-semibold transition-all duration-300'
            >
               Signup
            </Link>
        </div>
        </div>
    </nav>
  )
}

export default Navbar
