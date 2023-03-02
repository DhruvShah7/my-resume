import React, { useState } from "react";
import {
  Divider,
  Link,
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
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import CheckIcon from "@mui/icons-material/Check";

const Jobs = [
  {
    designation: "Front End Engineer (React & React Native)",
    company: "Figure 1 Inc.",
    duration: "Nov 2021 - Jan 2023",
    location: "Toronto, ON",
    description: [
      "Designed, implemented, and maintained Web and Mobile Experience and API Integration layer.",
      "Implemented new features for Web in React, Mobile with React Native and middle tier in NodeJS communicating with Google firebase leveraging best in breed modern web frameworks and techniques.",
      "Worked with Swagger, Python and PostgreSQL to insert and retrieve test data in the BE.",
    ],
  },
  {
    designation: "Software Developer (React) & Workflow Lead",
    company: "Industrialwebapps.com Inc.",
    duration: "April 2018 - Nov 2021",
    location: "Sarnia, ON",
    description: [
      "Analyzed requirements; designed, developed and implemented new functionalities using different technologies like ReactJS, Redux, ES6, Meteor, MongoDB, Docker, AWS, elasticsearch etc. to meet requirements for the project (SHORE).",
      "Worked with React Native, node server, realm etc. to create a mobile app that can provide offline support to the current project (SHORE).",
      "Worked with MERN (Mongo - Express - React - Node) stack for Check’N project.",
      "As a Workflow Lead, I analyzed, prioritized and assigned development requests to developers and made sure everything goes smoothly and in a timely manner through the workflow process.",
      "As a Peer Review Section Lead, I assigned reviewers and managed the timeline of all the issues in the peer review section of the workflow.",
      "Wrote and ran tests for the software using a combination of Mocha, Chai and Enzyme occasionally.",
      "Took part in design and workflow discussions, presented ideas for improvements and trained new developers in the company for testing.",
    ],
  },
  {
    designation: "Web Developer (Apache Cordova)",
    company: "Lambton College",
    duration: "May 2016 - May 2018",
    location: "Sarnia, ON",
    description: [
      "Worked on mobile applications for iOS and Android using Apache Cordova / Phone Gap (with jQuery mobile) dealing with MySQL as server side and SQLite as client-side database.",
      "Modularized and documented code and resolved bugs to enhance the flow & event processing of the existing application.",
      "Discussed different aspects and requirements of the app with the client and achieved the same.",
    ],
  },
  {
    designation: "JAVA Project Guide (coordinator)",
    company: "Royal Technosoft P. Limited",
    duration: "Dec 2014 - May 2015",
    location: "Ahmedabad, India",
    description: [
      "Provided complete lifecycle support to interns and co-op students from initial requirements analysis, design, coding, testing and debugging till the completion of the project.",
      "Provided ongoing application support and troubleshooting and proactively assisted students to solve the errors or bugs.",
    ],
  },
  {
    designation: "Core JAVA Instructor",
    company: "Royal Technosoft P. Limited",
    duration: "July 2014 - Dec 2014",
    location: "Ahmedabad, India",
    description: [
      "Taught the concepts of core java technology to students.",
      "Provided group and individualized assistance to students learning at various skills levels.",
      "Prepared students for the Oracle Certified examination for core java.",
    ],
  },
];

const JobItem = ({ jobObj }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails((prev) => !prev);
  };

  const listItems = jobObj?.description?.map((text, i) => (
    <ListItem key={i} sx={{ p: 0 }}>
      <ListItemIcon>
        <CheckIcon fontSize="small" />
      </ListItemIcon>
      <ListItemText primary={text} />
    </ListItem>
  ));

  return (
    <TimelineItem>
      <TimelineOppositeContent color="textSecondary" sx={{ paddingLeft: 0 }}>
        {jobObj.duration}
      </TimelineOppositeContent>
      <TimelineSeparator>
        <LaptopMacIcon sx={{ margin: "8px 0px" }} />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <h3 style={{ margin: "0px" }}>{jobObj.designation}</h3>
        <p style={{ margin: "0px 0px 5px 0px" }}>
          <em>
            {jobObj.company} - {jobObj.location}
          </em>
        </p>
        <Link
          component="button"
          variant="body2"
          underline="none"
          onClick={toggleDetails}
          sx={{ display: "flex", alignItems: "center" }}
        >
          Read&nbsp;{showDetails ? "less" : "more"}&nbsp;
          {showDetails ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </Link>
        <Zoom in={showDetails} mountOnEnter unmountOnExit>
          <List sx={{ width: "100%" }}>{listItems}</List>
        </Zoom>
      </TimelineContent>
    </TimelineItem>
  );
};

const WorkHistory = () => {
  const jobItems = Jobs.map((job) => (
    <JobItem keyProp={job.designation} jobObj={job} />
  ));
  return (
    <>
      <h2
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* <WorkHistoryIcon />
        &nbsp;&nbsp; */}
        My Employment
      </h2>
      <Divider sx={{ borderWidth: 2 }} />
      <Timeline
        sx={{
          [`& .${timelineOppositeContentClasses.root}`]: {
            flex: 0.2,
          },
          p: 0,
        }}
      >
        {/* {Jobs.map((job, i) => (
          <JobItem keyProp={job.designation + i} jobObj={job} />
        ))} */}
        {jobItems}
      </Timeline>
    </>
  );
};

WorkHistory.propTypes = {};

export default WorkHistory;
