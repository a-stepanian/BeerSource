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
  const area = String(phone).slice(0, 3);
  const three = String(phone).slice(3, 6);
  const four = String(phone).slice(6, 10);

  return (
    <article className="breweryCard">
      <h2>{name}</h2>
      <a href={website_url} target="_blank">
        <h3>{website_url}</h3>
      </a>
      {four && (
        <h3>
          Phone: {area}-{three}-{four}
        </h3>
      )}
      <p>
        {street}
        <br />
        {city}, {state} {postal_code.slice(0, 5)}
      </p>
    </article>
  );
};

export default Brewery;
