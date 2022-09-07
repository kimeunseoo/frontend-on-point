import { Box } from "@mui/material";
import { Stack } from "@mui/system";
// import Mainbar from "./Mainbar";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Headerbar from "./Headerbar";
import SearchBar from "./SearchBar";
import MainBox from "./MainBox";
import Footer from "./Footer";
import AddPost from "../components/AddPost";

// Navbar 없다가 핸드폰 사이즈되면, 생기게 하고싶음.

function LayoutMain() {
  return (
    <Box>
      <Navbar />
      <Stack
        direction="row"
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        {sessionStorage.getItem("logged") ? <Sidebar /> : ""}

        {/* 레어박스  */}
        <Box
          sx={{
            display: { xl: "block", xs: "none" },
            width: "15%",
            height: "100vh",
          }}
        ></Box>
        {/* <Mainbar /> */}
        <Stack
          // bgcolor="pink"
          flex={2}
          p={2}
          sx={{ display: "flex", flexWrap: "wrap", flexDirection: "column" }}
        >
          <Headerbar />
          <SearchBar />
          <AddPost />
          <MainBox />
          <Footer />
        </Stack>
        {/* 레어박스  */}

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

export default LayoutMain;
