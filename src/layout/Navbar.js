import {
  AppBar,
  Box,
  InputBase,
  styled,
  Toolbar,
  Typography,
  Badge,
  Avatar,
  Menu,
  MenuItem,
  Button,
  IconButton,
} from "@mui/material";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import SettingsIcon from "@mui/icons-material/Settings";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import Sidebar from "./Sidebar";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
});
const SearchInNav = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "30%",
}));
const IconsInNav = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));
// 나브안에 있는 아이콘들을 박스로 감싸면, 나브에 아이콘들을 조정할 수 있음
const UserBox = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
  // sm < 사이즈보다 작아지면, 그 아이콘들을 없애라고 하는 거임
}));
// UserBox 를 사용하면, 핸드폰 사이즈로 바뀔 때 아이콘이 이름으로 바뀐다거나 조정가능..
const Navbar = ({ navItem, SidebarProps }) => {
  const [open, setOpen] = useState(false);
  // const [navBarOpen, setNavBarOpen]=useState(false)
  const [sidebarOpen, setSideBarOpen]= useState(false)
  return (
    <AppBar
      position="fixed"
      z-tabIndex={2}
      sx={{
        width: "100%",
        bgcolor: "#000",
        display: { md: "none", xs: "block" },
      }}
    >
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>

      <Sidebar SidebarProps={sidebarOpen} />
            <MenuIcon onClick={()=>{
             setSideBarOpen(!sidebarOpen)
            }} />
      
        </Typography>
        <Avatar
          src={sessionStorage.getItem("userlogo")}
          sx={{ width: 30, height: 30, display: { xs: "block", sm: "none" } }}
        />
        <IconsInNav>
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
          <Badge badgeContent={1} color="error">
            <NotificationsActiveIcon />
          </Badge>
          <Badge badgeContent={0} color="error">
            <SettingsIcon />
          </Badge>
        </IconsInNav>
        <UserBox onClick={(e) => setOpen(true)}>
          <Avatar src={sessionStorage.getItem("userlogo")} sx={{ width: 30, height: 30 }} />
          <Typography variant="span">{sessionStorage.getItem("username")}</Typography>
        </UserBox>
      </StyledToolbar>
      {/* <Button
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
      >
        Dashboard
      </Button> */}
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My List</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
