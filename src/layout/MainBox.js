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
import { useEffect, useState } from "react";
import com from "./../bridge/fetch";

export default function MainBox() {

  const [cardIn, setCardIn] = useState([]);

  const [ dataSet, setDataSet ] = useState([
    { title: "General", cid : 0 },
    { title: "Performance", cid : 1 },
    { title: "Party", cid : 2 },
    { title: "House Party", cid : 3 },
    { title: "Bar Event", cid : 4 },
    { title: "Exhibition", cid : 5 },
    { title: "Film ", cid : 6 },
    { title: "Concert", cid : 7 },
    { title: "Theatre", cid : 8 },
    { title: "Lecture", cid : 9 },
    { title: "Flea Market", cid : 10 },
    { title: "Museum", cid : 11 },
    { title: "Club", cid : 12 },
    { title: "Private Event", cid : 13 },
    { title: "Sport", cid : 14 },
    { title: "Music Theater", cid : 15 },
    { title: "Market Hall", cid : 16 }
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
      const query = 'http://localhost:3004/search/category/' + cid;
      // *** //
      const target = document.getElementById("contentmap");
      // *** //
      com(query, (json) => {
        if (json) {
          let cards = []; let entry = "";
          // *** //
          for (let element of json) {
            entry = 'http://localhost:3004' + element.foto1.replace( './', '/');
            // *** //
            cards.push({
              id : element.id,
              location : element.location,
              uid : element.id,
              category : element.category,
              longitude : element.longitude,
              latitude : element.latitude,
              promoter : element.promoter,  
              ondate : element.ondate,
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
      <div>
      <Box>
        <Typography
          sx={{
            display: "flex",
            textTransform: "uppercase",
            fontWeight: "bold",
            fontSize: 16,
            mt: "20px",
            mb:"20px",
            ml:"15px"
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
              width: 150,
              height: 150,
            },
          }}
        >
  
          {
            dataSet.map( (item, index) => {
              return <CatgoryItem data={item} />
            })
          }
  
        </Box>
        </Box>
  
        <Typography
          sx={{
            display: "flex",
            textTransform: "uppercase",
            fontWeight: "bold",
            fontSize: 16,
            mt: "20px",
            mb:"20px",
            ml:"15px"
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
      </div>
    );
  }
  