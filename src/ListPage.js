import React from "react";
import Brewery from "./Brewery";
import "./listPage.css";

const ListPage = ({
  breweries,
  setShowBrewerySearchPage,
  setShowMapPage,
  setIsLoading,
  setShowListPage,
}) => {
  return (
    <>
      <section className="breweries">
        {breweries.map((brewery) => (
          <Brewery brewery={brewery} key={brewery.id} />
        ))}
      </section>

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
    </>
  );
};

export default ListPage;
