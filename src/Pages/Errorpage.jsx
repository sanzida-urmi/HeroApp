import React from 'react';
import { NavLink } from 'react-router';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import errorimg from '../assets/errorimg.png'

const Errorpage = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar></Navbar>
        <div className='py-3 space-y-2 flex-1'>
            <img className='mx-auto ' src={errorimg} alt="" />
            <h1 className='font-bold text-4xl text-center'>Oops, page not found!</h1>
            <p className='text-sm text-center text-[#627382]'>The page you are looking for is not available.</p>

             <div className='text-center mb-12'>
                <NavLink to='/' className='px-4 py-2 bg-purple-500 rounded' >Go Back!</NavLink>
            </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Errorpage;