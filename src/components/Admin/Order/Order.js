import React, { useContext, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import './Order.css'

import ProcessPayment from '../ProcessPayment/ProcessPayment';
import Sidebar from '../Sidebar/Sidebar';
import { UserContext } from '../../../App';

const ServiceDetails = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    
    const [service, setService] = useState([])
    const [info, setInfo] = React.useState({});
    const { id } = useParams()
    console.log(service)
    
    React.useEffect(() => {
        fetch(`http://localhost:5000/servicesData/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setService(data)
            });
    }, [id]);

    const handleBlur = e => {
        const newInfo = { ...info };
        console.log(e.target.name, e.target.value);
        newInfo[e.target.name] = e.target.value;
        
    }
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        const newInformation = { 
            ...service, ...loggedInUser 
        }
    };

    const handlePaymentSuccess = (paymentId) => {
        const newInformation = {
            ...loggedInUser,
            title: service.name,
            price: service.price,
            description: service.description,
            img:service.imgUrl,
            paymentId,
            orderTime: new Date().toDateString('dd/mm/yyyy')
        }
        console.log("newInfo ", newInformation);
        fetch('http://localhost:5000/addOrder', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newInformation)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    console.log("database data ", data);
                    alert('your order placed successfully')
                }
            })
    }
    return (
        <section className="wrap-container">
            <div className="sidebar-container">
                <Sidebar></Sidebar>
            </div>
            <div className="main-container bg-light-white">
                <div className="py-2 px-3 d-flex align-items-center bg-white justify-content-between mb-2">
                    <h1 className="font-color-ping fw-bolder">Your Order</h1>
                    <img src={loggedInUser.photoURL}style={{borderRadius:'50%',width:'50px',}}className="loggedInUserPhoto"/>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="order-Form">
                    <div className="form-group main-container-input mb-3">
                        <input class="form-control" onBlur={handleBlur} type="text" className="form-control" value={loggedInUser.displayName} name="displayName" placeholder="Enter Your Name"/>
                    </div>
                    <div className="form-group main-container-input mb-3">
                        <input class="form-control" onBlur={handleBlur} type="text" className="form-control" value={loggedInUser.email} name="email" placeholder="Enter Your Email" />
                    </div>
                    <div className="form-group main-container-input mb-3">
                        <input class="form-control" onBlur={handleBlur} type="text" className="form-control" value={service.name} name="title" />
                    </div>
                   
                </form>
                <div className="order-Form">
                    <ProcessPayment handlePayment={handlePaymentSuccess} service={service}></ProcessPayment>
                </div>
            </div>
        </section>
    );
};

export default ServiceDetails;