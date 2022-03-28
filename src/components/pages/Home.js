import React from "react";
import { Link } from "react-router-dom";
import Slider from "../inc/Slider";
import Vmc from "./inc/Vmc";
import Service1 from "../images/Service1.jpg";

function Home() {
    return(
        <anji>
            <Slider />
            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3 className="main-heading">Our Company</h3>
                            <div className="underline mx-auto"></div>
                            <p>
                                The carousel is a slideshow for cycling through a series of content, built with CSS 3D transforms and a bit of JavaScript. It works with a series of images, text, or custom markup. It also includes support for previous/next controls and indicators. In browsers where the Page Visibility API is supported, the carousel will avoid sliding when the webpage is not visible to the user (such as when the browser tab is inactive, the browser window is minimized, etc.).
                            </p>
                            <Link to="/about" className="btn btn-warning shadow">Read More</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Vision, Mission and Core Values */ }
            <Vmc />

            {/* Our Services */}
            <section className="section border-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-5 text-center">
                            <h3 className="main-heading">Our Services</h3>
                            <div className="underline mx-auto"></div>
                        </div>

                        <div className="col-md-4">
                            <div className="card shadow">
                                <img src={ Service1 } className="w-100 border-bottom" alt="services"/>
                                <div className="card-body">
                                    <h6>Services 1</h6>
                                    <div className="underline"></div>
                                    <p>The carousel is a slideshow for cycling through a series of content, built with CSS 3D</p>
                                    <Link to="./service" className="btn btn-link">Read More</Link>
                                </div>
                            </div>    
                        </div>
                        <div className="col-md-4">
                            <div className="card shadow">
                                <img src={ Service1 } className="w-100 border-bottom" alt="services"/>
                                <div className="card-body">
                                    <h6>Services 1</h6>
                                    <div className="underline"></div>
                                    <p>The carousel is a slideshow for cycling through a series of content, built with CSS 3D</p>
                                    <Link to="./service" className="btn btn-link">Read More</Link>
                                </div>
                            </div>    
                        </div>
                        <div className="col-md-4">
                            <div className="card shadow">
                                <img src={ Service1 } className="w-100 border-bottom" alt="services"/>
                                <div className="card-body">
                                    <h6>Services 1</h6>
                                    <div className="underline"></div>
                                    <p>The carousel is a slideshow for cycling through a series of content, built with CSS 3D</p>
                                    <Link to="./service" className="btn btn-link">Read More</Link>
                                </div>
                            </div>    
                        </div>
                    </div>
                </div>
            </section>

        </anji>    
    );
}

export default Home;