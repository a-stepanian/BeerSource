import React, { useEffect, useState } from "react";
import BreweryCard from "../../components/breweryCard/BreweryCard";
import "./listBreweriesPage.css";
import { createApi } from "unsplash-js";
import { useGlobalContext } from "../../context";
import { Link } from "react-router-dom";

const unsplash = createApi({
  accessKey: process.env.REACT_APP_UNSPLASH,
});

const ListBreweriesPage = () => {
  const { breweries, city } = useGlobalContext();
  const [cityImgUrl, setCityImgUrl] = useState("");

  const getPhoto = async () => {
    const response = await unsplash.search.getPhotos({ query: city });
    setCityImgUrl(response.response.results[0].urls.regular);
  };

  useEffect(() => {
    getPhoto();
  }, []);

  return (
    <main className="breweriesMain">
      {/* Dynamic city background image */}
      <div
        className="cityImage"
        style={{ background: `center/cover url(${cityImgUrl})` }}
        alt={city}
      />

      <section className="breweries">
        {/* City name and scroll down arrow overlay */}
        <div className="cityNameContainer">
          <h2>{city.toUpperCase()}</h2>
          <div className="bigArrowBox">
            <div className="arrowLeft"></div>
            <div className="arrowRight"></div>
          </div>
        </div>
        {/* Brewery cards */}
        {breweries.map((brewery) => (
          <BreweryCard brewery={brewery} key={brewery.id} />
        ))}
        <div className="empty"></div>
      </section>

      <Link to="/beersource/map" className="mapView">
        <p>&#127758; Back to Map</p>
      </Link>
    </main>
  );
};

export default ListBreweriesPage;
