import { Box, Typography, Button } from "@mui/material";

const Headerbar = () => {
  return (
    <>
   <Box  sx={{display:"flex", width:'100%', maxwidth:500, height :"80px" ,flexDirection:"column", mt:"60px" , mb:"10px"}} >
      
   <Typography variant="h1" align="center" fontWeight="bold" sx={{mt:5}} >
          ON POINT
        </Typography>
   </Box>
    </>
  );
};

export default Headerbar;
