import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../Assets/about.jpg'
import LogoService from '../../../Assets/serviceProcess.PNG'

const About = () => {
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={Logo} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                    <div>
                        <h1 className="text-2xl lg:text-5xl font-bold">Our Photography Career</h1>
                        <p className="py-6">One of the most commercially viable careers is beauty and fashion photography. In this sector, you will mostly shoot the people.
                            When you will capture the photo shoot you will have to think about the clothes, makeup, and mood also.
                            In SEO Audit agency, we offer beauty and fashion photography services.
                            We offer a quality, high-resolution, amazing beauty and fashion photography service to our valued customer.
                            Our beauty and fashion photography service are highly demanded in the market for our high quality and resolution.
                            We have highly qualified and expert photographers for this service. Not only this, we offer a competitive price too.</p>
                        <Link className="btn btn-primary bg-red-600 border-0 hover:bg-black">Learn More</Link>
                    </div>
                </div>
            </div>
            <div className='my-8'>
                <h2 className="lg:text-5xl text-2xl font-bold text-center">OUR PHOTOGRAPHY SERVICE PROCESS</h2>
                <img className='my-5' src={LogoService} alt="" srcset="" />
            </div>
        </div>
    );
};

export default About;