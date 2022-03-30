import React, { useState } from "react";
import "./beerCard.css";
import Recipe from "../recipe/Recipe";

const BeerCard = ({ beer }) => {
  const [showMore, setShowMore] = useState(false);

  const { name, image_url, abv, description, tagline } = beer;
  return (
    <article className="recipeCard">
      <header>
        <img className="beerImage" src={image_url} alt={name} />
        <div className="cardTitle">
          <h2>{name}</h2>
          <h3>{tagline}</h3>
          <h4>{abv}% ABV</h4>
        </div>
      </header>
      <div className="line"></div>
      <section className="cardBody">
        <p className="description">
          {description.length > 75 &&
            !showMore &&
            `${description.slice(0, 75)}...`}
          {description.length > 75 && showMore && description}
          {description.length <= 75 && description}

          {description.length > 75 && (
            <span
              className="showMoreButton"
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? "show less" : "show more"}
            </span>
          )}
        </p>
        <Recipe beer={beer} />
      </section>
    </article>
  );
};

export default BeerCard;
