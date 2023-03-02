import Sidebar from "../layout/Sidebar";
import Headerbar from "../layout/Headerbar";
import Navbar from "../layout/Navbar";
import { Box, Container } from "@mui/material";
import { Stack } from "@mui/system";
import { useEffect, useState } from "react";
import EventCardBox from "./../components/Eventlist/EventCardBox.js";
import com from "./../bridge/fetch";

function Category () {

  const [cardIn, setCardIn] = useState([]);

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
        const cats = [
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
            { title: "Musical", cid : 15 },
            { title: "Market Hall", cid : 16 }
          ];
        // *** //
        const cid = getPathKey(1);
        // *** //
        const query = 'https://backend-on-point.onrender.com/search/category/' + cid;
        // *** //
        const target = document.getElementById("contentmap");
        // *** //
        const header = document.getElementById("contenttit");
        // *** //
        if ( cid >= 0 )
            header.innerHTML = '<h2>' + cats[cid].title + '</h2>';
        else
            header.innerHTML = "<i>This category has no events</i>";
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
    <Box>
      <Navbar />
      <Stack
        direction="row"
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
    { sessionStorage.getItem("logged") ? <Sidebar /> : "" }


        {/* 레어박스  */}
        <Box
          sx={{
            display: { xl: "block", xs: "none" },
            width: "15%",
            height: "100vh",
          }}
        ></Box>
        <Stack
          // bgcolor="pink"
          flex={2}
          p={2}
          sx={{ display: "flex", flexWrap: "wrap", flexDirection: "column" }}
        >
          <div id="contenttit"></div>
          <div id="contentmap">
          {
          cardIn.map( (item, index) => {
            return <EventCardBox data={item} />
          })
          }
          </div>
        </Stack>

        <Box
          sx={{
           
            display: { xl: "block", xs: "none" },
            width: "15%",
            height: "100vh",
          }}
        ></Box>
      </Stack>
    </Box>
  );
}

export default Category;
