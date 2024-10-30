import React from 'react';
import Header from './Header';
import './style.css'
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Home = (props) => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;