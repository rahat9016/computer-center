import React from 'react';
import './OrderItem.css'
const OrderItem = ({order}) => {
    return (
        <div className="bg-white shadow p-4 rounded-3">
            <div className="d-flex justify-content-between mb-3">
                <img src={order.img} className="orderImg"/>
                <button className="orderBtn">Pending</button>
            </div>
            <h3 className="fw-bold">{order.title}</h3>
            <p>{order.description}</p>
            <h4 className="fw-bolder font-color-ping">${order.price}</h4>
        </div>
    );
};

export default OrderItem;