import React, { useEffect, useState } from "react";
import "./recipePage.css";
import Recipe from "./Recipe";

const RecipePage = ({ setIsLoading }) => {
  const [beers, setBeers] = useState([]);

  const findRecipes = async () => {
    setIsLoading(true);
    const response = await fetch(
      "https://api.punkapi.com/v2/beers?page=1&per_page=10"
    );
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
        <div className="recipePageTitleBox">
          <h1>Homebrew Receipes</h1>
        </div>
        {beers.map((beer, index) => {
          return <Recipe key={index} beer={beer} />;
        })}
      </section>
    </main>
  );
};

export default RecipePage;
