import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import { Grid, Box, Typography, Button } from "@mui/material";
import com from "./../../bridge/fetch.js";

function AvatarGroupItem( data ) {

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

  const [ state, setState ] = useState([]);
  const [ userData, setUserData ] = useState({logo:null,name:null});

  useEffect(
    () => {
      com(`http://localhost:3004/event/origin/${getPathKey(1)}`, function(json) {
        let nam = json[0].fname + " " + json[0].sname;
        // *** //
        setUserData( { logo : json[0].logo, name : nam } );
      });
      // *** //
      com(`http://localhost:3004/event/joinedFriends/${getPathKey(1)}`, function(json) {
        console.log(">>>>>");
        let arr = [];
        // *** //
        for ( let element of json )
        {
          let nam = element.fname + " " + element.sname;
          // *** //
          arr.push({ logo : element.logo, name : nam });
        }
        // *** //
        console.log(arr[0]);
        // *** //
        setState(arr);
        //console.log("picture: " + arr[0].logo);
      });
    }, []
  );

  function joinEvent ( eid, uid, text, info )
  {
      const myuid = sessionStorage.getItem("userid");
      com(`http://localhost:3004/search/join/${eid}/${myuid}/${text}/${info}`, function(e){});
      alert("You have joined that event");
  }

  function disJoinEvent ( eid, uid )
  {
    const myuid = sessionStorage.getItem("userid");
    com(`http://localhost:3004/search/disjoin/${eid}/${myuid}`, function(e){});
    alert("You have disjoined that event");
  }

  return (
    <Grid container spacing={1} sx={{maxWidth:400,
      margin:" 0 auto"}}>
      <Grid item xs={12} >
        <Typography sx={{ color:"#000", fontWeight:"bold", fontSize:"10px"}}>
          LEADER
        </Typography>
      </Grid>
      <Grid container>
      <Grid item xs={8} sx={{p:1}} >
        <Avatar alt="Travis Howard" src={userData.logo} />
      </Grid>
      <Grid item xs={4}  >
        <Button onClick={(e) => { joinEvent(data.data[0], data.data[1], data.data[4], data.data[5]) }}>Join</Button>
        <Button onClick={(e) => { disJoinEvent(data.data[0], data.data[1]) }}>Disjoin</Button>
      </Grid>
      </Grid>

      <Grid item={12} >
      
          <Typography sx={{ color:"#000", fontWeight:"bold", fontSize:"10px", mb:1}}>VISITOR</Typography>
          <AvatarGroup>
            {
              state.map( (item, index) => {
                return <Avatar alt={item.name} src={item.logo} />
              })
            }
          </AvatarGroup>
       
      </Grid>
    </Grid>
  );
}

export default AvatarGroupItem;
