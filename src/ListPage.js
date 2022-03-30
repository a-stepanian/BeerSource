import React from "react";
import BreweryCard from "./components/breweryCard/BreweryCard";
import "./listPage.css";

const ListPage = ({
  breweries,
  setShowBrewerySearchPage,
  setShowMapPage,
  setIsLoading,
  setShowListPage,
  showMenu,
}) => {
  return (
    <>
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

export default ListPage;
