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
  const [isError, setIsError] = useState(false);
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [breweries, setBreweries] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setIsError(false);
    const citySearch = city.split(" ").join("_");
    const stateSearch = state.split(" ").join("_");

    const response = await fetch(
      `${url}${citySearch}&by_state=${stateSearch}&per_page=50&page=1`
    );
    const breweries = await response.json();

    const response2 = await fetch(
      `${url}${citySearch}&by_state=${stateSearch}&per_page=50&page=2`
    );
    const breweries2 = await response2.json();

    const response3 = await fetch(
      `${url}${citySearch}&by_state=${stateSearch}&per_page=50&page=3`
    );
    const breweries3 = await response3.json();

    const response4 = await fetch(
      `${url}${citySearch}&by_state=${stateSearch}&per_page=50&page=4`
    );
    const breweries4 = await response4.json();

    setBreweries([...breweries, ...breweries2, ...breweries3, ...breweries4]);
    setCity("");
    setState("");

    if (breweries.length > 0) {
      setIsSearch(false);
      setIsList(true);
    } else {
      setIsSearch(true);
      setIsList(false);
      setIsError(true);
    }
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
          isError={isError}
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
