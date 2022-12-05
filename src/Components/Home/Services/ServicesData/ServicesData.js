import React from 'react';
import { useLoaderData } from 'react-router-dom';
import PageTitle from '../../../../Hooks/PageTitle';
import ServicesPage from '../ServicesPage/ServicesPage';

const ServicesData = () => {
    const servicesData = useLoaderData();
    console.log(servicesData);
    PageTitle('Services')
    
    return (
        <div>
            <div>
                <h2 className='text-center my-5 font-bold lg:text-5xl text-xl'>Photography Service</h2>
            </div>
            <div className='grid gap-6 grid-cols-1 lg:grid-cols-2 max-w-screen-xl mx-auto my-12'>
            {
                servicesData.map(service => <ServicesPage 
                    key={service.id}
                    service={service}
                ></ServicesPage >)
            }

            </div>
        </div>
        
    );
};

export default ServicesData;