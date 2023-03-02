import React from "react";
import { Divider, Grid } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";

const Studies = [
  {
    program: "Internet Programming & Database Management (co-op)",
    degree: "Ontario Grad Certificate",
    college: "Lambton College",
    duration: "Sept 2015 – Dec 2016",
    location: "Sarnia, ON",
  },
  {
    program: "Computer Engineering",
    degree: "Bachelor of Engineering",
    college: "Gujarat Technological University",
    duration: "July 2010 - July 2014",
    location: "Ahmedabad, India",
  },
];

const StudyItem = ({ studyObj }) => {
  return (
    <Grid container sx={{ p: 3 }}>
      <Divider orientation="vertical" flexItem>
        <SchoolIcon />
      </Divider>
      <Grid
        item
        xs
        sx={{
          marginLeft: "5px",
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
        }}
      >
        <h3 style={{ margin: "0px" }}>{studyObj.program}</h3>
        <p style={{ margin: "0px" }}>
          <em>{studyObj.degree}</em>
        </p>
        <p style={{ margin: "0px" }}>
          <em>
            {studyObj.college} - {studyObj.location}
          </em>
        </p>
        <p style={{ margin: "0px" }}>
          <em>{studyObj.duration}</em>
        </p>
      </Grid>
    </Grid>
  );
};

const Education = () => {
  const studyItems = Studies.map((item) => (
    <StudyItem keyProp={item.degree} studyObj={item} />
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
        My Education
      </h2>
      <Divider sx={{ borderWidth: 2 }} />
      {studyItems}
    </>
  );
};

Education.propTypes = {};

export default Education;
