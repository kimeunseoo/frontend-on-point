import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "./maps.css";
// import "leaflet/dist/leaflet.css";

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

  return (
    <div>
      <MapContainer center={position} zoom={14} style={{margin:"0 auto",width:"600px", height:"400px", maxWidth:400}}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker
          position={position} icon={icon}
           eventHandlers={{ click: tooltipClick.bind(this, " test message ") }}
        >
          <Popup>
           wir müssen noch machen dieser stelle,
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
