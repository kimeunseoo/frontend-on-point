import React from "react";
import Checkbox from '@mui/material/Checkbox';
import {
  Grid,
  Box,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@mui/material";
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function MyListCard() {
  return (
    <>
      <Card sx={{minWidth: 250 }}>
        <CardContent>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <Box>
                <Typography
                  sx={{
                    fontSize: 10,
                    fontWeight: "bold",
                    textAlign: "end",
                  }}
                  color="text.secondary"
                  gutterBottom
                >
                  Event name
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box>
                <Checkbox
                  {...label}
                  sx={{ display: "flex", justifyContent: "flex-end" }}
                />
              </Box>
            </Grid>
          </Grid>

          {/* 따로 설정하기 위해서 TITLE / EVENT NAME  */}
          <Grid container spacing={1}>
            <Grid item xs={2}>
              <Box>
                {" "}
                <Typography
                  sx={{ mb: 1, fontSize: 7, fontWeight: "bold" }}
                  color="text.secondary"
                >
                  Time
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={10}>
              <Box>
                <Typography
                  sx={{ mb: 1, fontSize: 7, fontWeight: "bold" }}
                  color="text.secondary"
                >
                  8. December 2022, 18:00–22:00
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid item xs={2}>
              <Box>
                {" "}
                <Typography
                  sx={{ mb: 1, fontSize: 7, fontWeight: "bold" }}
                  color="text.secondary"
                >
                  Place
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={10}>
              <Box>
                <Typography
                  sx={{ mb: 1, fontSize: 7, fontWeight: "bold" }}
                  color="text.secondary"
                >
                  Groupius Bau
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid item xs={2}>
              <Box>
                {" "}
                <Typography
                  sx={{ mb: 1, fontSize: 7, fontWeight: "bold" }}
                  color="text.secondary"
                >
                  Notes
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={10}>
              <Box>
                <Typography
                  sx={{ mb: 1, fontSize: 7, fontWeight: "bold" }}
                  color="text.secondary"
                >
                  entry Free
                </Typography>
              </Box>
            </Grid>
            {/* myEventList  */}
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}

export default MyListCard;
