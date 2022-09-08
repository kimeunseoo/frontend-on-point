import React, { useState, useEffect } from "react";
import com from "../../bridge/fetch";
import { useNavigate } from 'react-router-dom';

function EventListItem2( data ) {
    const navigate = useNavigate();

    return (
      <div>
          <div class = "eventitem-box" id={data.data.id}>
              <div class = "eventitem-date">{data.data.ondate}</div>
              <div class = "eventitem-from">{data.data.location}</div>
              <div class = "eventitem-text">{data.data.addressinfo}</div>
              <div class = "eventitem-navi">
                <button class = "ok" onClick={(e) => {
                    navigate( `/search/${data.data.id}`)
                }}>Show</button>
                &nbsp;&nbsp;&nbsp;
                <button class = "cancel" onClick={(e) => {
                    if ( window.confirm("Do you want to cancel and remove the event?") )
                    {
                        const uid = sessionStorage.getItem("userid");
//console.log(`https://wbs-backend-finalproject.herokuapp.com/search/disjoin/${data.data.eid}/${uid}`);
                        com(`https://wbs-backend-finalproject.herokuapp.com/search/disjoin/${data.data.eid}/${uid}`,function(e){});
                        document.getElementById(`${data.data.id}`).style.display = "none";
                    }
                }}>Remove</button>
            </div>
          </div>
      </div>
    );
  }
  
  export default EventListItem2;
  