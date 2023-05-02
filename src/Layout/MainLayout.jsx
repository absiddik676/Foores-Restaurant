import React from 'react';
import Header from '../components/Header/Header';
import Navbar from '../share/Navbar/Navbar';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Footer from '../share/Footer/Footer';

const MainLayout = () => {
    return (
        <div>
             <ScrollRestoration />
            <Navbar/>
            <div className='md:min-h-[calc(100vh-00px)]'>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default MainLayout;