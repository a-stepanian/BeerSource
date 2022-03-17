import React, { useState } from "react";
import Breweries from "./Breweries";
import Loading from "./Loading";

const url = "https://api.openbrewerydb.org/breweries?by_city=";

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

const App = () => {
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [breweries, setBreweries] = useState([]);
  const [isBlank, setIsBlank] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    setIsBlank(false);
    setIsLoading(true);
    e.preventDefault();
    const citySearch = city.split(" ").join("_");
    const stateSearch = state.split(" ").join("_");
    const response = await fetch(`${url}${citySearch}&by_state=${stateSearch}`);
    const breweries = await response.json();
    setBreweries(breweries);
    setIsLoading(false);
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <header>
        <h1>BeerSource</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="city">City: </label>
          <input
            type="text"
            id="city"
            name="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <br />
          <label htmlFor="state">State: </label>
          <select
            id="state"
            name="state"
            value={state}
            onChange={(e) => setState(e.target.value)}
          >
            {usStates.map((state) => (
              <option value={state}>{state}</option>
            ))}
          </select>
          <button type="submit">Find Beers</button>
        </form>
      </header>
      {isBlank ? (
        <h1>search for beer!</h1>
      ) : (
        <main>
          <Breweries breweries={breweries} />
        </main>
      )}
    </>
  );
};

export default App;
