import React from 'react';

import Navbar from '../../Shared/Navbar/Navbar';
import HeroArea from '../HeroArea/HeroArea'
import './header.css'
const Header = () => {
    return (
        <div className="header-container">
            <Navbar></Navbar>
            <HeroArea></HeroArea>
        </div>
    );
};

export default Header;