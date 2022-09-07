import { Grid, Typography } from "@mui/material";
//import EventPlaceCard from "./EventPlaceCard";
import com from "./../../bridge/fetch.js";
import { useEffect, useState } from "react";
import CategoryItem from "../CategoryItem.js";
import EventCardBox from "../Eventlist/EventCardBox.js";
import { Box } from "@mui/system";

//import MapItem from "../../map/MapItem";
import MapDashboard from "../../map/MapDashboard";

const DashItem = () => {
  const [readIn, setReadIn] = useState({});
  const [cardIn, setCardIn] = useState([]);

  let jsonarray = [];

  useEffect(() => {
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
    const query =
      "https://wbs-backend-finalproject.herokuapp.com/search/result/" +
      `${keyword}/${mylat}/${mylong}/${distance}/${category}/${spdate}`;
    // *** //
    const target = document.getElementById("contentmap");
    // *** //
    com(query, (json) => {
      if (json) {
        let cards = [];
        let entry = "";
        // *** //
        for (let element of json) {
          entry = "https://wbs-backend-finalproject.herokuapp.com" + element.foto1.replace("./", "/");
          // *** //
          cards.push({
            id: element.id,
            uid: element.id,
            category: element.category,
            longitude: element.longitude,
            latitude: element.latitude,
            promoter: element.promoter,
            location: element.location,
            ondate: element.ondate,
            description: element.description,
            addressinfo: element.addressinfo,
            foto1: entry,
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
      <Grid container rowSpacing={0.5} columns={12}>
        <Grid item xs={12}>
          <Typography
            sx={{ color: "#000", fontWeight: "bold", mb: "20px" }}
            p={2}
          >
            Search List
          </Typography>
        </Grid>
        <Grid
          xl={12}
          md={12}
          sm={12}
          xs={12}
          sx={{
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Grid
            width={{ lg: "600px", xs: "85%", maxwidth:400 }}
            height={{ lg: "100%", xs: "300px" }}
            sx={{ alignItems: "center", margin: "0 auto" , mb:"110px"}}
          >
            <MapDashboard />
          </Grid>
        </Grid>
        <Grid
          xl={6}
          lg={6}
          md={12}
          xs={12}
          sx={{
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/*         
        <div style={{ maxHeight: "600px" }}>
          <Grid item xl={12} m={1} sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
            
          </Grid>
        </div> */}
        </Grid>
      </Grid>
     
      <Box sx={{maxwidth:400,display:"flex",mt:"100px", justifyContent:"center", flexWrap:"wrap" ,margin:"0 auto"}}>
        {cardIn.map((item, index) => {
          return <EventCardBox data={item} />;
        })}
      </Box>
    
    </div>
  );
};
export default DashItem;
