import React from 'react';
import Header from '../components/Header/Header';
import Navbar from '../share/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../share/Footer/Footer';

const MainLayout = () => {
    return (
        <div>
            <Navbar/>
            <div className='md:min-h-[calc(100vh-00px)]'>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default MainLayout;