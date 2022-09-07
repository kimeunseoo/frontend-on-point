import GeoMyLocation from "./GeoMyLocation";
import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "./maps.css";
import L from "leaflet";
import { Axios } from "axios";
import com from "./../bridge/fetch";

function MapDashboard() {
  const[dataMaps, setDataMaps]=useState([]);
  
  const[dataSpecificMaps, setDataSpecificMaps]=useState([]);
  
  
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
    const query = 'http://localhost:3004/map/specific/' +
      `${keyword}/${mylat}/${mylong}/${distance}/${category}/${spdate}`;
    // *** //
    console.log(query);
    // com : fetch (bridge)
    com(query, (json) => {
      setDataSpecificMaps(json);
    });  
  }


    
    useEffect(()=>{
      /*
      com('http://localhost:3004/map/data',(data)=>{
        // return data;np
        console.log(data)
        setDataMaps(data)
      });*/

      fetch('http://localhost:3004/map/data')
      .then((res)=> res.json())
      .then((data)=>{
        // return data;
        console.log(data)
        setDataMaps(data)
      })
      receiveSpecificData();
    },[])
  
 
  function LocationMarker() {
    const [position, setPosition] = useState(null);
    const [bbox, setBbox] = useState([]);

    const map = useMap();

    useEffect(() => {
      map.locate().on("locationfound", function (e) {
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom());
        const radius = e.accuracy;
        const circle = L.circle(e.latlng, radius);
        circle.addTo(map);
        setBbox(e.bounds.toBBoxString().split(","));
      });
    }, [map]);

  
  }
 
  // const data = [
  //   {
  //     position: { lat:  52.4420634 , lng: 13.438499 },
  //     title: "berlin_1",
      
  //   },
  //   {
  //     position: { lat: 52.529779, lng: 13.353300 },
  //     title: "berlin_2",
  //   }
  // ];



  return (
    <MapContainer center={[49.1951, 16.6068]} zoom={12} scrollWheelZoom  sx={{margin:"0 auto"}}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
        {/*dataMaps.map((item, index) => {
        const icon = L.icon({
          iconUrl: `https://img.icons8.com/arcade/64/000000/experimental-marker-arcade.png`,
          iconSize: [24, 24],
          iconAnchor: [12, 36],
          popupAnchor: [0, -25]
        });

        return (
          <Marker key={index} icon={icon} position={item.position}>
            <Popup>{item.title}</Popup>
          </Marker>
        );
      })*/
      
      dataSpecificMaps.map((item, index) => {
        const icon = L.icon({
          iconUrl: `https://img.icons8.com/arcade/64/000000/experimental-marker-arcade.png`,
          iconSize: [24, 24],
          iconAnchor: [12, 36],
          popupAnchor: [0, -25]
        });

        return (
          <Marker key={index} icon={icon} position={ [ item.position.lat, item.position.lng ] }>
            <Popup>{item.title}</Popup>
          </Marker>
        );
      })
      
      }
      <LocationMarker />
    </MapContainer>
  );
}

export default MapDashboard;
