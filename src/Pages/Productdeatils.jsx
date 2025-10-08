import React, { useState } from 'react';
import { useParams } from 'react-router';
import useData from '../hooks/useData';
import down from '../assets/download.png';
import rating from '../assets/rating.png';
import review from '../assets/review.png';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { toast } from 'react-toastify';



const Productdeatils = () => {

    const {id} = useParams();
    const {data, loading, error} = useData();
    const [install, setInstall] = useState(false);

    const handleinstall = ()=>{
        setInstall(true);
        toast.success('Installed successfully');
    }

    const product = data.find(p=> String(p.id) === id)

    if(loading) return <p>loading....</p>

    const {image, title,companyName,description,reviews,ratingAvg,downloads,size,ratings} = product

    console.log(ratings);

    return (
        <div>
        <div className="card card-side bg-base-100   m-20 border-b-2 border-gray-200 pb-7">
  <figure className='w-1/5'>
    <img
    className='h-fit'
      src={image}
      alt="Movie" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p className='text-sm text-gray-400'>Developed by <span className='text-purple-500'>{companyName}</span></p>

    <div className='flex gap-20 py-6 border-gray-200 border-t-2'>
        <div>
            <img className='h-6 pl-4'
            src={down} alt="" />
            <p>Downloads</p>
            <p className='text-2xl font-bold pl-3'>{downloads}M</p>
        </div>
        <div>
            <img className='h-6 pl-4'
            src={rating} alt="" />
            <p>Average Ratings</p>
            <p className='text-2xl font-bold pl-3'>{ratingAvg}</p>
        </div>
        <div>
            <img className='h-8 pl-4'
            src={review} alt="" />
            <p>Total Reviews</p>
            <p className='text-2xl font-bold pl-3'>{reviews}k</p>
        </div>
    </div>

    <div className="card-actions ">
      <button
      disabled={install}
      onClick={handleinstall}
      className="btn bg-green-400">{install? 'Installed' :`Install Now ({size} MB)`}</button>
    </div>
  </div>
</div>


      <div style={{ width: '100%', height: 300 }}>
  <ResponsiveContainer>
    <BarChart
      layout="vertical" // horizontal bar দেখানোর জন্য
      data={ratings}
      margin={{ top: 20, right: 30, left: 50, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis type="number" />
      <YAxis dataKey="name" type="category" />
      <Tooltip />
      <Bar dataKey="count" fill="#ff7300" />
    </BarChart>
  </ResponsiveContainer>
</div>

<div className='px-15 my-10 '>
    <h1 className='font-bold text-xl py-5  border-t-2 border-gray-200'>Description</h1>
    <p>{description}</p>
</div>

</div>
    );
};

export default Productdeatils;