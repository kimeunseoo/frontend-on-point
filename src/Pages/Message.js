import Sidebar from "../layout/Sidebar";
import Headerbar from "../layout/Headerbar";
import Navbar from "../layout/Navbar";
import { Box, Container } from "@mui/material";
import { Stack } from "@mui/system";
import MessageSurface from "../components/MessageSurface";

function Message() {
  return (
    <Box>
      <Navbar />
      <Stack
        direction="row"
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <Sidebar />

        {/* 레어박스  */}
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
          {/* 여기에 내용 넣으면 됌. */}
        <MessageSurface />
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

export default Message;
