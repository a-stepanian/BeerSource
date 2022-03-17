import React, { useState, useRef, useEffect } from "react";
import Breweries from "./Breweries";
import Loading from "./Loading";
import Find from "./Find";
import Map from "./Map";

const url = "https://api.openbrewerydb.org/breweries?by_city=";

const App = () => {
  const [isSearch, setIsSearch] = useState(false);
  const [isList, setIsList] = useState(false);
  const [isMap, setIsMap] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [breweries, setBreweries] = useState([]);

  const handleSubmit = async (e) => {
    setIsLoading(true);
    setIsSearch(false);
    e.preventDefault();
    const citySearch = city.split(" ").join("_");
    const stateSearch = state.split(" ").join("_");
    const response = await fetch(`${url}${citySearch}&by_state=${stateSearch}`);
    const breweries = await response.json();
    if (breweries.length > 0) {
      setBreweries(breweries);
      setCity("");
      setState("");
      setIsSearch(false);
      setIsList(true);
      setIsLoading(false);
    } else {
      setBreweries([]);
      setCity("");
      setState("");
      setIsSearch(true);
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <header>
        <h1>&#127866;BeerSource</h1>
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

      {isMap && <Map />}
    </>
  );
};

export default App;
