import React from 'react';
import { useForm } from 'react-hook-form';
import { useContext } from 'react/cjs/react.development';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar'
const MakeAdmin = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        const url = `http://localhost:5000/addAdmin`
        fetch(url,{
            method:'POST',
            headers:{
                'Content-type':'Application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res => console.log(res))
    }

    return (
        <div className="wrap-container">
            <div className="sidebar-container">
                <Sidebar></Sidebar>
            </div>
            <div className="main-container">
                <div className=" px-3 ">
                    <h1 className="font-color-ping">Make Admin</h1>
                </div>
                <div className="bg-light-white position-relative" style={{height:"100vh"}}>
                    <div className="position-absolute bg-primary shadow w-50 ms-3 p-5"style={{top:'20px',borderRadius:'10px'}}>
                        <form onSubmit={handleSubmit(onSubmit)} className="d-flex align-items-center">
                            <input className="w-75 form-control" name="email"{...register("email",{ required: true })} placeholder="Add Admin" />
                            {errors.email && <span>E-mail field is required</span>}
                            <input type="submit" className="btn brand-btn ms-2"/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;