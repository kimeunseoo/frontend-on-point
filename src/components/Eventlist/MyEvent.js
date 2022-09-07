import {
  Grid,
} from "@mui/material";
import Calendar from "./Calendar";
//import MyListCard from "./MyListCard";
import EventListItem from "./EventListItem";
import EventListItem2 from "./EventListItem2";
import React, { useEffect, useState } from "react";
import com from "../../bridge/fetch";

const MyEvent = () => {

  const [readIn, setReadIn] = useState([]);
  const [joinIn, setJoinIn] = useState([]);
  const [calendarData, setCalendarData] = useState([]);

  useEffect(
    () => {
      const uid = sessionStorage.getItem("userid");
      // *** //
      com(`http://localhost:3004/event/readin/${uid}`, 
      function(json) {
        const cal = [];
        // *** //
        for ( let next of json )
        {
          cal.push(
              {
                title: next.location,
                ondate: next.ondate
              }
          );
        }
        // *** //
        setCalendarData(cal);
        // *** //
        //console.log(calendarData);
        // *** //
        console.log(json)
        // *** //
        setReadIn(json);
      });
      // *** //
      com(`http://localhost:3004/event/joined/${uid}`, 
      function(json) {
        //console.log("join->");
        //onsole.log(uid);
        console.log(json)
        //console.log("<-join");
        /*
        const cpy = [];
        // *** //
        for ( let next of json )
        {
          cpy.push(
              {
                title: next.location,
                ondate: next.ondate
              }
          );
        }
        // *** //
        setJoinIn(cpy);
        */
        setJoinIn(json);
      });
    }, []
  );

  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <>
      <div class = "order-topic">My Eventlist</div>

          <Calendar readIn={readIn} />

      <div class = "order-topic">My Events</div>
      <div class = "order-items">
      {
          readIn.map( (item,index) => {
            return <EventListItem data={item} />
          })
      }
      </div>
      <div class = "order-topic">Joined Events</div>
      <div class = "order-items">
      {
          joinIn.map( (item,index) => {
            return <EventListItem2 data={item} />
          })
      }
      </div>
    </>
  );
};

export default MyEvent;
