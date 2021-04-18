import React from 'react';
const TestimonialItem = ({testimonial}) => {
   
    return (
        <div className="">
            <div className="d-flex align-items-center">
                <img src={testimonial.photo} style={{height:"70px",borderRadius:'50%', marginRight:'20px'}}/>
                <h3 className="mt-2">{testimonial.name}</h3>
            </div>
            <div>
                <p className="mt-3">{testimonial.review}</p>
            </div>
            <div>
            <i class="fas fa-star colorReview" style={{color:"#FFAC0C"}}></i>
            <i class="fas fa-star colorReview" style={{color:"#FFAC0C"}}></i>
            <i class="fas fa-star colorReview" style={{color:"#FFAC0C"}}></i>
            <i class="fas fa-star colorReview" style={{color:"#FFAC0C"}}></i>
            <i class="far fa-star colorReview" ></i>
            </div>
        </div>
    );
};

export default TestimonialItem;