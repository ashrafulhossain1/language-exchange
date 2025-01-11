import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainLayout = () => {
    return (
        <div className='dark:bg-black bg-gray-100'>
            <div className='sticky top-0 left-0 z-50'>
                <Navbar></Navbar>
            </div>
            <div className='min-h-[500px] max-w-screen-xl dark:bg-black mx-auto'>
                <Outlet></Outlet>
            </div>
            <div className='bg-white dark:bg-slate-950 text-base-content dark:text-slate-50'>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default MainLayout;