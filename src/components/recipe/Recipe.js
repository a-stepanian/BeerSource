import React from "react";
import "./recipe.css";

const Recipe = ({ beer }) => {
  return (
    <div className="recipe">
      <p>
        <span className="bold">Mash Temperature: </span>
        {beer.method.mash_temp[0].temp.value}{" "}
        {beer.method.mash_temp[0].temp.unit}
        <br />
        <span className="bold">Mash Time: </span>
        {beer.method.mash_temp[0].duration
          ? beer.method.mash_temp[0].duration
          : "25"}{" "}
        minutes
        <br />
        <span className="bold">Water: </span>
        {beer.boil_volume.value} {beer.boil_volume.unit}
      </p>
      <div className="line"></div>
      <h4>Malt</h4>
      <ul>
        {beer.ingredients.malt.map((malt, index) => {
          return (
            <li key={index} className="ingredient">
              <span className="bold">{malt.amount.value} kg </span>
              {malt.name}
            </li>
          );
        })}
      </ul>
      <div className="line"></div>
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

      {beer.ingredients.hops.filter((hop) => hop.add === "end").length > 0 && (
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
  );
};

export default Recipe;
