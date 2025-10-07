import React from 'react';
import Navbar from '../Component/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Component/Footer';

const Mainlayout = () => {
    return (
        // <div>
        //     <Navbar></Navbar>
        //     <Outlet></Outlet>
        //     <Footer></Footer>
        // </div>


        <div className='flex flex-col min-h-screen'>
            <Navbar></Navbar>
            <div className='flex-1'>
                <Outlet/> 
                </div>     
            <Footer></Footer>
        </div>
    );
};

export default Mainlayout;