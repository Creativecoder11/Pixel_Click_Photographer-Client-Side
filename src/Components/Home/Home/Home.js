import React from 'react';
import Services from '../Services/Services/Services';
import Banner from '../Banner/Banner';
import About from '../About/About';
import PageTitle from '../../../Hooks/PageTitle';

const Home = () => {
    PageTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <div className='max-w-screen-xl mx-auto'>
                <Services></Services>
                <About></About>
            </div>
            
        </div>
    );
};

export default Home;