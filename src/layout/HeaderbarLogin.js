import React from "react";
import { Box, Typography, Button, Link } from "@mui/material";
import { useNavigate } from 'react-router-dom';

function HeaderbarLogin() {
  const navigate = useNavigate();

  return (
    <div>

      <Link onClick={() => navigate('/login')}
>
        <Button
          variant="contained"
          size="small"
          sx={{
            color: "#000",
            position: "fixed",
            right: "30px",
            p: 1,
            m: -1,
            ml:"30px"
          }}
        >
          Login
        </Button>
      </Link>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          maxwidth: 500,
          height: "80px",
          flexDirection: "column",
          mt: "40px",
        }}
      >
        <Typography variant="h1" align="center" fontWeight="bold">
          ON POINT
        </Typography>
      </Box>
    </div>
  );
}

export default HeaderbarLogin;
