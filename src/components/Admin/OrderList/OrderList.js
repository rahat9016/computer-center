import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import OrderItem from '../OrderItem/OrderItem';
import Sidebar from '../Sidebar/Sidebar';
import './orderlist.css'
const OrderList = () => {
    const [orderData,setOrderData] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/getOrder`)
        .then(res => res.json())
        .then(data => setOrderData(data))
    },[])
    console.log(orderData)
    return (
        <div className="wrap-container">
            <div>
                <Sidebar className="sidebar-container"></Sidebar>
            </div>
            
            <div className="main-container">
            <h1>Order list</h1>
                <div>
                    {
                        orderData.map(order => <OrderItem order={order}></OrderItem>)
                    }
                </div>
            </div>
        </div>
    );
};

export default OrderList;