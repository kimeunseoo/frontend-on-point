import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-geosearch/dist/geosearch.css";
import "./maps.css";
import { TextField, InputLabel } from "@mui/material";
import { GeoSearchControl, OpenStreetMapProvider } from "leaflet-geosearch";
import Geolocation from "react-geolocation";
import GeoMyLocation from "./GeoMyLocation";

// Cordinates of Marcillac
const position = [52.52, 13.39];



function LeafletgeoSearch() {
    // const {LeafletSearchProps, setLeafletSearchProps}=props
    const provider = new OpenStreetMapProvider();
    // const results = provider.search({ query: input.value });
  const map = useMap();

  function searchEventHandler(result) {
    
    const searchResultLocation = result.location
    const pickedLocation = document.getElementById("pickedLocation");
    const longitude = document.getElementById("longitude");
    const latitude = document.getElementById("latitude");
    pickedLocation.value = searchResultLocation.label;
    longitude.value = searchResultLocation.x;
    latitude.value = searchResultLocation.y;
    console.log(searchResultLocation);
  }
  map.on('geosearch/showlocation', searchEventHandler);

  useEffect(() => {
    
    const searchControl = new GeoSearchControl({
        notFoundMessage: 'Sorry, that address could not be found.',
      provider,
      // marker: {
      //   icon
      // }
    });
   

    map.addControl(searchControl);
   

    return () => map.removeControl(searchControl);
  }, []);

  return null;
}


function MapSearchLeaflet() {
    
  return (
    <div>
      
      
      <div id="mapid">
      
        <MapContainer
          center={position}
          zoom={13}
          scrollWheelZoom={true}
          style={{ width:"600px",height: "300px" }}
        
        >
          <TileLayer
            attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <LeafletgeoSearch />
          
        </MapContainer>
       <GeoMyLocation />
       <div style={{display:"none"}}>
       {/*<input type="text" id = "longitude" name = "longitude" style={{display:"none"}} />
       <input type="text" id = "latitude" name = "latitude" style={{display:"none"}} />*/}
       <InputLabel id="demo-select-small">Pick up the event location from the map:</InputLabel>
       <TextField id = "pickedLocation" name = "location" sx={{ width: "100%" }} />
       </div>
      </div>
    </div>
  );
}

export default MapSearchLeaflet;
