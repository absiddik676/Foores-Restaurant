import React from 'react';
import Header from '../components/Header/Header';
import Navbar from '../share/Navbar/Navbar';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Footer from '../share/Footer/Footer';
import toast, { Toaster } from 'react-hot-toast';


const MainLayout = () => {
    return (
        <div>
            <Toaster />
             <ScrollRestoration />
            <Navbar/>
            <div className='-[calc(100vh-500px)]'>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default MainLayout;