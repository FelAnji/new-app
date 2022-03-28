import React from "react";
import Vmc from "./inc/Vmc";

function About() {
    return(
        <anji>
            <section className="py-4 bg-info">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 my-auto">
                            <h4>About Us</h4>
                        </div>
                        <div className="col-md-8 my-auto">
                            <h6 className="float-end">
                                Home / About Us
                            </h6>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section border-bottom">
                <div className="container">
                    <h5 className="main-heading">Our Company</h5>
                    <div className="underline"></div>
                    <p>The carousel is a slideshow for cycling through a series of content, built with CSS 3D transforms and a bit of JavaScript. It works with a series of images, text,
                    or custom markup. It also includes support for previous/next controls and indicators. In browsers where the Page Visibility API is supported, the carousel will avoid sliding when the webpage is not visible to the user (such as when the browser tab is inactive, the browser window is minimized, etc.).
                    </p>
                </div>
            </section>

            <Vmc />
        </anji>
    );
}

export default About;