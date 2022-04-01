import React, { useEffect, useState } from "react";
import "./brewerySearchPage.css";

const usStates = [
  "",
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "District of Columbia",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];

const Find = ({ handleSubmit, city, setCity, state, setState, isError }) => {
  // const [windowHeight, setWindowHeight] = useState("");

  // useEffect(() => {
  //   window.addEventListener("resize", () => {
  //     setWindowHeight(`${window.innerHeight}px`);
  //   });
  //   return window.removeEventListener("resize", () => {
  //     setWindowHeight(`${window.innerHeight}px`);
  //   });
  // });

  // // For mobile safari navbar issue
  // useEffect(() => {
  //   const findMain = document.querySelector(".findMain");

  //   window.addEventListener("resize", () => {
  //     findMain.style.setProperty("height", windowHeight);
  //   });
  // }, [windowHeight]);

  return (
    <main className="findMain">
      {isError ? (
        <>
          <h2>No breweries found</h2>
          <h2>Please try again</h2>
        </>
      ) : (
        <>
          {" "}
          <h2>Find beer you love</h2>
          <h2>at the source</h2>{" "}
        </>
      )}

      <form onSubmit={handleSubmit}>
        <div className="cityInput">
          <label htmlFor="city">City: </label>
          <input
            type="text"
            autoComplete="off"
            autoFocus
            id="city"
            name="city"
            value={city}
            required
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div className="stateInput">
          <label htmlFor="state">State: </label>
          <select
            id="state"
            name="state"
            required
            value={state}
            onChange={(e) => setState(e.target.value)}
          >
            {usStates.map((state, index) => (
              <option key={index} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>

        <button type="submit">Go!</button>
      </form>
    </main>
  );
};

export default Find;
