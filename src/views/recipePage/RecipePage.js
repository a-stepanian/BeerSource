import React, { useEffect, useState } from "react";
import "./recipePage.css";
import BeerCard from "../../components/beerCard/BeerCard";

const RecipePage = ({ setIsLoading, isLoading }) => {
  const [beers, setBeers] = useState([]);

  const findRecipes = async () => {
    const response = await fetch(
      "https://api.punkapi.com/v2/beers?page=1&per_page=12"
    );
    const beersJSON = await response.json();
    setBeers(beersJSON);
    setIsLoading(false);
  };

  useEffect(() => {
    findRecipes();
  }, []);

  return (
    <>
      {!isLoading && (
        <main className="recipesMain">
          <aside className="largeScreenSection">
            <h2>RECIPES</h2>
          </aside>
          <section className="recipes">
            <h2 className="homebrewRecipes">Homebrew Recipes</h2>
            {beers.map((beer, index) => {
              return <BeerCard key={index} beer={beer} />;
            })}
          </section>
        </main>
      )}
    </>
  );
};

export default RecipePage;
