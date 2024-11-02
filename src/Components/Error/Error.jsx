import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='flex flex-col items-center justify-center h-96'>
            <h1 className='font-bold text-4xl text-center'>Status 404</h1>
            <h3 className="text-5xl font-bold text-center">Page Not Found!!!!!</h3>
            <div className='pt-10'>
                <Link to='/'><button className='btn bg-green-400 text-gray'>Back Home</button></Link>
            </div>
        </div>
    );
};

export default Error;