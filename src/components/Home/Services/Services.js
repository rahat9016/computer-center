import React, { useEffect, useState } from 'react';
import ServicesItem from '../ServicesItem/ServicesItem';
import './services.css'
const Services = () => {
    const [servicesData,serServicesData] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/servicesData`)
        .then(res => res.json())
        .then(data => serServicesData(data))
    }, [])
    
    return (
        <div className="mb-5">
            <div className="text-center">
                <h1 className="mt-5 fw-bold mb-5">Our Awesome <span className="font-color-ping">Service</span></h1>
            </div>
            <div className="row service-container">
                <div className="service-card ">
                {
                    servicesData.map(service => <ServicesItem service={service} key={service._id}></ServicesItem>)
                }
                </div>
            </div>
        </div>
    );
};

export default Services;