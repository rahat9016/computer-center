import React from 'react';
import { Link } from 'react-router-dom';
import heroArea from "../../../images/heroArea.png"
import './hero.css'
const HeroArea = () => {
    return (
        <section>
            <div className="hero-Container">
                <div className="hero-box-1">
                    <h1 className="hero-heading">Computer Repairs <br/> any Complexity</h1>
                    <p className="mb-5">We provide computer repair services for desktops in affordable prices! With so many years of experience under our belt, we’ve managed to position ourselves as the complete computer repair provider in Dhaka, Bangladesh. </p>
                    <Link className="brand-btn px-5 py-3 ">Booking</Link>
                </div>  
                <div className="text-center">
                    <img className="w-75" src={heroArea} alt=""/>
                </div>  
            </div>
        </section>
    );
};

export default HeroArea;