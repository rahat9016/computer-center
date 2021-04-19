import React, { useState } from 'react'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import './payment.css'
const SimpleCardForm = ({ handlePayment,service }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [paymentError, setPaymentError] = useState(null)
    const [paymentSuccess, setPaymentSuccess] = useState(null)
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }


        const cardElement = elements.getElement(CardElement);

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            console.log('[error]', error);
            setPaymentError(error.message)
            setPaymentSuccess(null)
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setPaymentSuccess(paymentMethod.id)
            setPaymentError(null)
            handlePayment(paymentMethod.id)
        }
    };

    return (
        <div>
            <div className="text-center w-50">
                {
                    paymentError && <p style={{ color: "red" }}>{paymentError}</p>
                }
                {
                    paymentSuccess && <p style={{ color: "green" }}>Your payment was successful</p>
                }
            </div>
            <form onSubmit={handleSubmit}>
                <div className="main-container-input mb-3">
                <CardElement />
                </div>
                <div className="d-flex align-items-center justify-content-between main-container-input">
                    <h5>Your Service Charge Will Be <span className="font-color-ping">${service.price}</span></h5>
                    <button className="btn brand-btn px-5" type="submit" disabled={!stripe}>Pay</button>
                </div>
            </form>
            
        </div>
    );
};

export default SimpleCardForm;