import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Shows = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((response) => response.json())
      .then((data) => {
        const promises = data.map((show) =>
          fetch(`https://api.tvmaze.com/shows/${show.show.id}`).then(
            (response) => response.json()
          )
        );
        Promise.all(promises).then((showDetails) => {
          const mergedShows = data.map((show, index) => {
            return {
              ...show,
              ...showDetails[index],
            };
          });
          setShows(mergedShows);
        });
      });
  }, []);

  return (
    <div className="container-fluid mt-5">
      <div className="row text-center">
        <ul className="d-flex flex-wrap justify-content-center">
          {shows.map((show) => (
            <div className="col-3 col-md-3 mt-5">
              <div className="card" style={{ width: "18rem" }}>
                <li key={show.id} style={{ listStyle: "none" }}>
                  {show.image?.medium && (
                    <img
                      src={show.image.medium}
                      alt={show.name}
                      className="card-img-top"
                    />
                  )}
                  <div className="card-body">
                    <h2 className="card-title">{show.name}</h2>
                    <p className="card-text">{show.type}</p>
                    <NavLink
                      to={`/shows/${show.show.id}`}
                      className="btn btn-outline-dark">
                      Detail
                    </NavLink>
                  </div>
                </li>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Shows;
