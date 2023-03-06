import React, { useRef } from "react";
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
  const aboutMePageRef = useRef(null);
  const resumePageRef = useRef(null);
  const contactPageRef = useRef(null);

  const scrollTo = (scrollToSection) => {
    let ref = aboutMePageRef;
    if (scrollToSection === "resume") ref = resumePageRef;
    else if (scrollToSection === "contact") ref = contactPageRef;

    window.scrollTo({
      behavior: "smooth",
      top:
        ref.current.getBoundingClientRect().top -
        document.body.getBoundingClientRect().top -
        64,
    });
  };

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
        <AboutMePage ref={aboutMePageRef} scrollTo={scrollTo} />
        <ResumePage ref={resumePageRef} scrollTo={scrollTo} />
        <ContactPage ref={contactPageRef} />
        <ScrollTop>
          <Fab size="large" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
      </Box>
    </Box>
  );
};

DiscoverHome.propTypes = {};

export default DiscoverHome;
