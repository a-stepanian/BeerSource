import React, { useState } from "react";
import "./bigScreenRecipe.css";

const BigScreenRecipe = ({ beer }) => {
  const temp = beer.method.mash_temp[0].temp;
  const duration = beer.method.mash_temp[0].duration;
  const volume = beer.boil_volume;
  return (
    <div className="recipeBig">
      <h3 className="recipeH3">Recipe</h3>
      <div className="fullRecipeWrapper">
        <div className="recipeBigLeftCol">
          <div className="tempBox">
            <h4>Brewer's Notes</h4>{" "}
            <p className="ingredient">
              <span className="bold">Mash Temp: </span>
              {temp.value} {temp.unit}
              <br />
              <span className="bold">Mash Time: </span>
              {duration ? duration : "25"} minutes
              <br />
              <span className="bold">Water: </span>
              {volume.value} {volume.unit}
            </p>
          </div>

          <div className="grainBox">
            <h4>Grain Bill</h4>
            <ul className="ingredient">
              {beer.ingredients.malt.map((malt, index) => {
                return (
                  <li key={index}>
                    <span className="bold">{malt.amount.value} kg </span>
                    {malt.name}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="hopBox">
          <h4>Hop Additions</h4>
          {beer.ingredients.hops.filter((hop) => hop.add === "start").length >
            0 && (
            <>
              <h5 className="boil">Start of boil</h5>
              <div className="ingredient">
                {beer.ingredients.hops
                  .filter((hop) => hop.add === "start")
                  .map((hop, index) => {
                    return (
                      <li key={index}>
                        <p>
                          <span className="bold">{hop.amount.value}g</span>{" "}
                          {hop.name}
                        </p>
                      </li>
                    );
                  })}
              </div>
            </>
          )}

          {beer.ingredients.hops.filter((hop) => hop.add === "middle").length >
            0 && (
            <>
              <h5 className="boil">Middle of boil</h5>

              <div className="ingredient">
                {beer.ingredients.hops
                  .filter((hop) => hop.add === "middle")
                  .map((hop, index) => {
                    return (
                      <li key={index}>
                        <p>
                          <span className="bold">{hop.amount.value}g</span>{" "}
                          {hop.name}
                        </p>
                      </li>
                    );
                  })}
              </div>
            </>
          )}

          {beer.ingredients.hops.filter((hop) => hop.add === "end").length >
            0 && (
            <>
              <h5 className="boil">End of boil</h5>
              <div className="ingredient">
                {beer.ingredients.hops
                  .filter((hop) => hop.add === "end")
                  .map((hop, index) => {
                    return (
                      <li key={index}>
                        <p>
                          <span className="bold">{hop.amount.value}g</span>{" "}
                          {hop.name}
                        </p>
                      </li>
                    );
                  })}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default BigScreenRecipe;
