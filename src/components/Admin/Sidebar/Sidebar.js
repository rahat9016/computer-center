import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../images/logo.png'
const Sidebar = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext)
    const [isAdmin, setIsAdmin] = useState(false)

    useEffect(() => {
        fetch('https://rahatcomputercenter.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({email: loggedInUser.email})
        })
            .then(res => res.json())
        .then(res=> setIsAdmin(res))
    }, [])
    console.log(isAdmin)
    return (
        <section className="bg-primary ">
            <div className="d-flex flex-column" style={{ height: "100vh", }}>
            <div className="mt-3 p-2">
                <Link to="/home"><img src={logo} arlt=""/></Link>
            </div>
            <ul className="list-unstyled ms-2">
                <li className="my-3">
                    <Link to="/order" className="text-white">
                    <i class="fas fa-hdd me-3" ></i> <span>Order</span>
                    </Link>
                </li>
                {isAdmin && <div>
                <li className="my-3">
                    <Link to="/addService" className="text-white">
                    <i class="fas fa-plus me-3 "></i> <span>Add Service</span>
                    </Link>
                </li>
                
                <li className="my-3">
                    <Link to="/makeAdmin" className="text-white">
                    <i class="fas fa-user-plus me-3 "></i> <span>Make Admin</span>
                    </Link>
                </li>
                
                <li className="my-3">
                    <Link to="/manageService" className="text-white">
                    <i class="fas fa-tasks me-3 "></i> <span>Manage Service</span>
                    </Link>
                </li>
                
                <li className="my-3">
                    <Link to="/orderList" className="text-white" >
                    <i class="fas fa-shopping-cart me-3 "></i> <span>Order List</span>
                    </Link>
                </li>
                </div>}
                <li className="my-3">
                    <Link to="/review" className="text-white" >
                    <i class="far fa-comment-alt me-3"></i> <span>Review</span>
                    </Link>
                </li>
                <li className="my-3">
                    <Link to="/booking" className="text-white" >
                    <i class="far fa-comment-alt me-3"></i> <span>Booking List</span>
                    </Link>
                </li>

                
                
            </ul>
           
        </div>
        </section>
    );
};

export default Sidebar;