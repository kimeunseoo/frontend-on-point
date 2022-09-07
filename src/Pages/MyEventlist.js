import Sidebar from "../layout/Sidebar";
import Headerbar from "../layout/Headerbar";
import Navbar from "../layout/Navbar";
import { Box, Container } from "@mui/material";
import { Stack } from "@mui/system";
import MyEvent from "../components/Eventlist/MyEvent";
function MyEventlist() {
  return (
    <Box>
      <Navbar />
      <Stack
        direction="row"
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <Sidebar />

        {/* BlockBox  */}
        <Box
          sx={{
            display: { xl: "block", xs: "none" },
            width: "15%",
            height: "100vh",
          }}
        ></Box>
        <Stack
          // bgcolor="pink"
          flex={2}
          p={2}
          sx={{ display: "flex", flexWrap: "wrap", flexDirection: "column" }}
        >
          {/* Inhaltpages ex) Dashboard/dashboradDetail/Setting/MyEventlist */}
        <MyEvent />
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

export default MyEventlist;
