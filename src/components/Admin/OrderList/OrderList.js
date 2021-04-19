import React, { useContext, useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import { UserContext } from '../../../App';
import OrderItem from '../OrderItem/OrderItem';
import Sidebar from '../Sidebar/Sidebar';
import './orderlist.css'
const OrderList = () => {
    const [orderData,setOrderData] = useState([])
    const [loggedInUser,setLoggedInUser] = useContext(UserContext)
    useEffect(()=>{
        fetch(`http://localhost:5000/getOrder`)
        .then(res => res.json())
        .then(data => setOrderData(data))
    },[])
    console.log('check',orderData)
    return (
        <div className="wrap-container">
            <div className="sidebar-container">
                <Sidebar></Sidebar>
            </div>
            <div className="main-container">
            <div className="py-2 px-3 d-flex align-items-center bg-white justify-content-between mb-2">
                <h1 className="font-color-ping fw-bolder">Order list</h1>
                <img src={loggedInUser.photoURL}style={{borderRadius:'50%',width:'50px',}}className="loggedInUserPhoto"/>
            </div>
                <div className="orderContainer bg-light-white">
                    <div className="orderListContainer">
                        {
                            orderData.map(order => <OrderItem order={order}></OrderItem>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderList;