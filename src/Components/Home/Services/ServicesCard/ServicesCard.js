import React from "react";
import { Link } from "react-router-dom";
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';


const ServicesCard = ({ service }) => {
  
  const { _id, img, name, price, description } = service;
  return (
    <div className="my-8">
      <div className="card w-full bg-base-100 shadow-xl">
        <PhotoProvider>
          <PhotoView src={img}>
            <figure>
              <img src={img} className='w-full h-60' alt="Shoes" />
            </figure>
          </PhotoView>
        </PhotoProvider>
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold">
            {name}
          </h2>
          <p>{description.slice(0, 100)+ "...."}</p>
          <div className="card-actions  justify-between">
            <div className=" text-2xl font-bold">{price}$</div>
            <Link to={`/services/${_id}`} className="btn bg-red-600 border-0">Service Details</Link>
          </div>
        </div>
      </div>
    
    </div>
  );
};

export default ServicesCard;
