import React from 'react';

const Data = ({d}) => {
    console.log(d);

    const {companyName, image, ratingAvg,downloads} = d
    return (
        <div className="card bg-base-100 w-96 shadow-2xl">
  <figure>
    <img className='h-50'
      src={image}
      alt="App" />
  </figure>
  <div className="card-body">
    {/* <h2 className="card-title">
      Card Title
      <div className="badge badge-secondary">NEW</div>
    </h2> */}
    <p className='pb-4 text-xl text-center font-bold'>{companyName}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">{downloads}M</div>
      <div className="badge badge-outline">{ratingAvg}</div>
    </div>
  </div>
</div>
    );
};

export default Data;