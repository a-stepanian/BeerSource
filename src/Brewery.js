import React from "react";

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
    <article>
      <a href={website_url}>{name}</a>
      <p>
        {street}
        <br />
        {city}, {state} {postal_code.slice(0, 5)}
      </p>
      <h3>{phone}</h3>
    </article>
  );
};

export default Brewery;
