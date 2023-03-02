import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "./maps.css";
// import "leaflet/dist/leaflet.css";
import com from "./../bridge/fetch.js";

import L from "leaflet";
import SearchLocation from "./SearchLocation";
import Geolocation from "react-geolocation";

// const icon = L.icon({
//   iconUrl: ".https://pixsector.com/cache/cce4660e/av4c26b04321e0f8af280.png",
//   iconSize: [38, 38],
// });

// function ResetCenter(props) {
//   const { selectLocation } = props;
//   const map = useMap();

//   useEffect(() => {
//     if (selectLocation) {
//       map.setView(
//         L.latLng(selectLocation?.lat, selectLocation?.lon),
//         map.getZoom(),
//         {
//           animate: true,
//         }
//       );
//     }
//   }, [selectLocation]);

//   return null;
// }

const MapItem = () => {
  const position = [52.52, 13.39];
  const tooltipClick = (message) => {
    console.log(message);
  };

  const icon = L.icon({
    iconUrl: `https://img.icons8.com/arcade/64/000000/experimental-marker-arcade.png`,
    iconSize: [24, 24],
    iconAnchor: [12, 36],
    popupAnchor: [0, -25]
  });

  const[dataSpecificMaps, setDataSpecificMaps]=useState(null);

  function getPathKey(index) {
    const query = window.location.pathname;
    // *** //
    let result = "";
    let next = -1;
    // *** //
    for (let p = 0; p < query.length; p++) {
      if (query[p] === '/') {
        if (next === index)
          break;
        // *** //
        next++;
        // *** //
        if (next === index)
          result = "";
      }
      else
        result += query[p];
    }
    // *** //
    return result;
  }

  function receiveSpecificData ()
  {
    let keyword = sessionStorage.getItem("search.keyword");
    let distance = sessionStorage.getItem("search.distance");
    let category = sessionStorage.getItem("search.category");
    let spdate = sessionStorage.getItem("search.date");
    let mylat = sessionStorage.getItem("user.location.lat");
    let mylong = sessionStorage.getItem("user.location.long");
    // *** //
    if (category === null || category === "null") category = 0;
    if (spdate === null || spdate === "null") spdate = 0;
    if (distance === null || mylat === "null") distance = 0;
    if (mylat === null || mylat === "null") mylat = 0;
    if (mylong === null || mylong === "null") mylong = 0;
    // *** //
    const query = `https://backend-on-point.onrender.com/map/unique/${getPathKey(1)}`;
    // *** //
    console.log(query);
    // *** //
    console.log("---- TEST ----");
    com(query, (json) => {
      setDataSpecificMaps(json);
      console.log(json);
    });
  }

  useEffect(() => {
    receiveSpecificData()
  }, []);

  return (
    <div>
      <MapContainer center={position} zoom={14} style={{margin:"0 auto",width:"600px", height:"400px", maxWidth:400}}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker
          position={dataSpecificMaps ? dataSpecificMaps.position : position} icon={icon}
           eventHandlers={{ click: tooltipClick.bind(this, " test message ") }}
        >
          <Popup>
            {dataSpecificMaps ? dataSpecificMaps.title : ""}
          </Popup>
        </Marker>
      </MapContainer>
      {/* <Geolocation
        render={({
          fetchingPosition,
          position: { coords: { latitude, longitude } = {} } = {},
          error,
          getCurrentPosition,
        }) => (
          <div>
            <button onClick={getCurrentPosition}>Get Position</button>
            {error && <div>{error.message}</div>}
            <pre>
              latitude: {latitude}
              longitude: {longitude}
            </pre>
          </div>
        )}
      /> */}
    </div>
  );
};

export default MapItem;
