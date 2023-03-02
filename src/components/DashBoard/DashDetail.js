import { Grid, Box, Typography, Paper } from "@mui/material";
import DashdetailCard from "./DashDetailCard";
import DashDetailDescription from "./DashDetailDescription";
import AvatarGroupItem from "./AvatarGroupItem";
import CommentBox from "./CommentBox";
import MapItem from "../../map/MapItem";
import { useEffect, useState } from "react";
import com from "./../../bridge/fetch.js";

const DashDetail = () => {

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

  const [readIn, setReadIn] = useState([]);
  const [comment, setComment] = useState([]);

  useEffect(() => {
    const eid = getPathKey(1);
    // *** //
    console.log(`https://backend-on-point.onrender.com/search/detail/${eid}`);
    com(`https://backend-on-point.onrender.com/search/detail/${eid}`,
      function (json) {
        let pic = json[0].foto1;

        if(pic != undefined && pic != null)
            pic = "https://backend-on-point.onrender.com" + pic.replace('./', '/');
        // *** //
        setReadIn([json[0].id, json[0].uid, 
                  json[0].category, json[0].description, 
                  json[0].location, json[0].addressinfo, 
                  pic, json[0].latitude, 
                  json[0].longitude, json[0].ondate]);
        console.log(pic);
        console.log(readIn);
      });
    // *** //
    com(`https://backend-on-point.onrender.com/comment/get/${eid}`,
      function (json) {
        console.log(json);
        setComment(json);
      }
    );
  }, []);

  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={12} sx={{ mt: "40px" }}>
          <Typography sx={{ color: "#000", fontWeight: "bold" }} p={2}>
            DETAIL INFORMATION
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
          <Box
            sx={{ width: "500px", height: "400px", m: "0 auto", p: 0, mb:"20px" }}
            p={2}
          >
            <DashdetailCard data={readIn} />
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={6} sx={{margin:"0 auto"}}>
          <Box color="info.contrastText" sx={{margin:"0 auto", mt:"25px", mb:"10px"}}>
            <MapItem />
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
          <Box
            sx={{
              width: { width: { xl: "400px", xs: "300px" } },
              height: "150px",
              m: "0 auto",
              mt:"30px"
            }}
            p={2}
          >
            <AvatarGroupItem data={readIn} />
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          sm={12}
          md={12} lg={6} xl={6}
          sx={{ p: 2, position: "relativ", mt: " 30px" }}
        >
          <Box color="info.contrastText" p={1} sx={{mt:"10px", ml:"10px"}}>
            <DashDetailDescription data={readIn} />
          </Box>
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
          <Box bgcolor="#fff"  p={2} sx={{width:"500px",maxWidth:400, margin:"0 auto"}}>
            {/* 코멘트 */}
            <CommentBox data={comment} />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default DashDetail;
