import React from "react";
import { Divider, Grid } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import SectionTitle from "../utils/sectionTitle";

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

const StudyItem = ({ studyObj, certificate }) => {
  return (
    <Grid
      container
      sx={{ padding: certificate ? "16px 16px 8px 16px" : "16px" }}
    >
      <Divider orientation="vertical" flexItem>
        <SchoolIcon />
      </Divider>
      <Grid
        item
        xs
        className="d-flex flex-column align-items-start text-left"
        sx={{
          ml: 2,
        }}
      >
        <h3 className="m-0">{studyObj.program}</h3>
        {studyObj.degree && (
          <p className="m-0">
            <em>{studyObj.degree}</em>
          </p>
        )}
        {studyObj.college && studyObj.location && (
          <p className="m-0">
            <em>
              {studyObj.college} - {studyObj.location}
            </em>
          </p>
        )}
        <p className="m-0">
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
      <SectionTitle title={"My Education"} />
      {studyItems}
    </>
  );
};

Education.propTypes = {};

export default Education;
