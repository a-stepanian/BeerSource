import React from "react";
import "./loading.css";

const Loading = () => {
  return (
    <main className="loading">
      <h2>Finding Beers...</h2>
      <section className="cheers">
        <div className="beerLeft">&#127866;</div>
        <div className="star">&#127775;</div>
        <div className="beerRight">&#127866;</div>
      </section>
    </main>
  );
};

export default Loading;
