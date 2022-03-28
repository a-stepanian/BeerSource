import React, { useState } from "react";

const Navbar = ({
  setIsMap,
  setIsList,
  setIsSearch,
  setIsError,
  setIsLoading,
  setIsSearchRecipe,
}) => {
  const [show, setShow] = useState(false);

  return (
    <header>
      <div className="navbar">
        <h1>&#127866;BeerSource</h1>
        <button className="menuIcon" onClick={() => setShow(!show)}>
          menu
        </button>
      </div>
      {show && (
        <nav className="menu">
          <button
            onClick={() => {
              setIsMap(false);
              setIsList(false);
              setIsSearch(true);
              setIsError(false);
              setIsLoading(false);
              setIsSearchRecipe(false);
              setShow(!show);
            }}
          >
            Find A Brewery
          </button>
          <button
            onClick={() => {
              setIsMap(false);
              setIsList(false);
              setIsSearch(false);
              setIsError(false);
              setIsLoading(false);
              setIsSearchRecipe(true);
              setShow(!show);
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
