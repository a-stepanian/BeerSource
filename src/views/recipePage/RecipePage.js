import React, { useEffect, useState } from "react";
import "./recipePage.css";
import BeerCard from "../../components/beerCard/BeerCard";
import BigScreenRecipe from "../../components/bigScreenRecipe/BigScreenRecipe";

const RecipePage = ({ setIsLoading, isLoading }) => {
  const [beers, setBeers] = useState([]);
  const [beerIndex, setBeerIndex] = useState(null);
  const [currentBeer, setCurrentBeer] = useState({});

  const findRecipes = async () => {
    const response = await fetch(
      "https://api.punkapi.com/v2/beers?page=1&per_page=50"
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
          <aside
            className={
              currentBeer.name
                ? "largeScreenSection"
                : "largeScreenSection centered"
            }
          >
            <h2
              className={
                currentBeer.name ? "largeScreenH2" : "largeScreenH2 choose"
              }
            >
              {currentBeer.name ? currentBeer.name : "Choose A Recipe"}
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
            <div className="empty"></div>
          </section>
        </main>
      )}
    </>
  );
};

export default RecipePage;
