import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
import './addService.css'
const AddServices = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [uploadImg,setUploadImg] = useState(null)
    const [loggedInUser] = useContext(UserContext)
    const onSubmit = data => {
      const eventData = {
        name: data.name,
        price: data.price,
        description: data.description,
        imgUrl: uploadImg
      }
      console.log(eventData)
      const url = `https://rahatcomputercenter.herokuapp.com/addServices`
      fetch(url, {
          method:'POST',
          headers:{
            'Content-type':'application/json'
          },
          body: JSON.stringify(eventData)
      })
      .then(res => console.log(""))
    };
   

    const handleImageUpload = event =>{
      const imageData = new FormData();
      imageData.set('key','1a3f4571e2b8c4278663ceb45f0beafd')
      imageData.append('image', event.target.files[0])
      axios.post('https://api.imgbb.com/1/upload',imageData)
        .then(response => {
          setUploadImg(response.data.data.display_url)
        })
        .catch(error => {
          console.log(error);
        });
    }
    return (
    <div className="wrap-container">
      <div className="sidebar-container">
        <Sidebar></Sidebar>
      </div>
      <div className="main-container bg-light-white">
        <div className="py-2 px-3 d-flex align-items-center bg-white justify-content-between mb-2">
            <h1 className="font-color-ping fw-bolder">Add Service</h1>
            <img src={loggedInUser.photoURL}style={{borderRadius:'50%',width:'50px',}}className="loggedInUserPhoto"/>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input className="main-container-input form-control mb-4" name="name" {...register("name", { required: true })}  placeholder="Enter Title"/>
            <input type="file" onChange={handleImageUpload} id="file" className="chooseAInput"/>
            <label for="file"className="chooseAPhoto">
            <i class="fas fa-image me-2" ></i>Choose a Photo
            </label>
            
            <input className="main-container-input form-control mb-4" name="price" {...register("price", { required: true })}  placeholder="Enter Price"/>
            <textarea className="main-container-input form-control mb-4" rows="6" name="description" {...register("description", { required: true })} placeholder="Description" > </textarea>
            {errors.name && <span>This field is required</span>}
            <input type="submit" className="brand-btn btn" />
        </form>
      </div>
    </div>
    );
};

export default AddServices;