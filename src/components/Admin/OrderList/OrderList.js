import React, { useContext, useEffect, useState } from 'react';

import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
import './orderlist.css'
const OrderList = () => {
    const [orderData,setOrderData] = useState([])
    const [loggedInUser,setLoggedInUser] = useContext(UserContext)
    useEffect(()=>{
        fetch(`https://rahatcomputercenter.herokuapp.com/getOrder`)
        .then(res => res.json())
        .then(data => setOrderData(data))
    },[])
    console.log('check',orderData)
    return (
        <div className="wrap-container">
            <div className="sidebar-container">
                <Sidebar></Sidebar>
            </div>
            <div className="main-container bg-light-white">
            <div className="py-2 px-3 d-flex align-items-center bg-white justify-content-between mb-2">
                <h1 className="font-color-ping fw-bolder">Manage Service</h1>
                <img src={loggedInUser.photoURL}style={{borderRadius:'50%',width:'50px',}}className="loggedInUserPhoto"/>
            </div>
            <table className="table table-borderless">
            <thead className="border-bottom">
                <tr>
                <th className="text-secondary text-left" scope="col">Sr No</th>
                <th className="text-secondary" scope="col">Name</th>
                <th className="text-secondary" scope="col">E-email</th>
                <th className="text-secondary text-center" scope="col">Service</th>
                <th className="text-secondary text-center" scope="col">Order Time</th>
                </tr>
            </thead>
            <tbody>
                {
                  orderData.map((order, index) => 
                        
                    <tr>
                        <td>{index + 1}</td>
                        <td>{order.displayName}</td>
                        <td>{order.email}</td>
                        <td className="text-center"><img src={order.img}style={{width:"50px",height:'50px',borderRadius:'50%',marginRight:"10px",}}/> {order.title}</td>
                        <td className="text-center">{order.orderTime}</td>
                        
                        
                    </tr>
                    )
                }
            </tbody>
        </table>
            </div>
        </div>
    );
};

export default OrderList;