import React from "react";
import { List, ListItem, ListItemText } from "@mui/material";
import SectionTitle from "../utils/sectionTitle";

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
  const progSkillList = ProgrammingSkillsConstants.map((text) => (
    <ListItem key={text} sx={{ p: 0 }}>
      <ListItemText primary={text} />
    </ListItem>
  ));

  const databaseList = Database.map((text) => (
    <ListItem key={text} sx={{ p: 0 }}>
      <ListItemText primary={text} />
    </ListItem>
  ));

  const webServicesList = WebServices.map((text) => (
    <ListItem key={text} sx={{ p: 0 }}>
      <ListItemText primary={text} />
    </ListItem>
  ));

  const versionControlList = VersionControl.map((text) => (
    <ListItem key={text} sx={{ p: 0 }}>
      <ListItemText primary={text} />
    </ListItem>
  ));

  return (
    <>
      <SectionTitle title={"Programming Skills"} />
      <List className="w-100" sx={{ columnCount: 2, p: 1 }}>
        {progSkillList}
      </List>
      <SectionTitle title={"Databases"} className="mt-15" />
      <List className="w-100" sx={{ columnCount: 2, p: 1 }}>
        {databaseList}
      </List>
      <SectionTitle title={"Web Services"} className="mt-15" />
      <List className="w-100" sx={{ p: 1 }}>
        {webServicesList}
      </List>
      <SectionTitle title={"Version Control"} className="mt-15" />
      <List className="w-100" sx={{ columnCount: 2, p: 1 }}>
        {versionControlList}
      </List>
    </>
  );
};

ProgrammingSkills.propTypes = {};

export default ProgrammingSkills;
