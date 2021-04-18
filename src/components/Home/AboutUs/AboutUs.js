import React from 'react';
import AboutImg from '../../../images/about.jpg'
import './aboutus.css'
const AboutUs = () => {
    return (
        <section style={{backgroundColor:'#FFF8F5', padding:"40px 0"}}>
            <div className="aboutus-container">
                <div className="text-center">
                    <img className="w-100" style={{borderRadius:'20px'}} src={AboutImg} alt=""/>
                </div>
                <div className="ms-5 mt-5">
                    <h1 style={{fontWeight:'700', fontSize:'50px',marginBottom:'20px'}}> We are handling <br/> your computer <span className="font-color-ping">professionally</span> </h1>
                    <p className="mb-5">We provide computer repair services for desktops in affordable prices! With so many years of experience under our belt, we’ve managed to position ourselves as the complete computer repair provider in Dhaka, Bangladesh. </p>
                    <div className="d-flex">
                        <div className="me-5">
                            <h1 className="font-color-ping fw-bolder">500+</h1>
                            <p>Happy Customar</p>
                        </div>
                        <div>
                            <h1 className="font-color-ping fw-bolder">200+</h1>
                            <p>Total Services</p>
                        </div>
                    </div>
                </div>  
                  
            </div>
        </section>
    );
};

export default AboutUs;