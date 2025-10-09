import React, { useState } from 'react';
import { getlocal, remove } from '../Utils/Localstorage';
import down from '../assets/download.png';
import rating from '../assets/rating.png';
import { toast } from 'react-toastify';

const Installation = () => {
    const [app,setApp] = useState(()=>getlocal())
    const [sort, setSort] = useState('none')
    // const app = getlocal();
    // console.log(app);
    
   const sorteditem = (
    ()=>{
        if(sort === 'asc'){
            return [...app].sort((a,b)=> a.size-b.size)
        }
        else if(sort === 'desc'){
             return [...app].sort((a,b)=> b.size-a.size)
        }
        else{
            return app;
        }
    }
   )()

   const handleremove =id =>{
    remove(id);
    setApp(prev=>prev.filter(p=> p.id !== id))
    toast.success('Uninstall from your device')
   }
//    console.log(sorteditem);
    return (

         <div className='py-10 space-y-6 px-15'>

            <h1 className='font-bold text-4xl text-center'>Your Installed Apps</h1>
            <p className='text-sm text-center text-[#627382]'>Explore All Trending Apps on the Market developed by us</p>
            

            <div className='flex justify-between '>
                <p className='font-bold text-2xl'>({app.length}) Apps Found</p>

               {/* <label> */}
                <select className='select select-bordered w-40' value={sort}
                onChange={e=> setSort(e.target.value)}>
                    <option value="none">Sort by size</option>
                    <option value="asc">low-high</option>
                    <option value="desc">high-low</option>

                </select>
               {/* </label> */}

            </div>

{
             sorteditem.map(a=>
        <div className='shadow-xl  border-2 border-gray-300 p-2 flex justify-between items-center rounded-2xl'>
            <div className='flex items-center gap-6 '>
                <div>
                    <img className='h-15' src={a.image} alt="" />
                </div>
                <div className='space-y-1'>
                    <p className='text-lg font-semibold'>{a.title}</p>

                    <div className='flex gap-6'>
                        <div className='flex gap-1 items-center'>
                        <img className='h-4' src={down} alt="" />
                        <p className='text-green-500'>{a.downloads/1000000}M</p>
                    </div>
                    <div className='flex gap-1 items-center'>
                        <img className='h-4' src={rating} alt="" />
                        <p className='text-orange-500'>{a.ratingAvg}</p>
                    </div>
                    <div className='flex gap-1'>
                        <p className='text-gray-500'>{a.size}MB</p>
                    </div>
                    </div>
                    
                </div>
            </div>

            <div className=''>
                <button onClick={()=>handleremove(a.id)} className='py-2 px-3 bg-green-400 rounded-lg  mr-4'>Uninstall</button>
            </div>

        </div>
    )
}    
        </div>
    );
};

export default Installation;