import React from 'react';
import down from '../assets/download.png';
import rating from '../assets/rating.png';
import { NavLink } from 'react-router';

const Data = ({d}) => {
    console.log(d);

    // if(d.length === 0)
    // {
    //     console.log(khj);
    // }

    const {title, image, ratingAvg,downloads,id} = d
    const download =downloads/1000000;
    return (
        
        <div className="card bg-base-100 w-80 shadow-2xl pt-15 hover:scale-105 transition ease-in-out">
            <NavLink to={`/data/${id}`}>
  <figure>
    <img className='h-50'
      src={image}
      alt="App" />
  </figure>
  <div className="card-body">
    <p className='pb-4 text-xl text-center font-bold'>{title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">
        <img className='h-4' src={down} alt="" />
        {download}M</div>
      <div className="badge badge-outline">
        <img className='h-4' src={rating} alt="" />
        {ratingAvg}</div>
    </div>
  </div>
  </NavLink>
</div>
    );
};

export default Data;