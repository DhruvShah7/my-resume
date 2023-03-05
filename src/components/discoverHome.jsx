import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import ScrollTop from "./utils/scrollTop";
import { Fab } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import AboutMePage from "./sections/aboutMePage";
import ResumePage from "./sections/resumePage";
import ContactPage from "./sections/contactPage";

const DiscoverHome = () => {
  return (
    <Box className="d-flex">
      <CssBaseline />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
        }}
      >
        <Toolbar />
        <AboutMePage />
        <ResumePage />
        <ContactPage />
        <ScrollTop>
          <Fab size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
      </Box>
    </Box>
  );
};

DiscoverHome.propTypes = {};

export default DiscoverHome;
