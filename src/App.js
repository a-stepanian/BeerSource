import React, { useState, useRef, useEffect } from "react";
import List from "./ListPage";
import Loading from "./Loading";
import BrewerySearchPage from "./BrewerySearchPage";
import Map from "./MapPage";
import Navbar from "./Navbar";
import RecipePage from "./RecipePage";

const url = "https://api.openbrewerydb.org/breweries?by_city=";

const App = () => {
  const [showBrewerySearchPage, setShowBrewerySearchPage] = useState(true);
  const [showMapPage, setShowMapPage] = useState(false);
  const [showListPage, setShowListPage] = useState(false);
  const [showRecipePage, setShowRecipePage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [breweries, setBreweries] = useState([]);
  const [lng, setLng] = useState(null);
  const [lat, setLat] = useState(null);

  // Submit handler for brewery search
  // FIX ERROR WITH MULTIPLE SPACES IN BETWEEN WORDS
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setIsError(false);
    const citySearch = city.trim().split(" ").join("_");
    const stateSearch = state.split(" ").join("_");

    const response = await fetch(
      `${url}${citySearch}&by_state=${stateSearch}&per_page=50&page=1`
    );
    const breweries = await response.json();

    if (breweries.length === 0) {
      setShowBrewerySearchPage(true);
      setShowListPage(false);
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
    setShowBrewerySearchPage(false);
    setIsLoading(false);
    setShowMapPage(true);
  };

  return (
    <>
      <Navbar
        setShowMapPage={setShowMapPage}
        setShowListPage={setShowListPage}
        setShowBrewerySearchPage={setShowBrewerySearchPage}
        setShowRecipePage={setShowRecipePage}
        setIsError={setIsError}
        setIsLoading={setIsLoading}
      />

      {isLoading && <Loading />}

      {showBrewerySearchPage && (
        <BrewerySearchPage
          handleSubmit={handleSubmit}
          city={city}
          setCity={setCity}
          state={state}
          setState={setState}
          isError={isError}
        />
      )}

      {showListPage && (
        <main className="breweriesMain">
          <List
            breweries={breweries}
            setIsLoading={setIsLoading}
            setShowMapPage={setShowMapPage}
            setShowListPage={setShowListPage}
            setShowBrewerySearchPage={setShowBrewerySearchPage}
          />
        </main>
      )}

      {showMapPage && (
        <Map
          setIsLoading={setIsLoading}
          showMapPage={showMapPage}
          setShowMapPage={setShowMapPage}
          setShowListPage={setShowListPage}
          setIsError={setIsError}
          setShowBrewerySearchPage={setShowBrewerySearchPage}
          lat={lat}
          lng={lng}
          breweries={breweries}
        />
      )}

      {showRecipePage && <RecipePage setIsLoading={setIsLoading} />}
    </>
  );
};

export default App;
