import React, { useEffect, useState } from "react";
import "./recipePage.css";

const RecipePage = ({ setIsLoading }) => {
  const [beers, setBeers] = useState([]);

  const findRecipes = async () => {
    setIsLoading(true);
    const response = await fetch("https://api.punkapi.com/v2/beers");
    const beersJSON = await response.json();
    console.log(beersJSON);
    setBeers(beersJSON);
    setIsLoading(false);
  };

  useEffect(() => {
    findRecipes();
  }, []);

  return (
    <main className="recipesMain">
      <section className="recipes">
        <h1>Homebrewer Recipes</h1>
        {beers.map((beer, index) => {
          const { name, image_url, abv, description, tagline } = beer;

          return (
            <article className="recipeCard" key={index}>
              <header>
                <h2>{name}</h2>
                <h3>{tagline}</h3>
                <div className="line"></div>
              </header>
              <div className="cardBody">
                <img className="beerImage" src={image_url} alt={name} />
                <p>{description}</p>
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
};

export default RecipePage;
