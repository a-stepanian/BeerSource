import React, { useState, useRef, useEffect } from "react";
import Breweries from "./Breweries";
import Loading from "./Loading";
import Find from "./Find";
import Map from "./Map";

const url = "https://api.openbrewerydb.org/breweries?by_city=";

const App = () => {
  const [isSearch, setIsSearch] = useState(true);
  const [isList, setIsList] = useState(false);
  const [isMap, setIsMap] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [breweries, setBreweries] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const citySearch = city.split(" ").join("_");
    const stateSearch = state.split(" ").join("_");

    const response = await fetch(
      `${url}${citySearch}&by_state=${stateSearch}&page=1`
    );
    const breweries = await response.json();

    const response2 = await fetch(
      `${url}${citySearch}&by_state=${stateSearch}&page=2`
    );
    const breweries2 = await response2.json();

    const response3 = await fetch(
      `${url}${citySearch}&by_state=${stateSearch}&page=3`
    );
    const breweries3 = await response3.json();

    const response4 = await fetch(
      `${url}${citySearch}&by_state=${stateSearch}&page=4`
    );
    const breweries4 = await response4.json();

    const response5 = await fetch(
      `${url}${citySearch}&by_state=${stateSearch}&page=5`
    );
    const breweries5 = await response5.json();

    const response6 = await fetch(
      `${url}${citySearch}&by_state=${stateSearch}&page=6`
    );
    const breweries6 = await response6.json();

    setBreweries([
      ...breweries,
      ...breweries2,
      ...breweries3,
      ...breweries4,
      ...breweries5,
      ...breweries6,
    ]);
    setCity("");
    setState("");
    setIsSearch(false);
    setIsList(true);

    // if (breweries.length > 0) {
    //   setBreweries(breweries);
    //   setCity("");
    //   setState("");
    //   setIsSearch(false);
    //   setIsList(true);
    // } else {
    //   setBreweries([]);
    //   setCity("");
    //   setState("");
    // }
    setIsLoading(false);
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <header>
        <h1>&#127866;BeerSource</h1>
        <nav className="navButtons">
          <button
            onClick={() => {
              setIsSearch(false);
              setIsList(false);
              setIsMap(true);
            }}
          >
            &#127758;
          </button>
          <button
            onClick={() => {
              setIsMap(false);
              setIsSearch(true);
            }}
          >
            &#128269;
          </button>
        </nav>
      </header>

      {isSearch && (
        <Find
          handleSubmit={handleSubmit}
          city={city}
          setCity={setCity}
          state={state}
          setState={setState}
        />
      )}

      {isList && (
        <main className="breweriesMain">
          <Breweries breweries={breweries} />
        </main>
      )}

      {isMap && <Map setIsLoading={setIsLoading} />}
    </>
  );
};

export default App;
