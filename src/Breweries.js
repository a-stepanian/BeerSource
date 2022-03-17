import React from "react";
import Brewery from "./Brewery";

const Breweries = ({ breweries }) => {
  return (
    <section className="breweries">
      {breweries.map((brewery) => (
        <Brewery brewery={brewery} key={brewery.id} />
      ))}
    </section>
  );
};

export default Breweries;
