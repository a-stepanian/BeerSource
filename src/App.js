import React, { useState } from "react";
import Breweries from "./Breweries";
import Loading from "./Loading";
import Find from "./Find";

const url = "https://api.openbrewerydb.org/breweries?by_city=";

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
    if (breweries.length > 0) {
      setBreweries(breweries);
      setCity("");
      setState("");
      setIsLoading(false);
    } else {
      setBreweries([]);
      setCity("");
      setState("");
      setIsLoading(false);
      setIsBlank(true);
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <header>
        <h1>&#127866;BeerSource</h1>
        <button onClick={() => setIsBlank(true)}>Find Beers</button>
      </header>
      {isBlank ? (
        <Find
          handleSubmit={handleSubmit}
          city={city}
          setCity={setCity}
          state={state}
          setState={setState}
        />
      ) : (
        <main>
          <Breweries breweries={breweries} />
        </main>
      )}
    </>
  );
};

export default App;
