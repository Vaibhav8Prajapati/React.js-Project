import React from "react";
import Footer from "./Component/Footer";
const Aboutus = () => {
  return (
    <div classNameName="container mt-5">
      <section id="about-section">

            <div className="about-left">
                <img src="https://edit.org/photos/img/blog/exn-digital-poster-template-wifi-free.jpg-840.jpg" alt="About Img"/>
            </div>

            <div className="about-right">
                <h4>TV Shows</h4>
                <h1>About Us</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Debitis fugiat a dolorem at similique maxime dolorum dolore
                    enim dicta voluptatibus, illum recusandae, vel optio tempore
                    ipsum incidunt eum. Aspernatur, repellendus.
                </p>
              </div>
        </section>
    <Footer/>
    </div>
  );
};

export default Aboutus;
