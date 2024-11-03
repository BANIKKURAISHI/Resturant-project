import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Nav&Footer.jsx/Footer';
import Navbar from './Nav&Footer.jsx/Navbar';


const Main = () => {
    return (
        <div>
          <Navbar></Navbar>
          <Outlet></Outlet>
          <Footer></Footer>
        </div>
    );
};

export default Main;