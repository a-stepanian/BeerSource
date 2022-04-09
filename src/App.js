import React from "react";
import ListBreweriesPage from "./views/listBreweriesPage/ListBreweriesPage";
import BrewerySearchPage from "./views/brewerySearchPage/BrewerySearchPage";
import MapPage from "./views/mapPage/MapPage";
import RecipePage from "./views/recipePage/RecipePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "./views/SharedLayout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/brewery-finder" element={<SharedLayout />}>
          <Route path="search" element={<BrewerySearchPage />} />
          <Route path="map" element={<MapPage />} />
          <Route path="breweries" element={<ListBreweriesPage />} />
          <Route path="recipes" element={<RecipePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
