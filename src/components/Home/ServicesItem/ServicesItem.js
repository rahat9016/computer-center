import React from 'react';
import { useHistory } from 'react-router';
import './servicesItem.css'
const ServicesItem = ({service}) => {
    const history = useHistory()
    const handleCard = id =>{
        history.push(`/checkout/${id}`)
    }
    return (
        <div className="p-3 text-center serviceCard" onClick={() =>handleCard(service._id)}>
            <img className="w-100" src={service.imgUrl}/>
            <h3 className="serviceItem-name">{service.name}</h3>
            <h2 className="font-color-ping fw-bold serviceItemPrice">${service.price}</h2>
            <p>{service.description}</p>
        </div>
    );
};

export default ServicesItem;