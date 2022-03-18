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
  const [lng, setLng] = useState(null);
  const [lat, setLat] = useState(null);

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

    if (breweries.length === 0) {
      setIsSearch(true);
      setIsList(false);
      setIsError(true);
      setCity("");
      setState("");
      setBreweries([]);
      setIsLoading(false);
      return;
    }

    // Get average location coordinates and set lat/long for centering the map
    let sumLat = 0;
    let sumLng = 0;
    let count = 0;

    for (let i = 0; i < breweries.length; i++) {
      if (breweries[i].latitude && breweries[i].latitude) {
        sumLat += Number(breweries[i].latitude);
        sumLng += Number(breweries[i].longitude);
        count++;
      }
    }
    setLat(sumLat / count);
    setLng(sumLng / count);

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
    setIsSearch(false);
    setIsLoading(false);
    setIsMap(true);
  };

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
              setIsLoading(false);
            }}
          >
            &#127758;
          </button>
          <button
            onClick={() => {
              setIsMap(false);
              setIsSearch(true);
              setIsError(false);
              setIsLoading(false);
            }}
          >
            &#128269;
          </button>
        </nav>
      </header>

      {isLoading && <Loading />}

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

      {isMap && (
        <Map
          setIsLoading={setIsLoading}
          lat={lat}
          lng={lng}
          breweries={breweries}
        />
      )}
    </>
  );
};

export default App;
