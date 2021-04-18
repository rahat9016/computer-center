import React from 'react';
import './OrderItem.css'
const OrderItem = ({order}) => {
    console.log(order)
    return (
        <div className="">
            <h3>{order.displayName}</h3>
            <img src={order.img} className="w-100"/>
            <p>{order.price}</p>
        </div>
    );
};

export default OrderItem;