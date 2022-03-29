import React, { useState } from "react";
import "./navbar.css";

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
        <button className="menuButton" onClick={() => setShowMenu(!showMenu)}>
          menu
        </button>
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
