import React, { useEffect, useState } from 'react';
import TestimonialItem from '../TestimonialItem/TestimonialItem';
import './testimonial.css'

const Testimonial = () => {
    const [testimonials,setTestimonials] = useState([])
    useEffect(() => {
        fetch(`https://rahatcomputercenter.herokuapp.com/displayClientReview`)
        .then(res => res.json())
        .then(data => setTestimonials(data))
    },[])
    return (
        <section className="mb-5 py-5" style={{backgroundColor:'#F6F6F6'}}>
            <div className="text-center">
                <h1 className="mt-5 fw-bold mb-5"> Our Work <span className="font-color-ping">Review</span></h1>
            </div>
            <div className="testimonial-container">
                <div className="testimonialItem-container">
                {
                    testimonials.map(testimonial => <TestimonialItem testimonial={testimonial}></TestimonialItem>)
                }
                </div>
            </div>
        </section>
    );
};

export default Testimonial;