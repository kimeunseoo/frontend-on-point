import { Link } from "@mui/material";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { Grid, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { BookmarkBorder, AttachMoney, LocationOn } from "@mui/icons-material";
import CatgoryItem from "./../components/CategoryItem.js";
import EventCardBox from "./../components/Eventlist/EventCardBox.js";
import React, { useState, useEffect } from "react";
import com from "./../bridge/fetch";

export default function GastMainBox() {

  const [cardIn, setCardIn] = useState([]);
 
  const [ dataSet, setDataSet ] = useState([
    { title: "General", cid : 0, icon:"https://img.icons8.com/external-soft-fill-juicy-fish/100/000000/external-search-location-pins-soft-fill-soft-fill-juicy-fish.png" },
    { title: "Performance", cid : 1, icon:"https://img.icons8.com/external-soft-fill-juicy-fish/100/FFFFFF/external-ticket-event-management-soft-fill-soft-fill-juicy-fish.png" },
    { title: "Party", cid : 2, icon:"https://img.icons8.com/external-soft-fill-juicy-fish/100/000000/external-party-event-management-soft-fill-soft-fill-juicy-fish-4.png" },
    { title: "House Party", cid : 3, icon:"https://img.icons8.com/external-soft-fill-juicy-fish/100/000000/external-house-music-production-soft-fill-soft-fill-juicy-fish.png" },
    { title: "Bar Event", cid : 4 , icon:"https://img.icons8.com/external-soft-fill-juicy-fish/100/000000/external-whiskey-supermarket-soft-fill-soft-fill-juicy-fish.png"},
    { title: "Exhibition", cid : 5, icon:"https://img.icons8.com/external-soft-fill-juicy-fish/100/000000/external-moon-space-exploration-soft-fill-soft-fill-juicy-fish-6.png" },
    { title: "Film ", cid : 6 , icon:"https://img.icons8.com/external-soft-fill-juicy-fish/100/000000/external-clapperboard-journalism-soft-fill-soft-fill-juicy-fish.png"},
    { title: "Concert", cid : 7 , icon:"https://img.icons8.com/external-soft-fill-juicy-fish/100/000000/external-stage-event-management-soft-fill-soft-fill-juicy-fish-3.png"},
    { title: "Theatre", cid : 8, icon:"https://img.icons8.com/external-soft-fill-juicy-fish/100/000000/external-theatre-buildings-soft-fill-soft-fill-juicy-fish.png" },
    { title: "Lecture", cid : 9, icon:"https://img.icons8.com/external-soft-fill-juicy-fish/100/000000/external-coding-coding-and-development-soft-fill-soft-fill-juicy-fish.png" },
    { title: "Flea Market", cid : 10, icon:"https://img.icons8.com/external-soft-fill-juicy-fish/100/000000/external-toys-humanitarian-soft-fill-soft-fill-juicy-fish.png" },
    { title: "Museum", cid : 11, icon:"https://img.icons8.com/external-soft-fill-juicy-fish/100/000000/external-museum-buildings-soft-fill-soft-fill-juicy-fish.png" },
    { title: "Club", cid : 12, icon:"https://img.icons8.com/external-soft-fill-juicy-fish/100/000000/external-disc-essentials-soft-fill-soft-fill-juicy-fish.png" },
    { title: "Private Event", cid : 13, icon:"https://img.icons8.com/external-soft-fill-juicy-fish/100/000000/external-vip-event-management-soft-fill-soft-fill-juicy-fish.png" },
    { title: "Sport", cid : 14, icon:"https://img.icons8.com/external-soft-fill-juicy-fish/100/000000/external-basketball-trophies-and-awards-soft-fill-soft-fill-juicy-fish.png" },
    { title: "Musical", cid : 15, icon:"https://img.icons8.com/external-soft-fill-juicy-fish/100/000000/external-mask-event-management-soft-fill-soft-fill-juicy-fish.png" },
    { title: "Market Hall", cid : 16, icon:"https://img.icons8.com/external-soft-fill-juicy-fish/100/000000/external-vege-plant-based-diet-soft-fill-soft-fill-juicy-fish.png"}
]);

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

useEffect(() => {
    const cid = 4;
    // *** //
    const query = 'https://backend-on-point.onrender.com/search/category/' + cid;
    // *** //
    const target = document.getElementById("contentmap");
    // *** //
    com(query, (json) => {
      if (json) {
        let cards = []; let entry = "";
        // *** //
        for (let element of json) {
          entry = 'https://backend-on-point.onrender.com' + element.foto1.replace( './', '/');
          // *** //
          cards.push({
            id : element.id,
            location : element.location,
            ondate : element.ondate,
            uid : element.id,
            category : element.category,
            longitude : element.longitude,
            latitude : element.latitude,
            promoter : element.promoter,
            description : element.description,
            addressinfo : element.addressinfo,
            foto1 : entry
          });
        }
        console.log(cards);
        // *** //
        setCardIn(cards);
      }
    });
}, []);

  return (
    <Box>
      <Typography
        sx={{
          display: "flex",
          textTransform: "uppercase",
          fontWeight: "bold",
          fontSize: 16,
          mt: "20px",
          mb:"15px"
        }}
      >
        Categories
      </Typography>
      <Box
        sx={{
          justifyContent: "center",
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: 100,
            height: 100,
          },
        }}
      >

        {
          dataSet.map( (item, index) => {
            return <CatgoryItem data={item} />
          })
        }

      </Box>

      <Typography
        sx={{
          display: "flex",
          textTransform: "uppercase",
          fontWeight: "bold",
          fontSize: 16,
          mt: "20px",
          mb:"15px"
        }}
      >
        Today
      </Typography>
      <div id="contentmap" class = "order-items">
      {
          cardIn.map( (item, index) => {
            return <EventCardBox data={item} />
          })
      }
      </div>
    </Box>
  );
}
