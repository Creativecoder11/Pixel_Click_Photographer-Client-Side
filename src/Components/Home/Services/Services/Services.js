import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ServicesCard from '../ServicesCard/ServicesCard';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(()=> {
        fetch('https://pixel-click-photographer-server.vercel.app/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

    return (
        <div>
            <div className='text-center my-4'>
                <h1 className="text-5xl font-bold">
                    Our Service
                </h1>
                <p className="py-6 w-1/2 mx-auto">
                    Our in-house photography services team made up of professional photographers can add value to your website with high-resolution team photos, corporate event photography and product photography.
                </p>
            </div>

            <div className='grid gap-6 grid-cols-1 md:grid-cols-2  lg:grid-cols-3'>
                {
                    services.slice(0, 3).map(service => <ServicesCard
                        key={service._id}
                        service={service}
                    ></ServicesCard>)
                }
            </div>
            <div className='flex justify-center mb-10'>
                <Link to='/services'><button className="btn bg-red-600 text-white border-0 px-10" >See All</button></Link>
            </div>
        </div>
    );
};

export default Services;