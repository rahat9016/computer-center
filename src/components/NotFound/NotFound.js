import React from 'react';
import './notfound.css'
import notfoundImg from '../../images/404.png'
import { Link } from 'react-router-dom';
const NotFound = () => {
    return (
        <div className="notFoundContainer mt-5 pt-5">
             <div >
                <h1 className="fw-bolder font-color-ping">Oops nothing Here...</h1>
                <Link to="/home" className="brand-btn btn">Go back </Link>
                <p></p>
             </div>
             <div>
                <img src={notfoundImg}/>
             </div>
        </div>
    );
};

export default NotFound;