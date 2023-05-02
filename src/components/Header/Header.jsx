import React, { useEffect, useState } from 'react';
import sliderImg1 from '../../assets/slider-img/slide_home_1.jpg'
import sliderImg2 from '../../assets/slider-img/slide_home_2.jpg'
import sliderImg3 from '../../assets/slider-img/slide_home_3.jpg'
import Navbar from '../Navbar/Navbar';
const Header = () => {
    return (

        <div className="bg-cover bg-center bg-no-repeat h-screen relative -z-50 -top-16" style={{ backgroundImage: `url(${sliderImg1})` }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 flex justify-center items-center">
                <div>
                <h1 className="text-white text-center text-6xl font-bold">Taste <br /> Unique Food</h1>
                <p className='text-2xl font-semibold text-white mt-3'>Cooking delicious food since 2005</p>
                </div>
            </div>
        </div>

    );
};

export default Header;