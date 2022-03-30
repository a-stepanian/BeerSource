import React, { useState } from "react";
import "./navbar.css";
import HamburgerMenu from "../hamburgerMenu/HamburgerMenu";

const Navbar = ({
  setShowMapPage,
  setShowListPage,
  setShowBrewerySearchPage,
  setIsError,
  setIsLoading,
  setShowRecipePage,
  showMenu,
  setShowMenu,
  setCity,
  setState,
}) => {
  return (
    <header>
      {/* Fixed Navbar */}
      <div className="navbar">
        <h1 className="beerSource">&#127866;BeerSource</h1>
        <nav className="largeScreenNavButtons">
          <button
            className="menuButton menuButtonBigScreen"
            onClick={() => {
              setShowMapPage(false);
              setShowListPage(false);
              setShowBrewerySearchPage(true);
              setIsError(false);
              setIsLoading(false);
              setShowRecipePage(false);
              setCity("");
              setState("");
            }}
          >
            Find A Brewery
          </button>
          <button
            className="menuButton menuButtonBigScreen"
            onClick={() => {
              setShowRecipePage(true);
              setShowMapPage(false);
              setShowListPage(false);
              setShowBrewerySearchPage(false);
              setIsError(false);
              setIsLoading(false);
            }}
          >
            Brew Your Own
          </button>
        </nav>

        <HamburgerMenu showMenu={showMenu} setShowMenu={setShowMenu} />
      </div>

      {/* Mobile Collapsible Navigation Menu  */}
      {showMenu && (
        <nav className="menu">
          <button
            className="menuButton"
            onClick={() => {
              setShowMapPage(false);
              setShowListPage(false);
              setShowBrewerySearchPage(true);
              setIsError(false);
              setIsLoading(false);
              setShowRecipePage(false);
              setShowMenu(!showMenu);
              setCity("");
              setState("");
            }}
          >
            Find A Brewery
          </button>
          <button
            className="menuButton"
            onClick={() => {
              setIsLoading(true);
              setShowMapPage(false);
              setShowListPage(false);
              setShowBrewerySearchPage(false);
              setIsError(false);
              setShowMenu(!showMenu);
              setShowRecipePage(true);
            }}
          >
            Brew Your Own
          </button>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
