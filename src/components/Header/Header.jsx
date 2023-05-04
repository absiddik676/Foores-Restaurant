import React, { useEffect, useState } from 'react';
import backgroundImage from '../../assets/img/slide_home_1.jpg'

const Header = () => {
    return (

        <div className="bg-cover bg-center bg-no-repeat h-screen relative -z-50  -top-32 lg:-top-16" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 text-center flex justify-center items-center">
                <div className='px-2 lg:px-0'>
                    <h1 className='font-Italianno text-5xl font-semibold text-orange-500'>Foodies Welcome Here</h1>
                <h1 className="text-white text-center text-4xl lg:text-6xl font-bold">Taste Unique Food</h1>
                <p className='text-2xl font-semibold text-white mt-3'>Cooking delicious food since 2005</p>
                <button className="mt-7 font-bold py-2 px-5 rounded-md bg-gradient-to-r from-gray-100 to-gray-300 text-black cursor-pointer">Learn more</button>
                </div>
                
            </div>
        </div>
        

    );
};

export default Header;