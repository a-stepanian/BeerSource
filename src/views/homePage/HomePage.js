import React from "react";
import "./homePage.css";

const HomePage = () => {
  return (
    <main className="homePageMain">
      <section>
        <h1>Welcome to BeerSource</h1>
        <a href="/brewery-finder/search">Find A Brewery</a>
        <p>or</p>
        <a href="/brewery-finder/recipes">Brew Your Own</a>
      </section>
    </main>
  );
};

export default HomePage;
