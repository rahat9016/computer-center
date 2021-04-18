import React from 'react';

const OrderItem = ({order}) => {
    console.log(order)
    return (
        <div className="">
            <h3>{order.displayName}</h3>
            <img src={order.img}/>
            <p>{order.price}</p>
        </div>
    );
};

export default OrderItem;