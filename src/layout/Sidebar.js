import MenuIcon from "@mui/icons-material/Menu";
import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import {
  Box,
  Divider,
  Link,
  List,
  ListItem,
  ListItemIcon,
  Typography,
  styled,
  Stack,
  InputBase,
  Button,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ListAltIcon from "@mui/icons-material/ListAlt";
import MarkChatUnreadIcon from "@mui/icons-material/MarkChatUnread";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';

const SidebarData = [
  {
   
  },

  {
    id: 1,
    title: "home",
    icon:<HomeIcon />,
    link: "/home",
  },
  {
    id: 3,
    title: "My Eventlist",
    icon: <ListAltIcon />,
    link: "/mylist",
  },
  {
    id: 4,
    title: "Message",
    icon: <MarkChatUnreadIcon />,
    link: "/message",
  },
  {
    id: 5,
    title: "Notifications",
    icon: <NotificationsNoneIcon />,
    link: "/notifications",
  },
  {
    id: 6,
    title: "Settings",
    icon: <ManageAccountsIcon />,
    link: "/setting",
  },

  {
    id: 7,
    title: "",
  },
  {
    id: 8,
    title: "",
  },
  {
  },
  {
    id: 10,
    title: "Logout",
    icon: <LogoutIcon />,
    link: "/logout",
  },
];

const Sidebar = ({props, sidebarOpen}) => {
  const navigate = useNavigate();

  // const stylesClass = useStyles();
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);

  const SearchInNav = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: { width: isOpen ? "75%" : "0%" },
    display: { display: isOpen ? "block" : "none" },
  }));

  return (
    <Box
      sx={{
        display: { md: "block", xs: "none" },
        background: "#000",
        color: "#fff",
        height: "5000px",
        width: { width: isOpen ? "250px" : "80px" },
        transition: " all 0.5s",
      }}
    >
      <Box
        sx={{
          ml: { marginLeft: isOpen ? "80px" : "0px" },
          display: "flex",
          gap: "30px",
          
        }}
      >
        <Typography sx={{ display: { display: isOpen ? "block" : "none" } }}>
          
        </Typography>
        <Box sx={{ ml: { marginLeft: isOpen ? "100px" : "25px" } }}>
          <MenuIcon sx={{ width: "30px", height: "30px" }} onClick={toggle} />
        </Box>
      </Box>
      <List
        sx={{
          display: { md: "block", xs: "none" },
          background: "#000",
          color: "#fff",
          height: "1700px",
          width: { width: isOpen ? "250px" : "70px" },
          transition: " all 0.5s",
        }}
      >
        <ListItem>
          <Avatar
            sx={{
              width: 48,
              height: 48,
              margin: "0 auto",
              mb: "30px",
              mt: "50px",
              display: "flex"
            }}
            src={sessionStorage.getItem("userlogo")}
          />
        </ListItem>
        <ListItem sx={{ mb: "30px" }}>
          <Typography
            sx={{
              margin: "0 auto",
              display: "flex",
              display: { display: isOpen ? "block" : "none" },
            }}
          >
            {sessionStorage.getItem("username")}
          </Typography>
        </ListItem>
        <Divider component="li" variant="inset" />
        <ListItem>
          {/* <SearchInNav>
            <InputBase
              sx={{
                width: { width: isOpen ? "75%" : "0%" },
                display: { display: isOpen ? "block" : "none" },
              }}
              placeholder="Search...."
            />
          </SearchInNav>
          <Button sx={{ color: "red", display: "flex", mr:"30px"}}>
            <SearchTwoToneIcon />
          </Button> */}
        </ListItem>
        {SidebarData.map((item) => {
          return (
            <ListItem
              className="row"
              key={item.id}
              id={window.location.pathname === item.link ? "active" : ""}
              onClick={() => {
      
                if (item.id === 10) {
                  sessionStorage.setItem("logged", "")
                  sessionStorage.setItem("userid", "")
                  navigate("/")
                } else 
                window.location.pathname = item.link;
              }}
            >
              <ListItemIcon
                sx={{
                  color: "#fff",
                  display: "flex",
                  m: "0 auto",
                  flex: "30%",
                  cursor: "pointer",
                  ml: "15px",
                }}
              >
                {item.icon}
              </ListItemIcon>

              <ListItem
                sx={{
                  fontsize: "18px",
                  flex: "70%",
                  cursor: "pointer",
                  display: { display: isOpen ? "block" : "none" },
                }}
                className="sideTitle"
              >
                {item.title}
              </ListItem>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};
export default Sidebar;
