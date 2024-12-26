import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainLayout = () => {
    return (
        <div className='dark:bg-black '>
            <div>
                <Navbar></Navbar>
            </div>
            <div className='min-h-[500px] max-w-screen-2xl mx-auto'>
                <Outlet></Outlet>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default MainLayout;