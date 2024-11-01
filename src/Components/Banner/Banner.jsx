import React from 'react';
import BannerImg from '../../assets/Images/pngwing 1 (1).png'

const Banner = () => {
    return (
        <div className='py-2 my-5'>
            <div className="hero bg-base-200 p-10 rounded-3xl">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src={BannerImg}
                        className="max-w-sm rounded-lg shadow-2xl" />
                    <div >
                        <h1 className="text-5xl pb-8 font-bold">Books to freshen up your Bookself</h1>
                        <button  className="btn   bg-green-500 text-white">View The List</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;