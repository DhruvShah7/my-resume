import React, { useRef, useState } from "react";
import Box from "@mui/material/Box";
import {
  Button,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Zoom,
} from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import CheckIcon from "@mui/icons-material/Check";

const ProgrammingSkillsConstants = [
  "ReactJS",
  "React Native",
  "ReduxJS",
  "Node.js",
  "HTML5",
  "CSS3",
  "JavaScript",
  "jQuery",
  "J2SE",
  "J2EE",
  "C/C++",
  "Bootstrap",
];
const Database = ["MongoDB", "Google Firebase", "MySQL", "IBM DB2", "realm"];
const WebServices = ["AWS (Amazon Web Services)"];
const VersionControl = ["Bit Bucket", "JIRA", "GIT"];

const ProgrammingSkills = () => {
  return (
    <>
      <h2
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "start",
        }}
      >
        Programming Skills
      </h2>
      <List sx={{ width: "100%", columnCount: 2 }}>
        {ProgrammingSkillsConstants.map((text) => (
          <ListItem sx={{ p: 0 }}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider sx={{ borderWidth: 2, marginTop: "15px" }} />
      <h2
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "start",
        }}
      >
        Databases
      </h2>
      <List sx={{ width: "100%", columnCount: 2 }}>
        {Database.map((text) => (
          <ListItem sx={{ p: 0 }}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider sx={{ borderWidth: 2, marginTop: "15px" }} />
      <h2
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "start",
        }}
      >
        Web Services
      </h2>
      <List sx={{ width: "100%" }}>
        {WebServices.map((text) => (
          <ListItem sx={{ p: 0 }}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider sx={{ borderWidth: 2, marginTop: "15px" }} />
      <h2
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "start",
        }}
      >
        Version Control
      </h2>
      <List sx={{ width: "100%", columnCount: 2 }}>
        {VersionControl.map((text) => (
          <ListItem sx={{ p: 0 }}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </>
  );
};

ProgrammingSkills.propTypes = {};

export default ProgrammingSkills;
