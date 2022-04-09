import React, { useState, useRef, useEffect } from "react";
import ListBreweriesPage from "./views/listBreweriesPage/ListBreweriesPage";
import Loading from "./components/loading/Loading";
import BrewerySearchPage from "./views/brewerySearchPage/BrewerySearchPage";
import MapPage from "./views/mapPage/MapPage";
import Navbar from "./components/navbar/Navbar";
import RecipePage from "./views/recipePage/RecipePage";
import { useGlobalContext } from "./context";

const App = () => {
  const {
    isLoading,
    showBrewerySearchPage,
    showListPage,
    showMapPage,
    showRecipePage,
  } = useGlobalContext();
  return (
    <>
      <Navbar />
      {isLoading && <Loading />}
      {showBrewerySearchPage && <BrewerySearchPage />}
      {showListPage && <ListBreweriesPage />}
      {showMapPage && <MapPage />}
      {showRecipePage && <RecipePage />}
    </>
  );
};

export default App;
