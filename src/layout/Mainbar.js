import { Box } from "@mui/material";
import { Stack } from "@mui/system";
import Footer from "./Footer";
import Headerbar from "./Headerbar";
import MainBox from "./MainBox";
import SearchBar from "./SearchBar";
import Sidebar from "./Sidebar";

const Mainbar = () => {
  return (

    <Box
      bgcolor="pink"
      flex={2}
      p={2}
      sx={{ display: "flex", flexWrap: "wrap", flexDirection: "column" }}
    >
      <Headerbar />
      <SearchBar />
      <Footer />
    </Box>
 
  );
};

export default Mainbar;
