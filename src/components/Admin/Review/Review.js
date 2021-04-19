import React from 'react';
import { useForm } from 'react-hook-form';
import { useContext } from 'react/cjs/react.development';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';

const Review = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext)
    console.log(loggedInUser)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data,e) => {
        const reviewData = {
            photo:loggedInUser.photoURL,
            email: loggedInUser.email,
            name: data.name,
            company:data.company,
            review:data.review,
        }
    const url = 'http://localhost:5000/clientReview'
    fetch(url,{
        method:'POST',
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify(reviewData)
    })
    .then(res => console.log(res))
    e.target.reset()
    };
    return (
        <div className="wrap-container">
            <div className="sidebar-container">
                <Sidebar></Sidebar>
            </div>
<div className="main-container bg-light-white ">
    <div className="py-2 px-3 d-flex align-items-center bg-white justify-content-between mb-2">
                    <h1 className="font-color-ping fw-bolder">Review</h1>
                    <img src={loggedInUser.photoURL}style={{borderRadius:'50%',width:'50px',}}className="loggedInUserPhoto"/>
                </div>
    <form onSubmit={handleSubmit(onSubmit)} className="px-5">
      <input className="main-container-input form-control mb-3" name="name"{...register("name",{ required: true })} defaultValue={loggedInUser.displayName} placeholder="Your Name" />
      {errors.name && <span>This field is required</span>}

      <input className="main-container-input form-control mb-3" name="company" {...register("company",{ required: true })} placeholder="Company's name, Designation" />
      {errors.company && <span>This field is required</span>}

      <textarea className="form-control main-container-input mb-3" rows="6" name="review" {...register("review",{ required: true })} placeholder="Enter Your Review" ></textarea>
      {errors.review && <span>This field is required</span>}
      
      <input type="submit" className="btn brand-btn"/>
    </form>
            </div>
        </div>
    );
};

export default Review;