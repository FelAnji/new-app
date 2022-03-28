import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return(
        <section className="section footer bg-dark text-white">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h6>Company Information</h6>
                        <hr/>
                        <p>The carousel is a slideshow for cycling through a series of content, built with CSS 3D transforms and a bit of J</p>
                    </div>
                    <div className="col-md-4 footer-links">
                        <h6>Quick Links</h6>
                        <hr/>
                        <div><Link to="/">Home</Link></div>
                        <div><Link to="/about">About</Link></div>
                        <div><Link to="/contact">Contact</Link></div>
                        <div><Link to="/">Blog</Link></div>
                    </div>
                    <div className="col-md-4">
                        <h6>Contact Information</h6>
                        <hr/>
                        <div><p className="text-white mb-1">No5, Babalola Street, Odoguyan</p></div>
                        <div><p className="text-white mb-1">+234 703XXX 18</p></div>
                        <div><p className="text-white mb-1">+1 768 4943</p></div>
                        <div><p className="text-white mb-1">contact@emperora.com</p></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Footer;