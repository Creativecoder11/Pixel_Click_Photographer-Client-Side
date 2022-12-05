import React from "react";
import { Link } from "react-router-dom";
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const ServicesPage = ({ service }) => {
  const { _id, name, img, price, description } = service;
  return (
    <div >
      <div className="card lg:card-side bg-base-100 rounded shadow-xl">
        <PhotoProvider>
          <PhotoView src={img}>
            <figure>
              <img src={img} className='w-80 h-60' alt="Album" />
            </figure>
          </PhotoView>
        </PhotoProvider>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description.slice(0, 150)+ "..."}</p>
          <div className="card-actions justify-between">
            <div className=" text-2xl font-bold">Price:{price}$</div>
            <Link to={`/services/${_id}`} className="btn bg-red-600 border-0">Service Details</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
