import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import CONSTANTS from "../constants";
import profileImg from "../../assets/images/kungfu.jpg";

const drawerWidth = CONSTANTS.DRAWER_WIDTH;

const DrawerUtil = ({ mobileOpen = false, handleDrawerToggle }) => {
  const drawer = (
    <div>
      <Box
        sx={{
          width: drawerWidth,
          height: drawerWidth,
        }}
      >
        <img
          src={profileImg}
          alt="Dhruven Shah"
          style={{
            width: drawerWidth,
            height: drawerWidth,
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        ></img>
      </Box>
      <Divider />
      <List sx={{ paddingTop: 0 }}>
        <ListItem key={"About Me"} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={"About Me"} />
          </ListItemButton>
        </ListItem>
        <ListItem key={"Experiences"} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary={"Experiences"} />
          </ListItemButton>
        </ListItem>
        <ListItem key={"Education"} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={"Education"} />
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
    >
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

DrawerUtil.propTypes = {
  mobileOpen: PropTypes.bool.isRequired,
  handleDrawerToggle: PropTypes.func.isRequired,
};

export default DrawerUtil;
