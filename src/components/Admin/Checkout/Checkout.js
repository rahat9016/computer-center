import React from 'react';

import { useParams } from 'react-router';
import Order from '../Order/Order';

const Checkout = () => {
    const {id} = useParams()
    return (
        <div>
           <Order id={id}></Order>
        </div>
    );
};

export default Checkout;