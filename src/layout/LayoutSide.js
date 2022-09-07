import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Headerbar from "./Headerbar";
import { Box, Container } from "@mui/material";
import { Stack } from "@mui/system";
import DashItem from "../components/DashBoard/DashItem";


function LayoutSide() {
  return (
    <Box>
      <Navbar />
      <Stack
        direction="row"
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        { sessionStorage.getItem("logged") ? <Sidebar /> : "" }

        {/* 레어박스  */}
        <Box
          sx={{
            display: { xl: "block", xs: "none" },
            width: "15%",
            height: "100vh",
          }}
        ></Box>
        <Stack
          bgcolor="#fff"
          flex={2}
          p={2}
          sx={{ display: "flex", flexWrap: "wrap", flexDirection: "column" }}
        >
          {/* 여기에 내용 넣으면 됌. */}
          <Headerbar />
          <DashItem />
        </Stack>

        <Box
          sx={{
            display: { xl: "block", xs: "none" },
            width: "15%",
            height: "100vh",
          }}
        ></Box>
      </Stack>
    </Box>
  );
}

export default LayoutSide;
