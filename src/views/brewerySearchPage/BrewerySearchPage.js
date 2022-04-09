import React, { useState } from "react";
import { useGlobalContext } from "../../context";
import "./brewerySearchPage.css";

const usStates = [
  "",
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "District of Columbia",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];

const BrewerySearchPage = () => {
  const {
    city,
    setCity,
    state,
    setState,
    setIsLoading,
    setShowBrewerySearchPage,
    setBreweries,
    setShowListPage,
    setShowMapPage,
    setLat,
    setLng,
  } = useGlobalContext();

  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setIsError(false);
    const citySearch = city.trim().split(" ").join("_");
    const stateSearch = state.split(" ").join("_");

    const response = await fetch(
      `https://api.openbrewerydb.org/breweries?by_city=${citySearch}&by_state=${stateSearch}&per_page=50&page=1`
    );
    const breweries = await response.json();

    if (breweries.length === 0) {
      setShowBrewerySearchPage(true);
      setShowListPage(false);
      setIsError(true);
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
      `https://api.openbrewerydb.org/breweries?by_city=${citySearch}&by_state=${stateSearch}&per_page=50&page=2`
    );
    const breweries2 = await response2.json();

    const response3 = await fetch(
      `https://api.openbrewerydb.org/breweries?by_city=${citySearch}&by_state=${stateSearch}&per_page=50&page=3`
    );
    const breweries3 = await response3.json();

    const response4 = await fetch(
      `https://api.openbrewerydb.org/breweries?by_city=${citySearch}&by_state=${stateSearch}&per_page=50&page=4`
    );
    const breweries4 = await response4.json();

    setBreweries([...breweries, ...breweries2, ...breweries3, ...breweries4]);
    setShowBrewerySearchPage(false);
    setIsLoading(false);
    setShowMapPage(true);
  };

  return (
    <main className="findMain">
      {isError ? (
        <>
          <h2>No breweries found</h2>
          <h2>Please try again</h2>
        </>
      ) : (
        <>
          {" "}
          <h2>Find beer you love</h2>
          <h2>at the source</h2>{" "}
        </>
      )}

      <form onSubmit={handleSubmit}>
        <div className="cityInput">
          <label htmlFor="city">City: </label>
          <input
            type="text"
            autoComplete="off"
            autoFocus
            id="city"
            name="city"
            value={city}
            required
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div className="stateInput">
          <label htmlFor="state">State: </label>
          <select
            id="state"
            name="state"
            required
            value={state}
            onChange={(e) => setState(e.target.value)}
          >
            {usStates.map((state, index) => (
              <option key={index} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>

        <button type="submit">Go!</button>
      </form>
    </main>
  );
};

export default BrewerySearchPage;
