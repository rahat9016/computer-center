import React from 'react';
import './footer.css'
import FooterIcon from "../../../images/logo.png"
const Footer = () => {
    return (
        <section className="bg-dark text-white">
            <div className="footer-container footerContainer">
                <div className="footer-first-container">
                    <img src={FooterIcon} className="mb-3"/>
                    <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <h4 className="mb-3">OUR NEWSLETTER</h4>
                    <input className="form-control mb-2" type="text" placeholder="Enter Your Email"/>
                    <button className="btn brand-btn">Subscribe</button>
                </div>
                <div>
                    <h4>COMPANY</h4>
                    <ul>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Project</a></li>
                        <li><a href="#">Our Team</a></li>
                        <li><a href="#">Teams Conditions</a></li>
                        <li><a href="#">Submit Listing</a></li>
                    </ul>
                </div>
                <div>
                    <h4>ADDRESS</h4>
                    <ul>
                        <li className="mb-5"><a href="#"><i class="fas fa-map-marker-alt font-color-ping me-4"></i> 5 Green Ave, Apt. 3 <br/> Ann Arbor 48104, USA</a></li>
                        <li><a href="#"><i class="fas fa-phone font-color-ping me-4"></i> +1 222 333-44-55 <br/> +1 222 333-44-66</a></li>
                    </ul>
                </div>
                <div>
                    <h4>WORKING HOURS</h4>
                    <ul>
                        <li>
                            <span>Monday ...............</span>
                            <span> 9:00 - 19:00</span>
                        </li>
                        <li>
                            <span>Tuesday ...............</span>
                            <span> 9:00 - 19:00</span>
                        </li>
                        <li>
                            <span>Wednesday ...............</span>
                            <span> 9:00 - 19:00</span>
                        </li>
                        <li>
                            <span>Thursday ...............</span>
                            <span> 9:00 - 19:00</span>
                        </li>
                        <li>
                            <span>Friday ...............</span>
                            <span> 9:00 - 19:00</span>
                        </li>
                        <li>
                            <span>Saturday ...............</span>
                            <span> 9:00 - 19:00</span>
                        </li>
                        <li>
                            <span>Sunday ...............</span>
                            <span> Closed</span>
                        </li>
                      
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Footer;