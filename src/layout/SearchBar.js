import Box from "@mui/material/Box";
import { TextField, Autocomplete, Button } from "@mui/material";
import { useState } from "react";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider}  from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker }from '@mui/x-date-pickers/DatePicker';
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const [date, setDate] = useState(null);

  function initSearchBarInBackground()
  {
    if ('geolocation' in navigator)
    {
      navigator.geolocation.getCurrentPosition((position) => {
        sessionStorage.setItem("user.location.lat", position.coords.latitude);
        sessionStorage.setItem("user.location.long", position.coords.longitude);
      });
    }
  }
  initSearchBarInBackground();

  const handleChange = (object) => {
    let keyword, mylat, mylong, distance, category, spdate;
    // *** //
    keyword = object.value; //search-field
    // *** //
    distance = document.getElementById("filter-distance").value;
    // *** //
    if ( date === null )
      spdate = 0;
    else
    {
      let d = date['$D'];
      let m = date['$M'] + 1;
      let y = date['$y'];
      // *** //
      let v = y + "-";
      // *** //
      if ( m < 10 ) v += '0' + m; else v += m;
      // *** //
      v += "-";
      // *** //
      if ( d < 10 ) v += '0' + d; else v += d;
      // *** //
      spdate = v;//date;
    }
    // *** //
    if ( distance === null || distance === "" )
      distance = 0;
    // *** //
    const selected = document.getElementById("categorySelector").value;
    let selectedId = null;
    // *** //
    if ( selected === "General" )
      selectedId = 0;
    else if ( selected === "Performance" )
      selectedId = 1;
    else if ( selected === "Party" )
      selectedId = 2;
    else if ( selected === "House Party" )
      selectedId = 3;
    else if ( selected === "Bar Event" )
      selectedId = 4;
    else if ( selected === "Exhibition" )
      selectedId = 5;
    else if ( selected === "Film" )
      selectedId = 6;
    else if ( selected === "Concert" )
      selectedId = 7;
    else if ( selected === "Theatre" )
      selectedId = 8;
    else if ( selected === "Lecture" )
      selectedId = 9;
    else if ( selected === "Flea Market" )
      selectedId = 10;
    else if ( selected === "Museum" )
      selectedId = 11;
    else if ( selected === "Club" )
      selectedId = 12;
    else if ( selected === "Private Event" )
      selectedId = 13;
    else if ( selected === "Sport" )
      selectedId = 14;
    else if ( selected === "Music Theater" )
      selectedId = 15;
    else if ( selected === "Market Hall" )
      selectedId = 16;
    // *** //
    category = selectedId;
    // *** //
    if ( selected )
      category++;
    else
      category = 0;
    // *** //
    mylat = sessionStorage.getItem("user.location.lat");
    mylong = sessionStorage.getItem("user.location.long");
    // *** //
    sessionStorage.setItem("search.keyword", keyword);
    sessionStorage.setItem("search.distance", distance);
    sessionStorage.setItem("search.category", category);
    sessionStorage.setItem("search.date", spdate);
    // *** //
//    console.log(`http://localhost:3004/search/result/${keyword}/${mylat}/${mylong}/${distance}/${category}/${spdate}`);
    window.location.href="http://localhost:3000/search";
//alert( keyword + ", " + mylat + ", " + mylong + ", " + distance + ", " + category + ", " + spdate );
    /*com( `http://localhost:3004/search/result/${keyword}/${mylat}/${mylong}/${distance}/${category}/${spdate}`,
         function (e) {
          alert(e);
         } );*/
    // *** //
    setSearch(object.value);
  };

  const CategorySearch = [
    { title: "General", year: 1957 },
    {
      title: "Performance",
      year: 2001,
    },
    { title: "Party", year: 1994 },
    { title: "House Party", year: 1972 },
    { title: "Bar Event", year: 2008 },
    { title: "Exhibition", year: 1957 },
    { title: "Film ", year: 1993 },
    { title: "Concert", year: 1994 },
    { title: "Theatre", year: 1994 },
    { title: "Lecture", year: 1974 },
    {
      title: "Flea Market",
      year: 2003,
    },
    { title: "Museum", year: 0 },
    { title: "Club", year: 0 },
    { title: "Private Event", year: 0 },
    { title: "Sport", year: 0 },
    { title: "Music Theater", year: 0 },
    { title: "Market Hall", year: 0 }
  ];
  const CategoryDistance = [
    { distance: "<No>" },
    { distance: "+1km" },
    { distance: "+2km" },
    { distance: "+3km" },
    { distance: "+4km" },
    { distance: "+5km" },
    { distance: "+6km" },
    { distance: "+7km" },
    { distance: "+8km" },
    { distance: "+9km" },
    { distance: "+10km" },
    { distance: "+20km" },
    { distance: "+30km" },
    { distance: "+40km" },
    { distance: "+50km" },
    { distance: "+80km" },
    { distance: "+100km" },
    { distance: "+200km" },
  ];

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        mt: "100px",
      }}
      noValidate
      autoComplete="off"
    >
      <Box sx={{ width:"100%", display: "flex", justifyContent: "center" ,mb:"20px" }}>
        <TextField
          sx={{ width: 340, display: "flex" }}
          id="search-field"
          label="search"
          onKeyDown={(e)=>{
            if ( e.keyCode == 13 )
              handleChange(e.target);
          }}
        /> <Button onClick={()=>{
          handleChange(document.getElementById("search-field"));
        }}><SearchTwoToneIcon /></Button>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", gap: "20px" , mb:"40px" }}>
        <Autocomplete
          id="filter-distance"
          options={CategoryDistance}
          getOptionLabel={(option) => option.distance}
          sx={{ width: 200, display: "flex" }}
          placeholder="distance"
          renderInput={(params) => <TextField {...params} label="distance" />}
        />
          <Autocomplete
          id="categorySelector"
          options={CategorySearch}
          getOptionLabel={(option) => option.title}
          sx={{ width: "100%", display: "flex"}}
          placeholder="Category"
          renderInput={(params) => <TextField {...params} label="Category" />}
          />
       <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        id="datumsfeld"
        label="Date"
        value={date}
        sx={{ width: 100, display: "flex" }}
        onChange={(newValue) => {
          /*let d = newValue['$D'];
          let m = newValue['$M'] + 1;
          let y = newValue['$y'];
          // *** //
          let v = y + "-";
          // *** //
          if ( m < 10 ) v += '0' + m; else v += m;
          // *** //
          v += "-";
          // *** //
          if ( d < 10 ) v += '0' + d; else v += d;
          // *** //
//          sessionStorage.setItem("search.date", v);
          // *** //
          console.log(v);*/
          // *** //
          setDate(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
       
      </Box>
    </Box>
  );
}
