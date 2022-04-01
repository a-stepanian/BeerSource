import React, { useEffect, useState } from "react";
import BreweryCard from "../../components/breweryCard/BreweryCard";
import "./listBreweriesPage.css";
import { createApi } from "unsplash-js";

const unsplash = createApi({
  accessKey: process.env.REACT_APP_UNSPLASH,
});

const ListBreweriesPage = ({
  breweries,
  setShowBrewerySearchPage,
  setShowMapPage,
  setIsLoading,
  setShowListPage,
  showMenu,
  city,
  state,
}) => {
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
      <div
        className="cityImage"
        style={{ background: `center/cover url(${cityImgUrl})` }}
        alt={city}
      ></div>

      <section className="breweries">
        <div className="cityNameContainer">
          <h2>{city.toUpperCase()}</h2>
          <div className="bigArrowBox">
            <div className="arrowLeft"></div>
            <div className="arrowRight"></div>
          </div>
        </div>
        {breweries.map((brewery) => (
          <BreweryCard brewery={brewery} key={brewery.id} />
        ))}
        <div className="empty"></div>
      </section>
      <nav
        className="mapView"
        onClick={() => {
          setShowBrewerySearchPage(false);
          setShowListPage(false);
          setShowMapPage(true);
          setIsLoading(false);
        }}
      >
        <p>&#127758; Back to Map</p>
      </nav>
    </main>
  );
};

export default ListBreweriesPage;
