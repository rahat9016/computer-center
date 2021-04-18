import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Sidebar from '../Sidebar/Sidebar';
const AddServices = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [uploadImg,setUploadImg] = useState(null)

    const onSubmit = data => {
      const eventData = {
        name: data.name,
        price: data.price,
        description: data.description,
        imgUrl: uploadImg
      }
      console.log(eventData)
      const url = `http://localhost:5000/addServices`
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
      <div className="main-container">
        <h1>Add Service</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input name="name" {...register("name", { required: true })}  placeholder="Enter Title"/>
            <input type="file" onChange={handleImageUpload}/>
            <input name="price" {...register("price", { required: true })}  placeholder="Enter Price"/>
            <textarea name="description" {...register("description", { required: true })} placeholder="Description" > </textarea>
            {errors.name && <span>This field is required</span>}
            <input type="submit" />
        </form>
      </div>
    </div>
    );
};

export default AddServices;