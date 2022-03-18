import React, { useState, useRef, useEffect } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

const point = {
  type: "Feature",
  geometry: {
    type: "Point",
    coordinates: [125.6, 10.1],
  },
  properties: {
    name: "Dinagat Islands",
  },
};

const Map = ({ setIsLoading, lat, lng, breweries }) => {
  // from mapbox ---------------------------
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [zoom, setZoom] = useState(10);

  useEffect(() => {
    setIsLoading(true);
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });
    // Map over each brewery and create a new marker.

    breweries.map((brewery) => {
      const marker = new mapboxgl.Marker({
        color: "rgb(209, 170, 69)",
      })
        .setLngLat([brewery.longitude, brewery.latitude])
        .addTo(map.current);
    });
    setIsLoading(false);
  });

  //----------------------------------------

  return (
    <>
      <div className="map">
        <div ref={mapContainer} className="map-container" />
      </div>
    </>
  );
};

export default Map;
