import React from "react";
import "./brewery.css";

const Brewery = ({ brewery }) => {
  const {
    name,
    street,
    city,
    country,
    latitude,
    longitude,
    phone,
    postal_code,
    state,
    updated_at,
    website_url,
  } = brewery;
  return (
    <a className="breweryCard" href={website_url} target="_blank">
      <h2>{name}</h2>
      <p>
        {street}
        <br />
        {city}, {state} {postal_code.slice(0, 5)}
      </p>
    </a>
  );
};

export default Brewery;
