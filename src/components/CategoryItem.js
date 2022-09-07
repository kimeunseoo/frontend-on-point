import { Box, Typography } from "@mui/material";
import { Image } from "@mui/icons-material";
import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";


function CategoryItem(data) {
  const theme = createTheme();

  function getRandomRgb() {
    let num = Math.round(0xffffff * Math.random());
    let r = num >> 16;
    let g = (num >> 8) & 255;
    let b = num & 255;
    return "rgb(" + r + ", " + g + ", " + b + ")";
  }
  return (
    <Box
      sx={{
        padding: 1,
        backgroundColor: "#efe8d6",
        "&:hover": {
          backgroundColor: "#000",
          // cursor: "pointer",
        },
      }}
      onClick={(e) => {
        window.location.href = `http://localhost:3000/category/${data.data.cid}`;
      }}
    >
     
      <Box>
        <Typography
          //   onMouseOver={(e)=>{
          // 	e.target.style.backgroundColor="#000"
          // 	e.target.style.color="#fff"
          // 	console.log("onMouseOver")
          //   }}
          sx={{
            color: "#efe8d6",
            "&:hover": {
              color: "#fff",
              // cursor: "pointer",
            },
          }}
        >
         
          {data.data.title}
        </Typography>
        
        <img style={{width:"50px", height:"50px", marginLeft:"15px"}} src={data.data.icon} />
        <div class="categoryImg" >

        </div>
      </Box>
    </Box>
  );
}

export default CategoryItem;
