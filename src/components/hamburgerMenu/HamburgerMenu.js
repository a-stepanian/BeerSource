import React from "react";
import "./hamburgerMenu.css";

const HamburgerMenu = ({ showMenu, setShowMenu }) => {
  return (
    <div className="hamburger" onClick={() => setShowMenu(!showMenu)}>
      {showMenu ? (
        <>
          <div className="bar topOpen"></div>
          <div className="bar bottomOpen"></div>
          <div className="bar leftXOpen"></div>
          <div className="bar rightXOpen"></div>
        </>
      ) : (
        <>
          <div className="bar topClosed"></div>
          <div className="bar bottomClosed"></div>
          <div className="bar leftXClosed"></div>
          <div className="bar rightXClosed"></div>
        </>
      )}
    </div>
  );
};

export default HamburgerMenu;
