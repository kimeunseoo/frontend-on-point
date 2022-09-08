
import React from "react";
import {
  Box,
  Stack,
  TextField,
  InputLabel,
  Container,
  Button,
  Typography,
  Autocomplete
} from "@mui/material";
import { useState } from "react";

import MapSearchLeaflet from "../map/MapSearchLeaflet";
// import SearchLocation from "../map/SearchLocation";
// import Try from "./Try";



function PostInModal(props) {
  const [selectedImage, setSelectedImage] = useState(null);

  //   const [nameValue, setNameValue] = useState("");
  // const { selectLocation } = props
  // const [LeafletSearchProps, setLeafletSearchProps]=useState(null)
  const [event, setEvent] = useState("");
  const [inputData, setInputData] = useState({
    title: "",
    date: "",
    location: "",
    image0:"",
    image1:"",
    image2:"",
    image3:"",
    image4:"",
    image5:"",
    image6:"",
    image7:"",
    image8:"",
    image9:"",
    description: "",
    maxNumber: "",
  });

  const url = "https://on-point-project.netlify.app/create";

/*  const requestOptions = {
    method : "POST",
    headers : {"content-type":"application/json"},
    body:JSON.stringify({
      winner: fightResult
    });
*/

const uid = sessionStorage.getItem("userid");

const handleSubmit = async (e) => {};

  const handleChange = (e) => {
    const newData = { ...inputData };
    // 이전 데이타에 더 추가한다는 말 -> 다시한번 물어볼 것.
    newData[e.target.name] = e.target.value;
    console.log(newData);
    setInputData(newData);
  };
 
const handleAdd = () => {
        const title = document.getElementsByName("title")[0];
        alert(title.value);
        setInputData([
          ...inputData,
          {
            title: "",
            date:"",
            image0:"",
            image1:"",
            image2:"",
            image3:"",
            image4:"",
            image5:"",
            image6:"",
            image7:"",
            image8:"",
            image9:"",
            description: "",
            location: "",
            MaxNumber:""
          }
        ])
      }
  
      let formTarget = `https://wbs-backend-finalproject.herokuapp.com/event/create/${uid}`;

      const CategorySearch = [
        { title: "General", year: 1957 },
        {
          title: "Performance",
          year: 2001,
        },
        { title: "Party", year: 1994 },
        { title: "House Party", year: 1972 },
        { title: "Bar Event", year: 2008 },
        { title: "Exhibition", year: 1957 },
        { title: "Film", year: 1993 },
        { title: "Concert", year: 1994 },
        { title: "Theatre", year: 1994 },
        { title: "Lecture", year: 1974 },
        {
          title: "Flea Market",
          year: 2003,
        },
        { title: "Museum", year: 0 },
        { title: "Club", year: 0 },
        { title: "Private Event", year: 0 },
        { title: "Sport", year: 0 },
        { title: "Musical", year: 0 },
        { title: "Market Hall", year: 0 }
      ];

  return (
    <div style={{height: "auto", maxHeight:"600px", overflow: "auto"}}>
      <form method = "post"
            action={formTarget}
            enctype = "multipart/form-data"
      >
        <Stack>
          <Typography sx={{ fontWeight: "bold", textAlign: "center", mb: 2 }}>
            {" "}
            Creat your Event{" "}
          </Typography>
          <InputLabel id="demo-select-small">Enter Event-Title:</InputLabel>
          <TextField sx={{m:0.5}}
            placeholder="title"
            type="text"
            name="title"
            required
          />
          <br /><br />
          <InputLabel id="demo-select-small">Select the matching event category:</InputLabel>
          <input type="text" id = "category" style={{display:"none"}} name="category" />
          <Autocomplete
          id="categorySelector2"
          options={CategorySearch}
          getOptionLabel={(option) => option.title}
          sx={{ zIndex:90001, width: "100%", display: "flex"}}
          placeholder="Category"
          renderInput={(params) => <TextField {...params} label="Category" />}
          onChange={(e)=>{
            window.setTimeout(function(){
            const selected = document.getElementById("categorySelector2").value;
            const selectedId = document.getElementById("category");
            // *** //
            if ( selected === "General" )
              selectedId.value = "0";
            else if ( selected === "Performance" )
              selectedId.value = "1";
            else if ( selected === "Party" )
              selectedId.value = "2";
            else if ( selected === "House Party" )
              selectedId.value = "3";
            else if ( selected === "Bar Event" )
              selectedId.value = "4";
            else if ( selected === "Exhibition" )
              selectedId.value = "5";
            else if ( selected === "Film" )
              selectedId.value = "6";
            else if ( selected === "Concert" )
              selectedId.value = "7";
            else if ( selected === "Theatre" )
              selectedId.value = "8";
            else if ( selected === "Lecture" )
              selectedId.value = "9";
            else if ( selected === "Flea Market" )
              selectedId.value = "10";
            else if ( selected === "Museum" )
              selectedId.value = "11";
            else if ( selected === "Club" )
              selectedId.value = "12";
            else if ( selected === "Private Event" )
              selectedId.value = "13";
            else if ( selected === "Sport" )
              selectedId.value = "14";
            else if ( selected === "Musical" )
              selectedId.value = "15";
            else if ( selected === "Market Hall" )
              selectedId.value = "16";
            console.log(selected + " -> " + selectedId.value);
            },150);
          }}
          />
          <br /><br />
          <InputLabel id="demo-select-small">Specify the Event-Date:</InputLabel>
          <TextField sx={{m:0.5}}
            placeholder="date"
            required
            type="date"
            name="date"
          />

          {/* <TextField sx={{m:0.5}}
            onChange={handleChange}
            placeholder="location"
            required
            type="text"
            value={inputData.location}
            name="location"
          /> */}
          {/* <Try /> */}
          <br /><br />
          <InputLabel id="demo-select-small">Where shell the event happen?</InputLabel>
          <MapSearchLeaflet />
          <br /><br />
          <InputLabel id="demo-select-small">Put some optional images:</InputLabel>
          {selectedImage && (
            <div>
              <img
                alt="not found"
                width={"250px"}
                name="myImage"
                src={URL.createObjectURL(selectedImage)}
              />
              <br />
              <button onClick={() => setSelectedImage(null)}>Remove</button>
            </div>
          )}
          <TextField
            sx={{ m: 0.5 }}
            type="file"
            name="myImage"
            onChange={(event) => {
              console.log(event.target.files[0]);
              setSelectedImage(event.target.files[0]);
            }}
          />
          <br /><br />
          <InputLabel id="demo-select-small">Type a short description:</InputLabel>
          <TextField sx={{m:0.5}}
            multiline
            rows={6}
            placeholder="description"
            type="text"
            name="description"
          />
          <br /><br />
          <InputLabel id="demo-select-small">Any people limition?</InputLabel>
          <TextField sx={{m:1}}
            placeholder="Limit People Number"
            type="number"
            name="maxNumber"
          />
          <Box sx={{display:"flex", justifyContent:"center"}}>
          {/* <Button type="submit" onClick={handleAdd}>Send</Button> */}
          <Button type="submit">Send</Button>
          </Box>
        </Stack>
      </form>
    </div>
    // <Container maxWidth="xs">
    //   <h4>Add Event</h4>
    //   <form>
    //     <Stack spacing={2}>
    //       <TextField
    //       // name="name"
    //       // required
    //       // fullWidth
    //       // label="Story Name"
    //       // onChange={(event) => handleName(event)}
    //       // value={name}
    //       />
    //       <Divider sx={{ marginBottom: 10, marginTop: 20 }} />
    //       <h4>Add Locations</h4>
    //       {inputFields.map((item, index) => (
    //         <div key={index}>
    //           <InputRow
    //           // inputFields={inputFields}
    //           // index={index}
    //           // item={item}
    //           // handleChange={handleChange}
    //           // handleRemove={handleRemove}
    //           // handleAdd={handleAdd}
    //           />
    //           <Divider sx={{ marginBottom: 10 }} />
    //         </div>
    //       ))}
    //       <Button type="submit" variant="contained" disableElevation>
    //         Send
    //       </Button>
    //       <Button disableElevation>Cancel</Button>
    //     </Stack>
    //   </form>
    // </Container>
  );
}

export default PostInModal;
