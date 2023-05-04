import React from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';
import Navbar from '../share-components/Navbar/Navbar';
import Footer from '../share-components/Footer/Footer';


const MainLayout = () => {
    return (
        <div>
            <ScrollRestoration />
            <Toaster />
            
            <Navbar />
            
            <div className='-[calc(100vh-1369px)]'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;