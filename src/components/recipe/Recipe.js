import React, { useState } from "react";
import "./recipe.css";

const Recipe = ({ beer }) => {
  const [showMalt, setShowMalt] = useState(false);
  const [showHops, setShowHops] = useState(false);
  return (
    <>
      <h3>Ingredients</h3>
      <button onClick={() => setShowMalt(!showMalt)}>
        <h4>Malt</h4>
      </button>
      {showMalt && (
        <ul>
          {beer.ingredients.malt.map((malt, index) => {
            return (
              <li key={index} className="malt">
                <span className="bold">{malt.amount.value} kg </span>
                {malt.name}
              </li>
            );
          })}
        </ul>
      )}
      <button onClick={() => setShowHops(!showHops)}>
        <h4>Hops</h4>
      </button>
      {showHops &&
        beer.ingredients.hops.map((hop, index) => {
          return (
            <section key={index} className="ingredient">
              <p className="ingredientName">{hop.name}</p>
              <p>
                Add {hop.amount.value} {hop.amount.unit}{" "}
                {hop.add === "start" && "at the start"}
                {hop.add === "middle" && "in the middle"}
                {hop.add === "end" && "at the end"} of the boil.
              </p>
            </section>
          );
        })}
      <h4>
        Mash Temperature: {beer.method.mash_temp[0].temp.value}{" "}
        {beer.method.mash_temp[0].temp.unit}
      </h4>
      <h4>Mash Time: {beer.method.mash_temp[0].duration} minutes</h4>
      <h4>
        Recipe for {beer.boil_volume.value} {beer.boil_volume.unit}
      </h4>
    </>
  );
};

export default Recipe;
