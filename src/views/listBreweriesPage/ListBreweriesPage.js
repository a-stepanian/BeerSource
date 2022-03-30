import React from "react";
import BreweryCard from "../../components/breweryCard/BreweryCard";
import "./listBreweriesPage.css";

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
  return (
    <>
      <img src="" alt={city} />
      <section className="breweries">
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
    </>
  );
};

export default ListBreweriesPage;
