import React, { useState } from 'react';
import useData from '../hooks/useData';
import Data from '../Component/Data';
import { NavLink } from 'react-router';
import logo from '../assets/logo.png';


const App = () => {
            const {data, loading, error} = useData();
            const [search, setSearch] = useState('');

            const term = search.trim().toLocaleLowerCase();

            // console.log(term);

            const searchproducts = term? data.filter(product => product.title.toLocaleLowerCase().includes(term)) : data

            // console.log(searchproducts);
            const hi = searchproducts.length;
            console.log(hi);

            const handleshow = () => {
        setSearch('');
        };


        if(loading){
        return (
            <div className='flex justify-center items-center h-screen'>
                <img className='animate-spin h-50 w-50' src={logo} alt="" />
            </div>
    
        )
    }

    

    return (
        <div className='py-10 space-y-6'>
            <h1 className='font-bold text-4xl text-center'>Our All Applications</h1>
            <p className='text-sm text-center text-[#627382]'>Explore All Apps on the Market developed by us. We code for Millions</p>
            <div className='flex justify-between px-20'>
                <p className='font-bold text-2xl'>({searchproducts.length}) Apps Found</p>

                <label className='input'>
                    <input type="search" value={search} onChange={(e)=> setSearch(e.target.value)} placeholder='search Apps' />
                </label>

            </div>

            
            {searchproducts.length === 0 ?
            (
                <div>
                    <p className='text-4xl font-bold text-center'>Not found</p>
                     <div className='text-center mb-12 mt-15'>
                <NavLink to='/app' onClick={handleshow} className='px-6 py-4 bg-gray-500 rounded' >Show All Apps</NavLink>
            </div>
                </div>
            )

             :(<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mx-auto  pl-20'>
                {
                searchproducts.map(d => (
                    <Data d={d} key={d.id}></Data>
                ))
            }
            </div>)}

            
               

        </div>
    );
};

export default App;