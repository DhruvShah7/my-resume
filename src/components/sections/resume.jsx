import React from "react";
import Box from "@mui/material/Box";
import {
  Container,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";
import WorkHistory from "./components/workHistory";
import CheckIcon from "@mui/icons-material/Check";
import ProgrammingSkills from "./components/programmingSkills";
import Education from "./components/education";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  padding: "20px 20px",
}));

const Resume = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Container
        maxWidth="lg"
        sx={{
          height: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <h1>// Resume</h1>
          <p>
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
            <Grid item md={8} xs={12} sx={{ minHeight: "100px" }} p={1}>
              <Item key={"employment"} elevation={8}>
                <WorkHistory />
              </Item>
              <Item
                key={"education"}
                elevation={8}
                style={{ marginTop: "20px" }}
              >
                <Education />
              </Item>
            </Grid>
            <Grid item md={4} xs={12} sx={{ minHeight: "100px" }} p={1}>
              <Item elevation={8} style={{ height: "100%" }}>
                <ProgrammingSkills />
              </Item>
            </Grid>
          </Grid>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "20px 0px",
          }}
        >
          <IconButton onClick={() => {}} color="inherit">
            <ExpandMoreIcon sx={{ fontSize: 80 }} />
          </IconButton>
        </div>
      </Container>
    </Box>
  );
};

Resume.propTypes = {};

export default Resume;
