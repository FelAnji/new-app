import React from "react";

function Contact() {
    return(
        <anji>
            <section className="py-4 bg-info">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 my-auto">
                            <h4>Contact Us</h4>
                        </div>
                        <div className="col-md-8 my-auto">
                            <h6 className="float-end">
                                Home / Contact Us
                            </h6>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
            <div className="container">
                <div className="card shadow">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-6">
                                <h6>Contact Form</h6>
                                <hr/>
                                <div className="form-group">
                                    <label className="mb-1">Full name</label>
                                    <input type="text" className="form-control" placeholder="Oniyele Anjola" />
                                </div>
                                <div className="form-group">
                                    <label className="mb-1">Phone Number</label>
                                    <input type="number" className="form-control" placeholder="+234 XXX 0000 XXX" />
                                </div>
                                <div className="form-group">
                                    <label className="mb-1">Email Address</label>
                                    <input type="email" className="form-control" placeholder="oniy*****la@gmail.com" />
                                </div>
                                <div className="form-group">
                                    <label className="mb-1">Message</label>
                                    <textarea rows="4" className="form-control" placeholder="Enter Your Message"></textarea>
                                </div>
                                <div className="form-group py-3">
                                    <button type="button" className="btn btn-primary shadow w-100">Send Message</button>
                                </div>
                            </div>
                            <div className="col-md-6 border-start">
                                <h5 className="main-heading">Address Information</h5>
                                <div className="underline"></div>
                                <p>#XXX Odogun, Lagos, Nigeria</p>
                                <p>Phone: +234 XXX 0000 XXX</p>
                                <p>Email: oniy*****la@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>
        </anji>
    );
}

export default Contact;