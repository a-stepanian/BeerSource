import React, { useState, useRef, useEffect } from "react";
import ListBreweriesPage from "./views/listBreweriesPage/ListBreweriesPage";
import Loading from "./components/loading/Loading";
import BrewerySearchPage from "./views/brewerySearchPage/BrewerySearchPage";
import MapPage from "./views/mapPage/MapPage";
import Navbar from "./components/navbar/Navbar";
import RecipePage from "./views/recipePage/RecipePage";

const App = () => {
  const [showBrewerySearchPage, setShowBrewerySearchPage] = useState(true);
  const [showMapPage, setShowMapPage] = useState(false);
  const [showListPage, setShowListPage] = useState(false);
  const [showRecipePage, setShowRecipePage] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [breweries, setBreweries] = useState([]);
  const [lng, setLng] = useState(null);
  const [lat, setLat] = useState(null);
  const [cityImgUrl, setCityImgUrl] = useState(null);

  return (
    <>
      <Navbar
        setShowMapPage={setShowMapPage}
        setShowListPage={setShowListPage}
        setShowBrewerySearchPage={setShowBrewerySearchPage}
        setShowRecipePage={setShowRecipePage}
        setIsLoading={setIsLoading}
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        setCity={setCity}
        setState={setState}
      />

      {isLoading && <Loading />}

      {showBrewerySearchPage && (
        <BrewerySearchPage
          city={city}
          setCity={setCity}
          state={state}
          setState={setState}
          setShowMenu={setShowMenu}
          setIsLoading={setIsLoading}
          setBreweries={setBreweries}
          setShowMapPage={setShowMapPage}
          setShowListPage={setShowListPage}
          setShowBrewerySearchPage={setShowBrewerySearchPage}
          setLat={setLat}
          setLng={setLng}
        />
      )}

      {showListPage && (
        <ListBreweriesPage
          city={city}
          state={state}
          breweries={breweries}
          setIsLoading={setIsLoading}
          setShowMapPage={setShowMapPage}
          setShowListPage={setShowListPage}
          setShowBrewerySearchPage={setShowBrewerySearchPage}
          showMenu={showMenu}
        />
      )}

      {showMapPage && (
        <MapPage
          setIsLoading={setIsLoading}
          showMapPage={showMapPage}
          setShowMapPage={setShowMapPage}
          setShowListPage={setShowListPage}
          setShowBrewerySearchPage={setShowBrewerySearchPage}
          lat={lat}
          lng={lng}
          breweries={breweries}
          showMenu={showMenu}
        />
      )}

      {showRecipePage && (
        <RecipePage setIsLoading={setIsLoading} isLoading={isLoading} />
      )}
    </>
  );
};

export default App;
