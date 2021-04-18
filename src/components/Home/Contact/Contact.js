import React from 'react';
import "./contact.css"
const Contact = () => {
    return (
        <section className="py-5">
            <div className="contact-container">
                <div className="text-center">
                    <h1 className="fw-bolder font-color-ping">CONTACT US</h1>
                </div>
                <div>
                    <form>
                        <div className="formContainer">
                            <input className="form-control inputFiled"  type="text" placeholder="First Name"/>
                            <input className="form-control inputFiled" type="text" placeholder="Last Name"/>
                            <input className="form-control inputFiled" type="text" placeholder="E-mail Address"/>
                            <input className="form-control inputFiled" type="text" placeholder="Place Number"/>
                        </div>
                    
                        <textarea className="w-100 mt-5"rows="8" placeholder="Enter Your Messages"></textarea>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;