import React, { useState } from "react";
import "./navbar.css";
import HamburgerMenu from "./HamburgerMenu";

const Navbar = ({
  setShowMapPage,
  setShowListPage,
  setShowBrewerySearchPage,
  setIsError,
  setIsLoading,
  setShowRecipePage,
}) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header>
      <div className="navbar">
        <h1 className="beerSource">&#127866;BeerSource</h1>
        <button
          className="menuButton menuButtonBigScreen"
          onClick={() => {
            setShowMapPage(false);
            setShowListPage(false);
            setShowBrewerySearchPage(true);
            setIsError(false);
            setIsLoading(false);
            setShowRecipePage(false);
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

        <HamburgerMenu showMenu={showMenu} setShowMenu={setShowMenu} />
      </div>
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
            }}
          >
            Find A Brewery
          </button>
          <button
            className="menuButton"
            onClick={() => {
              setShowRecipePage(true);
              setShowMapPage(false);
              setShowListPage(false);
              setShowBrewerySearchPage(false);
              setIsError(false);
              setIsLoading(false);
              setShowMenu(!showMenu);
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
