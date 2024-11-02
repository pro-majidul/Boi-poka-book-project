import React from 'react';
import Banner from '../Banner/Banner';
import Books from '../Books/Books';

const Home = () => {
    return (
        <div className='min-h-[calc(100vh-230px)]'>
            <Banner></Banner>
            <Books></Books>
        </div>
    );
};

export default Home;