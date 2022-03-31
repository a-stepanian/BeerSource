import React, { useEffect, useState } from "react";
import "./recipePage.css";
import BeerCard from "../../components/beerCard/BeerCard";
import BigScreenRecipe from "../../components/bigScreenRecipe/BigScreenRecipe";
import Recipe from "../../components/recipe/Recipe";

const RecipePage = ({ setIsLoading, isLoading }) => {
  const [beers, setBeers] = useState([]);
  const [beerIndex, setBeerIndex] = useState(null);
  const [currentBeer, setCurrentBeer] = useState({});

  const findRecipes = async () => {
    const response = await fetch(
      "https://api.punkapi.com/v2/beers?page=5&per_page=12"
    );
    const beersJSON = await response.json();
    setBeers(beersJSON);
    setIsLoading(false);
  };

  useEffect(() => {
    findRecipes();
  }, []);

  useEffect(() => {
    const foundBeer = beers.filter((beer, index) => index === beerIndex)[0];
    return setCurrentBeer({ ...foundBeer });
  }, [beerIndex]);

  return (
    <>
      {!isLoading && (
        <main className="recipesMain">
          <aside className="largeScreenSection">
            <h2 className="largeScreenH2">
              {currentBeer.name ? currentBeer.name : "RECIPES"}
            </h2>
            {currentBeer.name && <BigScreenRecipe beer={currentBeer} />}
          </aside>
          <section className="recipes">
            <h2 className="homebrewRecipes">Homebrew Recipes</h2>
            {beers.map((beer, index) => {
              return (
                <BeerCard
                  key={index}
                  beer={beer}
                  index={index}
                  setBeerIndex={setBeerIndex}
                />
              );
            })}
          </section>
        </main>
      )}
    </>
  );
};

export default RecipePage;
