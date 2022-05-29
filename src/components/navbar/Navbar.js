import React, { useState } from "react";
import "./navbar.css";
import HamburgerMenu from "../hamburgerMenu/HamburgerMenu";
import { useGlobalContext } from "../../context";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { setCity, setState } = useGlobalContext();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header>
      {/* Fixed Navbar */}
      <nav className="navbar">
        <NavLink to="/" onClick={() => setShowMenu(false)}>
          <h1 className="beerSource">&#127866;BeerSource</h1>
        </NavLink>
        <div className="largeScreenNavButtons">
          <NavLink
            to="/search"
            onClick={() => {
              setCity("");
              setState("");
            }}
          >
            <button className="menuButton menuButtonBigScreen">Search</button>
          </NavLink>
          <NavLink to="/recipes">
            <button className="menuButton menuButtonBigScreen">Recipes</button>
          </NavLink>
        </div>

        <HamburgerMenu showMenu={showMenu} setShowMenu={setShowMenu} />
      </nav>

      {/* Mobile Collapsible Navigation Menu  */}

      <nav className={showMenu ? "menu opened" : "menu"}>
        {showMenu && (
          <>
            <NavLink
              className="menuButton menuButtonBigScreen"
              to="/search"
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
              to="/recipes"
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
