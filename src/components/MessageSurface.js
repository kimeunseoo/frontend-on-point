import {
    Grid,
    Box,
    Typography,
  } from "@mui/material";
  import com from "./../bridge/fetch.js";
  
  const MessageSurface = () => {
    
    function sendMessage(event)
    {
        if ( event.keyCode === 13 )
        {
            const el = event.target;
            // *** //
            const uid = sessionStorage.getItem("userid");
            // *** //
            const fid = sessionStorage.getItem("friend");
            // *** //
            com( `https://wbs-backend-finalproject.herokuapp.com/message/send/${uid}/${fid}/${el.value}`, function(e){} );
            // *** //
            const mio = document.getElementById("messageio");
            // *** //
            mio.innerHTML += `<div class="message-box-1"><div class="message-date">${new Date()}</div><div class="message-text">${el.value}</div></div>`
            // *** //
            el.value = "";
        }
    }

    function loadFriendlist()
    {
        const uid = sessionStorage.getItem("userid");
        // *** //
        com(
          `https://wbs-backend-finalproject.herokuapp.com/message/friendlist/${uid}`,
          function(json)
          {
            const friendlist = document.getElementById("friendlist");
            // *** //
            let v = "";
            // *** //
            for( let e of json )
                v += `<div id='friend_${e.id}' class='message-friend-item'>${e.name}</div>`;
            // *** //
            friendlist.innerHTML = v;
            // *** //
            for( let e of json )
                document.getElementById('friend_' + e.id).addEventListener(
                    "click",
                    () => {
                        //let rid = e.id, uid = e.uid, fid = e.fid;
                        // *** //
                        //alert(rid +", " + uid + ", " + fid);
                        for ( let o of json )
                        {
                            if ( e.id != o.id )
                            {
                                document.getElementById('friend_' + o.id).style.backgroundColor = "";
                                document.getElementById('friend_' + o.id).style.color = "";
                            }
                            else
                            {
                                document.getElementById('friend_' + o.id).style.backgroundColor = "blue";
                                document.getElementById('friend_' + o.id).style.color = "white";
                                sessionStorage.setItem("friend", o.fid);
                            }
                        }
                        // *** //
                        com(
                            `https://wbs-backend-finalproject.herokuapp.com/message/share/${e.uid}/${e.fid}`,
                            function(jout)
                            {
                                const mio = document.getElementById("messageio");
                                // *** //
                                let m = "";
                                // *** //
                                for ( let i of jout )
                                {
                                    let d = new Date(i.ondate * 1000);
                                    let t = d.toUTCString();
                                    // *** //
                                    if ( i.origin_uid === e.uid )
                                    {
                                        m += `<div class="message-box-1"><div class="message-date">${t}</div><div class="message-text">${i.messagetext}</div></div>`;
                                    }
                                    else
                                    {
                                        m += `<div class="message-box-2"><div class="message-date">${t}</div><div class="message-text">${i.messagetext}</div></div>`;
                                    }
                                }
                                // *** //
                                mio.innerHTML = m;
                            }
                        );
                    }
                );
          }
        );
        // *** //
        com(
            `https://wbs-backend-finalproject.herokuapp.com/message/reminderoptions/${uid}`,
            function(json)
            {
              const rpopup = document.getElementById("reminderlist");
              // *** //
              let v = "";
              // *** //
              v += `<div class="message-reminder-connector" onclick="javascript:if ( document.getElementById('mrc').style.display == 'none' ) document.getElementById('mrc').style.display = 'block'; else if ( document.getElementById('mrc').style.display == 'block' ) document.getElementById('mrc').style.display = 'none';">`;
              v += `<span title="Connect your friend to your reminders">...</span>`; 
              v += `<div id="mrc" style="display:none;" class="message-reminder-popup">`;
              // *** //
              for( let e of json )
                v += `<div id = "reminder_${e.id}" title="Remind your friend when the event '${e.mtext}' arrives">${e.mtext}</div>`;
              // *** //
              v += `</div></div>`;
              // *** //
              rpopup.innerHTML = v;
              // *** //
              for( let e of json )
                document.getElementById('reminder_'+e.id).addEventListener(
                    "click",
                    () => {
                        let eid = e.id;
                        // *** //
                        const fid = sessionStorage.getItem("friend");
                        // *** //
                        com( `https://wbs-backend-finalproject.herokuapp.com/message/notify/${uid}/${fid}/${e.id}`, function(e){} );
                        // *** //
                        alert("Acknowledged! Your friend will be reminded when the reminder condition is met.")
                    }
                );
            }
          );
      }

    loadFriendlist();

    return (
      <>
        <Box>
          <Typography variant="h4">Messages</Typography>
        </Box>
        <Grid container columns={12}>
            <div class="message-friend-column-1">
                <h3>Friendlist</h3>
                <input type="text" class="message-input" id = "myfriend" placeholder="Find friend" onKeyDown={(e) => {
                    const uid = sessionStorage.getItem("userid");
                    const fid = document.getElementById("myfriend");
                    const friendlist = document.getElementById("friendlist");
                    // *** //
                    if ( e.keyCode == 13 )
                    {
                        com( `https://wbs-backend-finalproject.herokuapp.com/message/connect/friend/${uid}/${fid.value}`, function(e){
                            fid.value = "";
                            loadFriendlist();
                        } );
                    }
                }} />
                <br /><br />
                <div id = "friendlist" class="message-friend-list" onclick="javascript:if ( document.getElementById('mrc').style.display == 'block' ) document.getElementById('mrc').style.display = 'none';"></div>
            </div>
            <div class="message-friend-column-2" onclick="javascript:if ( document.getElementById('mrc').style.display == 'block' ) document.getElementById('mrc').style.display = 'none';">
                <div id = "messageio" class="message-field">
                    <i>No messages yet. Select a friend and type your message.</i>
                </div>
                <div class="message-input-area">
                    <input id="msgi" class="message-input" type="text" placeholder = "Type your message and hit ENTER" 
                    onKeyDown={(e) => {sendMessage(e)}} />
                </div>
            </div>
            <div class="message-friend-column-3" id="reminderlist">
            </div>
        </Grid>
      </>
    );
  };
  
  export default MessageSurface;
  