import React from 'react'
import { Box, Button} from "@mui/material";
import { Stack  } from "@mui/system";
// import Mainbar from "./Mainbar";
import Headerbar from '../layout/Headerbar';
import SearchBar from '../layout/SearchBar';
import GastMainBox from '../layout/GastMainBox';
import Footer from '../layout/Footer';
import HeaderbarLogin from '../layout/HeaderbarLogin';


function GastMain() {
  return (
    <Box>
 
    <Stack
      direction="row"
      sx={{ display: "flex", justifyContent: "space-between" }}
    >

      {/* 레어박스  */}
      <Box
        sx={{
          display: { xl: "block", xs:"none" },
          width: "15%",
          height: "100vh",
        }}
      >
      </Box>
      {/* <Mainbar /> */}
      <Stack
        
        flex={2}
        p={2}
        sx={{ display: "flex", flexWrap: "wrap", flexDirection: "column" }}
      >

        <HeaderbarLogin />
        <SearchBar />
        <GastMainBox/>
        <Footer />
      </Stack>
      {/* 레어박스  */}
      
      <Box
        sx={{
          display: { xl: "block", xs:"none" },
          width: "15%",
          height: "100vh",
        }}
      >
      </Box>
    </Stack>
  </Box>
  )
}

export default GastMain