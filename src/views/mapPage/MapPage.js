import React, { useState, useRef, useEffect } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import "./mapPage.css";
import { useGlobalContext } from "../../context";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

const MapPage = () => {
  const {
    setIsLoading,
    setShowMapPage,
    setShowListPage,
    setShowBrewerySearchPage,
    lat,
    lng,
    breweries,
  } = useGlobalContext();

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

    // Add navigation controls
    const nav = new mapboxgl.NavigationControl();
    map.current.addControl(nav, "top-left");

    // Map over each brewery and create a new marker with brewery info in popup
    breweries.map((brewery) => {
      const { name, website_url, street } = brewery;

      // create the popup
      const popup = new mapboxgl.Popup({
        maxWidth: "none",
      }).setHTML(
        `<a href="${website_url}" target="_blank"><h1>${name}<h1></a><p>${street}</p>`
      );

      const marker = new mapboxgl.Marker({
        color: "goldenrod",
        scale: 1.5,
      })
        .setLngLat([brewery.longitude, brewery.latitude])
        .setPopup(popup)
        .addTo(map.current);
    });
    setIsLoading(false);
  }, []);

  //----------------------------------------

  return (
    <main className="mapBody">
      <div className="map">
        <div ref={mapContainer} className="map-container" />
      </div>
      <nav
        className="list"
        onClick={() => {
          setShowMapPage(false);
          setShowBrewerySearchPage(false);
          setIsLoading(false);
          setShowListPage(true);
        }}
      >
        &#128196; List View
      </nav>
    </main>
  );
};

export default MapPage;
