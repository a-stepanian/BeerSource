import React from "react";
import "./homePage.css";

const HomePage = () => {
  return (
    <main className="homePageMain">
      <section>
        <h1>Welcome to BeerSource</h1>
        <a href="/brewery-finder/search">Find A Brewery</a>
        <h1>or</h1>
        <a href="/brewery-finder/recipe">Brew Your Own</a>
      </section>
    </main>
  );
};

export default HomePage;
