import React from 'react';
import hero from '../assets/hero.png'
import app from '../assets/appstore.png'
import play from '../assets/playstore.png'
import { NavLink } from 'react-router';
import useData from '../hooks/useData';
import Data from '../Component/Data';
import logo from '../assets/logo.png';


const Home = () => {
        const {data, loading, error} = useData();
            const featuredata = data.slice(0,8)
// console.log(featuredata);

if(loading){
    return (
        <div className='flex justify-center items-center h-screen'>
            <img className='animate-spin h-50 w-50' src={logo} alt="" />
        </div>

    )
}

    return (
        <div className='space-y-6'>
            <h1 className='pt-10 text-center text-5xl font-bold wrap-anywhere'>We Build <br />
                <span className='text-[#9f62f2]'>Productive</span> Apps</h1>
            <p className='text-center text-[#627382]'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>

            <div className='flex gap-6 justify-center'>
                <a className='flex gap-1 border-gray-300 border-2 p-2 w-45 rounded' href='https://play.google.com'>
                    <div>
                        <img src={play} alt="" />
                    </div>
                    <div className='font-semibold text-xl'>
                        Google Play
                    </div>
                </a>
                <a className='flex gap-1 border-gray-300 border-2 p-2 w-45 rounded' href='https://www.apple.com/app-store/'>
                    <div>
                        <img src={app} alt="" />
                    </div>
                    <div className='font-semibold text-xl'>
                        App Store
                    </div>
                </a>
            </div>
            <div>
                <img className='mx-auto' src={hero} alt="" />


                <div className='py-12 bg-purple-500 space-y-12'>
                    <h1 className='text-center text-3xl text-white font-bold'>Trusted by Millions, Built for You</h1>
                    <div className='flex justify-center gap-18'>
                        <div className='text-white space-y-2'>
                            <p className='text-sm'>Total Downloads</p>
                            <p className='text-4xl font-bold'>29.6M</p>
                            <p className='text-sm'>21% more than last month</p>
                        </div>
                        <div className='text-white space-y-2'>
                            <p className='text-sm'>Total Reviews</p>
                            <p className='text-4xl font-bold'>906k</p>
                            <p className='text-sm'>46% more than last month</p>
                        </div>
                        <div className='text-white space-y-2'>
                            <p className='text-sm'>Active Apps</p>
                            <p className='text-4xl font-bold'>132+</p>
                            <p className='text-sm'>31 more will Launch</p>
                        </div>

                    </div>
                </div>

                <div className='py-15 space-y-5'>
                    <h1 className='text-center text-4xl font-bold'>Trending Apps</h1>
                    <p className='text-center text-[#627382]'>Explore All Trending Apps on the Market developed by us</p>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mx-auto  pl-20'>
                {
                featuredata.map(d => (
                    <Data d={d} key={d.id}></Data>
                ))
            }
            </div>

            <div className='text-center mb-12 mt-15'>
                <NavLink to='/app' className='px-4 py-2 bg-purple-500 rounded' >Show All</NavLink>
            </div>

        </div>
    );
};

export default Home;