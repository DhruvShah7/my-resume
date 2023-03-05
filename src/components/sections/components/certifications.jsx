import React from "react";
import { Divider, Grid } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import SectionTitle from "../utils/sectionTitle";

const Certies = [
  {
    program: "Internet of Things & Modern Web Specialist",
    duration: "March 2018",
  },
  {
    program: "Oracle Certified Professional, Java SE6 Programmer (OCJP)",
    duration: "Aug 2014",
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
        className="d-flex flex-column align-items-start"
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

const Certifications = () => {
  const certiItems = Certies.map((item) => (
    <StudyItem keyProp={item.degree} studyObj={item} certificate />
  ));
  return (
    <>
      <SectionTitle title={"Certifications"} />
      {certiItems}
    </>
  );
};

Certifications.propTypes = {};

export default Certifications;
