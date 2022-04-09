import React from "react";
import "./breweryCard.css";

const BreweryCard = ({ brewery }) => {
  const { name, street, city, phone, postal_code, state, website_url } =
    brewery;
  const area = String(phone).slice(0, 3);
  const three = String(phone).slice(3, 6);
  const four = String(phone).slice(6, 10);

  return (
    <article className="breweryCard">
      <h2>{name}</h2>
      {website_url && (
        <a className="website" href={website_url} target="_blank">
          &#127760; <span className="link">Website</span>
        </a>
      )}

      {four && (
        <p className="phone">
          &#128222; {area}-{three}-{four}
        </p>
      )}

      {street && (
        <div className="address">
          <div className="flag">&#128681;</div>
          <p>
            {street}
            <br />
            {city}, {state} {postal_code.slice(0, 5)}
          </p>
        </div>
      )}
    </article>
  );
};

export default BreweryCard;
