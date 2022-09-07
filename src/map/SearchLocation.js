import React from "react";
import {
  Box,
  FormControl,
  TextField,
  Select,
  MenuItem,
  Button,
  ListItemText,
} from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { useState } from "react";


// https://nominatim.openstreetmap.org/search?q=135+pilkington+avenue,+birmingham&format=xml&polygon_geojson=1&addressdetails=1
const NOMINATIM_BASE_URL = "https://nominatim.openstreetmap.org/search?";

function SearchLocation(props) {
  const{selectLocation, setSelectLocation} = props;
  const [searchText, setSearchText] = useState("");
  console.log(searchText);
  const [listPlace, setListPlace] = useState([]);
  const params = {
    q: searchText,
    format: "json",
    locationdetail: 1,
    polygon_geojson: 0
  };


  return (
    <Box>
      <TextField
        sx={{ m: 0.5 }}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
        placeholder="location"
        required
        type="text"
        value={searchText}
        name="location"
      />
      <Button
        variant="contained"
        onClick={() => {
          const params = {
            q: searchText,
            format: "json",
            locationdetail: 1,
            polygon_geojson: 0
          };
          const queryString = new URLSearchParams(params).toString();
          const requestOptions = { 
            method:"GET", 
            redirect:"follow"
          };
          fetch(`${NOMINATIM_BASE_URL}${queryString}`, requestOptions)
          .then((res)=> res.text())
          .then((result) => {
            console.log(JSON.parse(result))
            setListPlace(JSON.parse(result))
          })
          .catch((err)=> console.log("error :" + err))
        }}
      >
        Search
      </Button>
      <List>
        {listPlace.map((item) => {
          return (
            <div key={item?.osm_id}>
              <ListItem disablePadding>
                <ListItemButton onClick={()=>setSelectLocation(item)}>
                  <ListItemText primary={item?.display_name}/>
                </ListItemButton>
              </ListItem>
            </div>
          );
        })}
      </List>
    </Box>
  );
}

export default SearchLocation;
