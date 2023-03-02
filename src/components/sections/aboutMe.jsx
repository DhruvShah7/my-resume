import React from "react";
import Box from "@mui/material/Box";
import { Container, IconButton } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const AboutMe = () => {
  return (
    <Box sx={{ bgcolor: "#1A2027", width: "100%" }}>
      <Container
        maxWidth="md"
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "#fff",
        }}
      >
        <h1>// About Me</h1>
        <p>
          I am a front-end developer and web designer with many years of
          professional experience.
        </p>
        <p>
          I have worked on many full stack development projects, mobile apps, as
          well as designed websites. I'm a good front-end developer with a solid
          understanding of a variety of technologies - both front-end as well as
          back - and am a stickler for detail. I have experience working with
          responsive and mobile technologies, high-traffic websites, and I have
          worked with a range of very different clientele.
        </p>
        <p>
          Graduated from Lambton College with Ontario Graduate Certificate in
          Internet programming and database management program, and formally
          graduated from Gujarat Technological University with Bachelor of
          Engineering in Computer engineering 4 years program.
        </p>
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

AboutMe.propTypes = {};

export default AboutMe;
