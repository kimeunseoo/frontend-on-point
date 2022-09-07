import React from "react";
import {
  Box,
  FormControl,
  TextField,
  Select,
  MenuItem,
  Button,
  ListItemText,
  Autocomplete,
  Typography,
} from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { useState } from "react";


const NOMINATIM_BASE_URL = "https://nominatim.openstreetmap.org/search?";
// "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
function Try(props) {
  const { selectLocation, setSelectLocation } = props; 
  const [searchText, setSearchText] = useState("");
  console.log(searchText);
  const [listPlace, setListPlace] = useState([]);
  const params = {
    q: searchText,
    format: "json",
    locationdetail: 1,
    polygon_geojson: 0,
  };

  const newListPlace = [];
  listPlace.map((item) => {
    console.log(item)
    newListPlace.push({
      id: item.osm_id,
      name: item.display_name,
      lat: item.lat,
      lon: item.lon,
    })
  }
  );

  function handleInput (value) {
    console.log("test:"+ value)
    if(value != undefined && value != null && value != ""){
      const params = {
        q:value,
        format: "json",
        locationdetail: 1,
        polygon_geojson: 0,
      };
      const queryString = new URLSearchParams(params).toString();
      const requestOptions = {
        method: "GET",
        redirect: "follow",
      };
      fetch(`${NOMINATIM_BASE_URL}${queryString}`, requestOptions)
        .then((res) => res.text())
        .then((result) => {
          console.log(JSON.parse(result));
          setListPlace(JSON.parse(result));
        })
        .catch((err) => console.log("error :" + err));
    }
 
  }
  

  return (
    <div>
 
      <Box>
        {/* <Button
          variant="contained"
          onClick={() => {
            const params = {
              q: searchText,
              format: "json",
              locationdetail: 1,
              polygon_geojson: 0,
            };
            const queryString = new URLSearchParams(params).toString();
            const requestOptions = {
              method: "GET",
              redirect: "follow",
            };
            fetch(`${NOMINATIM_BASE_URL}${queryString}`, requestOptions)
              .then((res) => res.text())
              .then((result) => {
                console.log(JSON.parse(result));
                setListPlace(JSON.parse(result));
              })
              .catch((err) => console.log("error :" + err));
          }}
        >
          Search
        </Button> */}
      </Box>
      <Autocomplete
      onKeyDown={(e) => handleInput(e.target.value + ", Deutschland")}
        id="filter-demo"
        options={listPlace.map((option) => option.display_name)}
        // getOptionLabel={(option) => option.display_name}
        sx={{ width: 400, display: "flex" }}
        placeholder="your adress"
        renderInput={(params) => (
          <TextField
            {...params}
            sx={{ m: 0.5 }}
            onChange={(e) => {
             
              setSearchText(e.target.value + ", Deutschland");

            }}
            placeholder="location"
            required
            type="text"
            value={searchText}
            name="location"
          />
        )}
      />
    </div>
  );
}

export default Try;
