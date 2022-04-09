import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [showBrewerySearchPage, setShowBrewerySearchPage] = useState(true);
  const [showMapPage, setShowMapPage] = useState(false);
  const [showListPage, setShowListPage] = useState(false);
  const [showRecipePage, setShowRecipePage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [breweries, setBreweries] = useState([]);
  const [lng, setLng] = useState(null);
  const [lat, setLat] = useState(null);

  return (
    <AppContext.Provider
      value={{
        showBrewerySearchPage,
        setShowBrewerySearchPage,
        showMapPage,
        setShowMapPage,
        showListPage,
        setShowListPage,
        showRecipePage,
        setShowRecipePage,
        isLoading,
        setIsLoading,
        city,
        setCity,
        state,
        setState,
        breweries,
        setBreweries,
        lng,
        setLng,
        lat,
        setLat,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
