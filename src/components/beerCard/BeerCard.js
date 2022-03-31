import React, { useState } from "react";
import "./beerCard.css";
import Recipe from "../recipe/Recipe";

const BeerCard = ({ beer }) => {
  const [showRecipe, setShowRecipe] = useState(false);

  const { name, image_url, abv, description, tagline } = beer;
  return (
    <article className="beerCard">
      <header>
        <div className="imageContainer">
          <img className="beerImage" src={image_url} alt={name} />
        </div>
        <div className="cardTitle">
          <h2>{name}</h2>
          <h3>{tagline}</h3>
          <h4>{abv}% ABV</h4>
        </div>
      </header>
      <div className="line"></div>
      <body className="cardBody">
        {/* Only display the first sentence of beer description */}
        <p className="description">{`${description.split(".").shift()}.`}</p>

        <div className="recipeBox">
          <button onClick={() => setShowRecipe(!showRecipe)}>
            <h3>Recipe</h3>
            <div
              className={
                showRecipe ? "littleArrowBox flipped" : "littleArrowBox"
              }
            >
              <div className="littleArrowLeft"></div>
              <div className="littleArrowRight"></div>
            </div>
          </button>
          {showRecipe && <Recipe beer={beer} />}
        </div>
      </body>
    </article>
  );
};

export default BeerCard;
