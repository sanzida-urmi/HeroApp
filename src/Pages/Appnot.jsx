import React from 'react';
import app from '../assets/App.png'
import { NavLink } from 'react-router';

const Appnot = () => {
    return (
        <div className='flex flex-col justify-center mx-auto items-center py-10'>
            <div className='pb-10'>
                <img className=''  src={app} alt="" />
            </div>
            <div>
                <NavLink className='font-semibold bg-amber-400 p-3 rounded-2xl text-3xl' to='/'>Go back home!</NavLink>
            </div>
        </div>
    );
};

export default Appnot;