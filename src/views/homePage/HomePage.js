import React from "react";
import "./homePage.css";

const HomePage = () => {
  return (
    <main className="homePageMain">
      <section>
        <h1>Welcome to BeerSource</h1>
        <a href="/beersource/search">Find A Brewery</a>
        <p>or</p>
        <a href="/beersource/recipes">Brew Your Own</a>
      </section>
    </main>
  );
};

export default HomePage;
