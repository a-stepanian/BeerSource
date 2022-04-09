import React, { useEffect, useState } from "react";
import "./recipePage.css";
import BeerCard from "../../components/beerCard/BeerCard";
import BigScreenRecipe from "../../components/bigScreenRecipe/BigScreenRecipe";
import { useGlobalContext } from "../../context";

const RecipePage = () => {
  const { setIsLoading, isLoading } = useGlobalContext();
  const [beers, setBeers] = useState([]);
  const [beerIndex, setBeerIndex] = useState(null);
  const [currentBeer, setCurrentBeer] = useState({});

  const scrollUp = () => {
    const scrollContainer = document.querySelector(".recipes");
    scrollContainer.scrollTo(0, 0);
  };

  // Fetch all recipe data from API
  const findRecipes = async () => {
    const response = await fetch(
      "https://api.punkapi.com/v2/beers?page=1&per_page=25"
    );
    const beersJSON = await response.json();
    setBeers(beersJSON);
    setIsLoading(false);
  };

  // Fetch the data when the page loads
  useEffect(() => {
    findRecipes();
  }, []);

  // Set currentBeer when user clicks on a beer card on large screens.
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
            <button className="backToTop" onClick={scrollUp}>
              Back to Top
            </button>
          </section>
        </main>
      )}
    </>
  );
};

export default RecipePage;
