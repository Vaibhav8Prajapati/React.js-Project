import React from "react";
import Shows from "./Component/Shows";
import Footer from "./Component/Footer";
export default function Home() {
  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0">
        <img
          src="https://film-book.com/wp-content/uploads/2021/12/all-american-homecoming-tv-show-banner-poster-01-700x400-1.jpg"
          className="card-img"
          alt="background"
          height="550px"
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0">NEW SHOWS</h5>
            <p className="card-text lead fs-2">
              TRENDING SHOWS
            </p>
          </div>
        </div>
        </div>
        <Shows/>
        <Footer/>
      </div>

  );
}
