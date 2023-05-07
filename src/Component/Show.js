import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function Product() {
  const { id } = useParams();
  const [show, setShow] = useState([]);

  useEffect(() => {
    const getShow = async () => {
      const response = await fetch(`https://api.tvmaze.com/search/shows/q=${id}`);
      setShow(await response.json());
    };
    getShow();
  }, []);

  const DisplayShows = () => {
    return (
      <div className="col-md-6" key={show.id}>
        <div className="col-md-6">
          <img
            src={show.url}
            alt={show.name}
            height="400px"
            width="400px"
          />
        </div>
        <div className="col-md-6">
          <h4 className="text-uppercase text-black-58">{show.type}</h4>
          <h1 className="display-5">{show.language}</h1>
          <p className="lead">{show.summary}</p>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="container py-5">
        <div className="row py-5">{<DisplayShows key={show.id} />}</div>
      </div>
    </div>
  );
}
