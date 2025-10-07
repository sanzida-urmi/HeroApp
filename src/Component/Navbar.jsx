import React from 'react';
import { Link, NavLink } from 'react-router';
import gitlogo from '../assets/gitlogo.png';
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <li className='font-semibold'>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li className='font-semibold'>
              <NavLink to='/app'>Apps</NavLink>
            </li>
            <li className='font-semibold'>
              <NavLink to='/installation'>Installation</NavLink>
            </li>
          </ul>
        </div>
        <NavLink to='/' className="btn btn-ghost text-xl ">
          <img className='w-10 h-10' src={logo} alt="" />
          <span className='text-[#9f62f2]'>HERO.IO</span>
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className='font-semibold'>
            <NavLink
             className={({ isActive }) =>
              `font-semibold px-3 py-2 ${isActive
                ? "text-[#9f62f2] border-b-2 border-[#9f62f2]"
                : "text-gray-700 hover:text-[#9f62f2]"
              }`
            } 
            to='/'>Home</NavLink>
          </li>
          <li className='font-semibold'>
            <NavLink
             className={({ isActive }) =>
              `font-semibold px-3 py-2 ${isActive
                ? "text-[#9f62f2] border-b-2 border-[#9f62f2]"
                : "text-gray-700 hover:text-[#9f62f2]"
              }`
            } 
            to='/app'>Apps</NavLink>
          </li>
          <li className='font-semibold'>
            <NavLink

             className={({ isActive }) =>
              `font-semibold px-3 py-2 ${isActive
                ? "text-[#9f62f2] border-b-2 border-[#9f62f2]"
                : "text-gray-700 hover:text-[#9f62f2]"
              }`
            } 

            //  className={({isActive}) => `
            //  font-semibold px-3 py-2 ${isActive}?
            //  "text-[#9f62f2] border-b-2 border-[#9f62f2]"
            //  : "text-gray-700 hover:text-[#9f62f2]"
            //  `}
              to='/installation'>Installation</NavLink>
          </li>

        </ul>
      </div>

      {/* bg-gradient-to-r from-[#632ee3] t0-[#9f62f2]  */}

      <div className="navbar-end ">
        <a className="bg-[#9f62f2] gap-2  px-5 py-3 rounded flex" href='https://github.com/sanzida-urmi'>
          <img src={gitlogo} alt="" />
          <span className='text-white font-semibold'>Contribute</span>
        </a>
      </div>
    </div>
  );
};

export default Navbar;