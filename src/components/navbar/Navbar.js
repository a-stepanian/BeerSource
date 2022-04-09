import React, { useState } from "react";
import "./navbar.css";
import HamburgerMenu from "../hamburgerMenu/HamburgerMenu";
import { useGlobalContext } from "../../context";

const Navbar = () => {
  const {
    setShowMapPage,
    setShowListPage,
    setShowBrewerySearchPage,
    setIsLoading,
    setShowRecipePage,
    setCity,
    setState,
  } = useGlobalContext();

  const [showMenu, setShowMenu] = useState(false);

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
              setIsLoading(false);
            }}
          >
            Brew Your Own
          </button>
        </nav>

        <HamburgerMenu showMenu={showMenu} setShowMenu={setShowMenu} />
      </div>

      {/* Mobile Collapsible Navigation Menu  */}

      <nav className={showMenu ? "menu opened" : "menu"}>
        {showMenu && (
          <>
            <button
              className="menuButton"
              onClick={() => {
                setShowMapPage(false);
                setShowListPage(false);
                setShowBrewerySearchPage(true);
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
                setShowMapPage(false);
                setShowListPage(false);
                setShowBrewerySearchPage(false);
                setShowMenu(!showMenu);
                setShowRecipePage(true);
                setIsLoading(false);
              }}
            >
              Brew Your Own
            </button>
          </>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
