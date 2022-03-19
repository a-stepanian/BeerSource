import React from "react";
import Brewery from "./Brewery";
import "./list.css";

const Breweries = ({
  breweries,
  setIsSearch,
  setIsMap,
  setIsLoading,
  setIsList,
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
          setIsSearch(false);
          setIsList(false);
          setIsMap(true);
          setIsLoading(false);
        }}
      >
        Map View &#127758;
      </button>
    </>
  );
};

export default Breweries;
