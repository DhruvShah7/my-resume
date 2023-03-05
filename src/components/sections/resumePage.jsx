import React from "react";
import Box from "@mui/material/Box";
import { Container, Grid, IconButton, Paper } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";
import WorkHistory from "./components/workHistory";
import ProgrammingSkills from "./components/programmingSkills";
import Education from "./components/education";
import Projects from "./components/projects";
import Certifications from "./components/certifications";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  padding: "20px",
}));

const ResumePage = () => {
  return (
    <Box className="w-100">
      <Container maxWidth="xlg" className="h-100">
        <div className="d-flex flex-column align-items-center justify-content-center text-center">
          {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
          <h1>// Resume</h1>
          <p style={{ padding: "0px 10px" }}>
            Oracle Certified Professional, Java SE6 Programmer with 1-year
            experience with writing and teaching Java Programs in academic
            institute, 2-year experience as an Apache Cordova Developer, 4+
            years experience as a React and React Native Developer working with
            ReactJS, React Native, NodeJS, Redux, MongoDB, Firebase, Meteor and
            AWS.
          </p>
        </div>
        <div>
          <Grid container>
            <Grid item md={8} xs={12} sx={{ minHeight: "100px" }} p={2}>
              <Item key={"employment"} elevation={1}>
                <WorkHistory />
              </Item>
              <Item key={"education"} elevation={1} sx={{ mt: 3 }}>
                <Education />
              </Item>
              <Item key={"certifications"} elevation={1} sx={{ mt: 3 }}>
                <Certifications />
              </Item>
              <Item key={"projects"} elevation={1} sx={{ mt: 3 }}>
                <Projects />
              </Item>
            </Grid>
            <Grid item md={4} xs={12} sx={{ minHeight: "100px" }} p={2}>
              <Item key={"skills"} className="h-100 bounce" elevation={8}>
                <ProgrammingSkills />
              </Item>
            </Grid>
          </Grid>
        </div>
        <div className="d-flex align-items-center justify-content-center my-20">
          <IconButton onClick={() => {}} color="inherit">
            <ExpandMoreIcon className="bounce2" sx={{ fontSize: 80 }} />
          </IconButton>
        </div>
      </Container>
    </Box>
  );
};

ResumePage.propTypes = {};

export default ResumePage;
