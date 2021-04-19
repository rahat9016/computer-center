import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';

const ManageService = () => {
    const [manageService,setManageService] = useState([])
    const [loggedInUser,setLoggedInUser] = useContext(UserContext)
    useEffect(()=>{
        fetch(`http://localhost:5000/getOrder`)
        .then(res => res.json())
        .then(data => setManageService(data))
    },[])
    console.log(manageService)
    const deleteProduct = (id)=>{
        fetch(`http://localhost:5000/delete/${id}`,{
            method:'DELETE'            
        })
        .then(res => res.json())
        .then(result => console.log('Delete Successfully Done!'))
    }
    
    return (
        <div className="wrap-container">
            <div className="sidebar-container">
                <Sidebar></Sidebar>
            </div>
            <div className="main-container bg-light-white">
            <div className="py-2 px-3 d-flex align-items-center bg-white justify-content-between mb-2">
                <h1 className="font-color-ping fw-bolder">Manage Service</h1>
                
                <img src={loggedInUser.photoURL}style={{borderRadius:'50%',width:'50px',}}className="loggedInUserPhoto"/>
            </div>
            <table className="table table-borderless">
            <thead className="border-bottom">
                <tr>
                <th className="text-secondary text-left" scope="col">Sr No</th>
                <th className="text-secondary" scope="col">Name</th>
                <th className="text-secondary" scope="col">E-email</th>
                <th className="text-secondary" scope="col">Service</th>
                <th className="text-secondary text-center" scope="col">Pay With</th>
                <th className="text-secondary text-center" scope="col">Status</th>
                <th className="text-secondary text-center" scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                  manageService.map((manage, index) => 
                        
                    <tr>
                        <td>{index + 1}</td>
                        <td>{manage.displayName}</td>
                        <td>{manage.email}</td>
                        <td>{manage.title}</td>
                        <td></td>
                        
                        <td className="text-center"><i onClick={()=>deleteProduct(manage._id)} class="fas fa-trash-alt text-danger cursor-pointer"></i></td>
                    </tr>
                    )
                }
            </tbody>
        </table>
            </div>
        </div>
    );
};

export default ManageService;