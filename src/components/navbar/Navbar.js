import React, { useState } from "react";
import "./navbar.css";
import HamburgerMenu from "../hamburgerMenu/HamburgerMenu";
import { useGlobalContext } from "../../context";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { setCity, setState, setIsLoading } = useGlobalContext();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header>
      {/* Fixed Navbar */}
      <div className="navbar">
        <h1 className="beerSource">&#127866;BeerSource</h1>
        <nav className="largeScreenNavButtons">
          <NavLink
            className="menuButton menuButtonBigScreen"
            to="/brewery-finder/search"
            onClick={() => {
              setCity("");
              setState("");
            }}
          >
            Find A Brewery
          </NavLink>
          <NavLink
            className="menuButton menuButtonBigScreen"
            to="/brewery-finder/recipes"
          >
            Brew Your Own
          </NavLink>
        </nav>

        <HamburgerMenu showMenu={showMenu} setShowMenu={setShowMenu} />
      </div>

      {/* Mobile Collapsible Navigation Menu  */}

      <nav className={showMenu ? "menu opened" : "menu"}>
        {showMenu && (
          <>
            <NavLink
              className="menuButton menuButtonBigScreen"
              to="/brewery-finder/search"
              onClick={() => {
                setCity("");
                setState("");
                setShowMenu(false);
              }}
            >
              Find A Brewery
            </NavLink>
            <NavLink
              className="menuButton menuButtonBigScreen"
              to="/brewery-finder/recipes"
              onClick={() => {
                setShowMenu(false);
              }}
            >
              Brew Your Own
            </NavLink>
          </>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
