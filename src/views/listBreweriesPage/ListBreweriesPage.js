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
        <h2 className="cityName">{city} breweries</h2>
        {breweries.map((brewery) => (
          <BreweryCard brewery={brewery} key={brewery.id} />
        ))}
      </section>
      {!showMenu && (
        <button
          className="list"
          onClick={() => {
            setShowBrewerySearchPage(false);
            setShowListPage(false);
            setShowMapPage(true);
            setIsLoading(false);
          }}
        >
          Map View &#127758;
        </button>
      )}
    </main>
  );
};

export default ListBreweriesPage;
