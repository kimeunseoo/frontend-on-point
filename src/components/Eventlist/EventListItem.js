import React, { useState, useEffect } from "react";
import com from "../../bridge/fetch";

function EventListItem( data ) {
    return (
      <div>
          <div class = "eventitem-box" id={data.data.id}>
              <div class = "eventitem-date">{data.data.ondate}</div>
              <div class = "eventitem-from">{data.data.location}</div>
              <div class = "eventitem-text">{data.data.addressinfo}</div>
              <div class = "eventitem-next">
                <button class = "ok" onClick={(e) => {
                    window.location.href = `http://localhost:3000/search/${data.data.id}`;
                }}>Show</button>
                &nbsp;&nbsp;&nbsp;
                <button class = "cancel" onClick={(e) => {
                    if ( window.confirm("Do you want to cancel and remove the event?") )
                    {
                        console.log(`https://wbs-backend-finalproject.herokuapp.com/search/delete/${data.data.id}`);
                        com(`https://wbs-backend-finalproject.herokuapp.com/search/delete/${data.data.id}`,function(e){});
                        document.getElementById(`${data.data.id}`).style.display = "none";
                        //window.location.href = `http://localhost:3000/search/delete/${data.data.id}`;
                    }
                }}>Remove</button>
            </div>
          </div>
      </div>
    );
  }
  
  export default EventListItem;
  