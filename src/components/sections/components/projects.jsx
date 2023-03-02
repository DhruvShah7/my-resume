import React from "react";
import {
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
} from "@mui/material";
import SectionTitle from "../utils/sectionTitle";
import CheckIcon from "@mui/icons-material/Check";
import { styled } from "@mui/material/styles";
import "./bounce.css";

const projectList = [
  {
    name: "Appraisal Tracker",
    tech: "JSP, Servlet, MySQL 5.6, Apache Tomcat 7",
    location: "Engineering Final Year Project at DSYN HUB, India",
    description: [
      "Developed an Appraisal Tracking system which is used to track the performance of an individual in an organization. An individual’s performance will be rated by his superiors of the organization. Performance rating is based on several attributes (like timelines, quality of work, communication skills etc.).",
    ],
  },
  {
    name: "Android Application",
    tech: "Android, J2EE, SQLITE, MySQL, Apache Tomcat",
    location: "Lambton College Curriculum Project (Mobile Development)",
    description: [
      "‘RateHub Plus’ was based on showing ratings and menus for different restaurants in a particular locality.",
      "Used volley library on client side and J2EE on server side to transfer data in speed.",
      "Used google maps API for showing the restaurants on the specific location.",
    ],
  },
];

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
}));

const ProjectItem = ({ projectObj }) => {
  const listItems = projectObj?.description?.map((text, i) => (
    <ListItem key={i} sx={{ p: 0 }}>
      <ListItemIcon>
        <CheckIcon fontSize="small" />
      </ListItemIcon>
      <ListItemText primary={text} />
    </ListItem>
  ));
  return (
    <Grid item className="bounce" xs={6}>
      <Item className="h-100 text-left" sx={{ p: 2 }}>
        <h3 className="m-0">{projectObj.name}</h3>
        <p className="m-0">
          <em>{projectObj.tech}</em>
        </p>
        <p className="m-0">
          <em>{projectObj.location}</em>
        </p>
        <List className="w-100">{listItems}</List>
      </Item>
    </Grid>
  );
};

const Projects = () => {
  return (
    <>
      <SectionTitle title={"My Projects"} />
      <Grid container columnSpacing={{ xs: 2, sm: 4 }} sx={{ mt: 3 }}>
        {projectList.map((project) => (
          <ProjectItem key={project.name} projectObj={project} />
        ))}
      </Grid>
    </>
  );
};

Projects.propTypes = {};

export default Projects;
