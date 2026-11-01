import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Home from '../pages/Home';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <main>
                <Home></Home>
            </main>
            <Outlet />
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;