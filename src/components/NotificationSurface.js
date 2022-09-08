  import {
    Grid,
    Box,
    Typography,
    Button,
    TextField,
    Select,
    MenuItem,
    InputLabel,
  } from "@mui/material";
  import Card from "@mui/material/Card";
  import CardActions from "@mui/material/CardActions";
  import CardContent from "@mui/material/CardContent";
  import Switch from "@mui/material/Switch";
  import FormGroup from "@mui/material/FormGroup";
  import FormControlLabel from "@mui/material/FormControlLabel";
  import { useNavigate } from 'react-router-dom';
  import { useLayoutEffect, useEffect, useState } from "react";

  import com from "./../bridge/fetch.js";
  
  const NotificationSurface = () => {
    const navigate = useNavigate();

    const [value, setValue] = useState(0);
    
      const handleChange = (newValue) => {
        setValue(newValue);
      };

    //   useLayoutEffect(
    //     () =>
    //     {
    //       let onei = document.getElementById("onei");
    //       const onms = document.getElementById("onms");
    //       const onlo = document.getElementById("onlo");
    //       // *** //
    //       const uid = sessionStorage.getItem("userid");
    //       // *** //
    //       /*
    //       com(
    //         `https://wbs-backend-finalproject.herokuapp.com/${uid}`,
    //         function(json){
    //           fname.value = json[0].fname;
    //           sname.value = json[0].sname;
    //           email.value = json[0].email;
    //           phone.value = json[0].phone;
    //           city.value = json[0].location;
    //           pcode.value = json[0].pcode;
    //           desc.value = json[0].aboutme;
    //         }
    //       );*/
    //     }, []
    //   );

      function loadTable()
      {
        const target = document.getElementById("notifications");
        // *** //
        if ( target )
        {
            const uid = sessionStorage.getItem("userid");
            // *** //   
            com( `https://wbs-backend-finalproject.herokuapp.com/notification/list/${uid}`, function(json) {
                let v = "";
                // *** //
                //alert(json);
                v += '<table class = "notification-table">';
                // *** //
                v += '<tr>';
                v += '<th width = "10%">Method</th>';
                v += '<th width = "10%">Argument</th>';
                v += '<th width = "30%">Title</th>';
                v += '<th width = "50%">Message</th>';
                v += '<th>Action</th>';
                v += '</tr>';
                // *** //
                let rowtype = "row1";
                // *** //
                for( let element of json )
                {
                    let methode = 0; let dataset = null;
                    // *** //
                    switch(element.otype)
                    {
                        case 1: methode = "On Day"; dataset = element.ondate; break;
                        case 2: methode = "On Weekday"; dataset = element.onweekday; break;
                        case 3: methode = "On Location"; dataset = element.onlocation; break;
                    }
                    v += `<tr class = '${rowtype}'>`;
                    v += `<td>${methode}</td>`;
                    v += `<td>${dataset}</td>`;
                    v += `<td>${element.mtitle}</td>`;
                    v += `<td>${element.mtext}</td>`;
                    v += `<td style="text-align:right;"><button id='tbl_btn_${element.id}' name='${element.id}'>Delete</button></td>`;
                    v += '</tr>';
                    // *** //
                    if      ( rowtype === "row1" ) rowtype = "row2";
                    else if ( rowtype === "row2" ) rowtype = "row1";
                }
                // *** //
                v += '</table>';
                // *** //
                target.innerHTML = v;
                // *** //
                for( let element of json )
                {
                    document.getElementById(`tbl_btn_${element.id}`).addEventListener("click", function(e){
                        if ( window.confirm("Do you want to remove this Reminder?") )
                        {
                            com( `https://wbs-backend-finalproject.herokuapp.com/notification/remove/entry/${e.target.name}`, function(o) {} );
                            // *** //
                         
                            loadTable();
                        }
                    });
                }
            });
        }
      }
    
      useEffect(() => {
        loadTable();
      });

    return (
      <>
        <Box>
            <Box>
            <Typography variant="h4">Notification</Typography>
            </Box>
            <Grid container columns={12} >
            <Grid item xs={4} sx={{ m: "0 auto", mt: 3 }}>
                <Box sx={{ width: "500px", height: "400px", m: "0 auto", p: 0 }}
                p={2}>
                <Card sx={{ width: 420 }}>
                <Typography sx={{ fontSize: "10px", fontWeight: "bold", p: 2 }}>
                    Remind Me
                </Typography>
                <CardContent>
                <InputLabel>Title:</InputLabel>
                    <br />
                    <TextField
                    id="ontitlebox"
                    label=""
                    size="small"
                    multiline
                    maxRows={6}
                    placeholder="Type a short title"
                    sx={{ width: "100%" }}
                />
                    <br /><br />
                    <InputLabel><input type="radio" id="onday" onChange={(e)=>{
                        const onweek = document.getElementById("onweek");
                        const onregion = document.getElementById("onregion");
                        onweek.checked = false;
                        onregion.checked = false;
                    }} /> Day:</InputLabel>
                    <TextField
                    id="ondaybox"
                    label=""
                    type="date"
                    size="small"
                    sx={{ width: "100%" }}
                    onChange={(e)=> {
                        const onday = document.getElementById("onday");
                        const onweek = document.getElementById("onweek");
                        const onregion = document.getElementById("onregion");
                        onday.checked = true;
                        onweek.checked = false;
                        onregion.checked = false;
                    }}
                    />
                    <br /><br />
                    <InputLabel><input type="radio" id="onweek" onChange={(e)=>{
                        const onday = document.getElementById("onday");
                        const onregion = document.getElementById("onregion");
                        onday.checked = false;
                        onregion.checked = false;
                    }} /> Weekday:</InputLabel>
                    <Select
                    id="onweekbox"
                    size="small"
                    sx={{ width: "100%" }}
                    onChange={(e)=> {
                        const onday = document.getElementById("onday");
                        const onweek = document.getElementById("onweek");
                        const onregion = document.getElementById("onregion");
                        onday.checked = false;
                        onweek.checked = true;
                        onregion.checked = false;
                    }}
                    >
                        <MenuItem value={1}>Monday</MenuItem>
                        <MenuItem value={2}>Tuesday</MenuItem>
                        <MenuItem value={3}>Wednesday</MenuItem>
                        <MenuItem value={4}>Thursday</MenuItem>
                        <MenuItem value={5}>Friday</MenuItem>
                        <MenuItem value={6}>Saturday</MenuItem>
                        <MenuItem value={0}>Sunday</MenuItem>
                    </Select>
                    <br /><br />
                    <InputLabel><input type="radio" id="onregion" onChange={(e)=>{
                        const onday = document.getElementById("onday");
                        const onweek = document.getElementById("onweek");
                        onday.checked = false;
                        onweek.checked = false;
                    }} /> Location:</InputLabel>
                    <TextField
                    id="onregionbox"
                    label=""
                    size="small"
                    placeholder="Type your location"
                    sx={{ width: "100%" }}
                    onChange={(e)=> {
                        const onday = document.getElementById("onday");
                        const onweek = document.getElementById("onweek");
                        const onregion = document.getElementById("onregion");
                        onday.checked = false;
                        onweek.checked = false;
                        onregion.checked = true;
                    }}
                    />
                    <br /><br />
                    <InputLabel>Message:</InputLabel>
                    <br />
                    <TextField
                    id="onmessagebox"
                    label=""
                    size="small"
                    multiline
                    maxRows={6}
                    placeholder="Type your message"
                    sx={{ width: "100%" }}
                />
                </CardContent>
                <CardActions sx={{ justifyContent: "center" }}>
                    <Button variant="contained" sx={{ m: 1.5, ml: 3, backgroundColor : "black" }} size="small"
                    onClick={(e) => {
                        const onday = document.getElementById("onday").checked;
                        const onweek = document.getElementById("onweek").checked;
                        const onregion = document.getElementById("onregion").checked;
                        let ondaybox = document.getElementById("ondaybox").value;
                        let onweekbox = document.getElementById("onweekbox").innerHTML;
                        let onregionbox = document.getElementById("onregionbox").value;
                        const ontitlebox = document.getElementById("ontitlebox").value;
                        const onmessagebox = document.getElementById("onmessagebox").value;
                        // *** //
                        if      ( onweekbox === "Monday" ) onweekbox = "1";
                        else if ( onweekbox === "Tuesday" ) onweekbox = "2";
                        else if ( onweekbox === "Wednesday" ) onweekbox = "3";
                        else if ( onweekbox === "Thursday" ) onweekbox = "4";
                        else if ( onweekbox === "Friday" ) onweekbox = "5";
                        else if ( onweekbox === "Saturday" ) onweekbox = "6";
                        else if ( onweekbox === "Sunday" ) onweekbox = "0";
                        else                               onweekbox = "7";
                        // *** //
                        if ( !ondaybox ) ondaybox = "0";
                        if ( !onregionbox ) onregionbox = "-";
                        // *** //
                        let ontype = 0;
                        // *** //
                        if      ( onday === true    ) ontype = 1;
                        else if ( onweek === true   ) ontype = 2;
                        else if ( onregion === true ) ontype = 3;
                        // *** //
                        const uid = sessionStorage.getItem("userid");
                        // *** //
                        let ok = 0;
                        // *** //
                        if ( !ontitlebox )
                            alert("You have to enter a specific title");
                        else if ( !onmessagebox )
                            alert("You have to enter a message");
                        else
                        {
                            switch (ontype)
                            {
                                case 1:
                                    if ( ondaybox === "0" )
                                        alert("You have to specify the date of the day!");
                                    else
                                        ok = 1;
                                    break;
                                case 2:
                                    if ( onweekbox === "7" )
                                        alert("You have pick up the day of the week!");
                                    else
                                        ok = 1;
                                    break;
                                case 3:
                                    if ( onregionbox === "-" )
                                        alert("You have to enter a location like a city or a full address with city, district, address information and country!");
                                    else
                                        ok = 1;
                                    break;
                                default:
                                    alert("You have to specify what kind of reminder you want to setup! Pick up a choise like Day, Weekday or Location!");
                                    break;
                            }    
                        }
                        // *** //
                        if ( ok )
                        {
                            com(
                            `https://wbs-backend-finalproject.herokuapp.com/notification/save/${uid}/${ontype}/${ondaybox}/${onweekbox}/${onregionbox}/${ontitlebox}/${onmessagebox}`,
                            function(e){}
                            );
                            // *** //
                            document.getElementById("onday").checked = false;
                            document.getElementById("onweek").checked = false;
                            document.getElementById("onregion").checked = false;
                            document.getElementById("ondaybox").value = "";
                            document.getElementById("onweekbox").innerHTML = "";
                            document.getElementById("onregionbox").value = "";
                            document.getElementById("ontitlebox").value = "";
                            document.getElementById("onmessagebox").value = "";
                            // *** //
                            alert("Your reminder has been created successfully");
                            // *** //
                           
                            loadTable();
                        }
                    }}
                    >
                    Save
                    </Button>
                </CardActions>
                </Card>
                </Box>
            </Grid>
            {/*
            <Grid item xs={7}>
                <Grid item xs={5} sx={{ m: "0 auto", mt: 3 }}>
                <Box sx={{ width: "500px", height: "400px", m: "0 auto", p: 0 }}
                p={2}> 
                <Card sx={{ minWidth: 1, maxWidth: 360, width: 420 }}>
                    <Typography sx={{ fontSize: "10px", fontWeight: "bold", p: 2 }}>
                    Notification
                    </Typography>  
                    <CardContent
                    sx={{ display: " flex", justifyContent: " space-between" }}
                    >
                    <Typography sx={{ fontSize: "13px", fontWeight: "bold", p: 2 }}>
                        Event Information
                    </Typography>{" "}
                    <FormGroup>
                        <FormControlLabel
                        control={<Switch defaultChecked id="onei" />}
                        label=""
                        />
                    </FormGroup>
                    </CardContent>
                    <CardContent
                    sx={{ display: " flex", justifyContent: " space-between" }}
                    >
                    <Typography sx={{ fontSize: "13px", fontWeight: "bold", p: 2 }}>
                        Message
                    </Typography>{" "}
                    <FormGroup>
                        <FormControlLabel
                        control={<Switch defaultChecked id="onms" />}
                        label=""
                        />
                    </FormGroup>
                    </CardContent>
                    <CardContent
                    sx={{
                        display: " flex",
                        justifyContent: " space-between",
                        m: 0,
                    }}
                    >
                    <Typography sx={{ fontSize: "13px", fontWeight: "bold", p: 2 }}>
                        Location
                    </Typography>{" "}
                    <FormGroup>
                        <FormControlLabel
                        control={<Switch defaultChecked id="onlo" />}
                        label=""
                        />
                    </FormGroup>
                    </CardContent>
    
                </Card>
                </Box>
                <Box >
                    <Button variant="contained" sx={{ m: 1.5, ml: 3 }} size="small"
                    onClick={() => {
                        let onei = document.getElementById("onei").checked;
                        const onms = document.getElementById("onms").checked;
                        const onlo = document.getElementById("onlo").checked;
                        // *** //
                        const uid = sessionStorage.getItem("userid");
                        // *** //
                        com(
                        `https://wbs-backend-finalproject.herokuapp.com/notification/notify/set/${uid}/${onei}/${onms}/${onlo}`,
                        function(e){}
                        );
                    }}
                    >
                        Save
                    </Button>
                    <Button variant="contained" sx={{ m: 1.5, ml: 3 }} size="small"
                    onClick={() => {
                        const uid = sessionStorage.getItem("userid");
                        // *** //
                        com(
                        `https://wbs-backend-finalproject.herokuapp.com/notification/notify/set/${uid}/1/1/1`,
                        function(e){}
                        );
                    }}
                    >
                        Discard
                    </Button>
                    </Box>
                </Grid>
            </Grid>
            */}
            </Grid>
        </Box>
        <Box sx={{ mt: "140px", ml: "50px" }}>
            <Grid item xs={4} sx={{ m: "0 auto", mt: 3 }}>
            <Box sx={{ width: "100%", height: "100%", m: "0 auto", p: 0 }}>
            <Card>
              <Typography sx={{ fontSize: "10px", fontWeight: "bold", p: 2 }}>
                Your Notifications
              </Typography>
              <CardContent>
                <div id = "notifications"></div>
              </CardContent>
            </Card>
            </Box>
            </Grid>
        </Box>
      </>
    );
  };

  export default NotificationSurface;
  