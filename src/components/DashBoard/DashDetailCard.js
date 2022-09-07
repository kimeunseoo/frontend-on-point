import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import { styled } from "@mui/material/styles";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import GradeRoundedIcon from "@mui/icons-material/GradeRounded";
import PhoneIcon from "@mui/icons-material/Phone";
import PlaceIcon from "@mui/icons-material/Place";
import PlagiarismOutlinedIcon from "@mui/icons-material/PlagiarismOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import { useState } from "react";

const MyChip = styled(Chip)(() => ({
  borderRadius: "4px",
  marginRight: "8px",
  marginBottom: "12px"
}));


function DashdetailCard( data ) {
  
  const [anchorEl, setAnchorEl] = useState(false);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(false);
  };
 

  return (
    <Card
      sx={{
        width:"600px",
        height:"430px",
        padding: 2,
        maxWidth: 400,
        alignItems:"center",
        margin:"0 auto"
      }}
    >
      <Grid container spacing={2}>
        {/* Image */}
        <Grid item xs={12}>
          <CardMedia
            component="img"
            height="100%"
            image={data.data[6]}
            sx={{ width:"370px", height:"300px" , m:"0 auto"}}
          />
        </Grid>
      </Grid>

   {/* Card Content */}
   <Grid item xs={8}>
          <CardContent
            sx={{
              padding:"0",
              margin: "0",
              width: "370px",
              height: "100px",
              position: "absolute",
              
            }}
          >
            <Stack sx={{  }} spacing={0.5}>
              <Box>
                <Typography
                  variant="body1"
                  component="subtitle1"
                  sx={{  left: "0", top: "0" }}
                >
                  {data.data[4]}
                </Typography>
                <Box sx={{ alignItems: "center", mt: 2, mr:3}}>
                  <PlaceIcon fontSize="small" color="error" />
                  <Link href="#" variant="body2">
                  {data.data[5]}
                  </Link>
                </Box>
              </Box>

              {/* Card Actions */}
             
            </Stack>

            {/* Skinny Menu */}
            <MoreVertIcon
              sx={{
                cursor: "pointer",
                position: "absolute",
                right: 0,
                top: 0
              }}
              fontSize="small"
              onClick={handleClick}
            ></MoreVertIcon>
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              elevation={3}
              autoFocus={false}
              anchorOrigin={{
                vertical: "center",
                horizontal: "center"
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
            >
              <MenuItem
                onClick={handleClose}
                sx={{ pb: "0", pt: "0", fontSize: "14px" }}
              >
                <ShareOutlinedIcon fontSize="small" sx={{ mr: 1 }} /> Share
              </MenuItem>
            </Menu>
          </CardContent>
        </Grid>


    </Card>
  );
}

export default DashdetailCard;
