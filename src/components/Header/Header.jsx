import React, { useEffect, useState } from 'react';
import sliderImg1 from '../../assets/img/slide_home_1.jpg'

const Header = () => {
    return (

        <div className="bg-cover bg-center bg-no-repeat h-screen relative -z-50 -top-16" style={{ backgroundImage: `url(${sliderImg1})` }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 text-center flex justify-center items-center">
                <div>
                <h1 className="text-white text-center text-6xl font-bold">Taste <br /> Unique Food</h1>
                <p className='text-2xl font-semibold text-white mt-3'>Cooking delicious food since 2005</p>
                <button className="mt-7 font-bold py-2 px-5 rounded-md bg-gradient-to-r from-gray-100 to-gray-300 text-black cursor-pointer">Learn more</button>
                </div>
                
            </div>
        </div>
        

    );
};

export default Header;