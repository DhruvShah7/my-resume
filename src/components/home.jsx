import React from "react";
import { Container, CssBaseline, Grid, Toolbar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import profileImg from "../assets/images/nature.jpg";
import "./home.css";

const Home = () => {
  const navigate = useNavigate();
  const gotoDiscoverHome = () => navigate("/discover");

  return (
    <Container maxWidth="xlg" sx={{ height: "100vh" }}>
      <CssBaseline />
      <Toolbar />
      <Grid container className="h-100 d-flex align-items-center" sx={{ p: 0 }}>
        <Grid
          item
          md={6}
          xs={12}
          className="d-flex align-items-center justify-content-center"
        >
          <button className="glow-on-hover" type="button">
            <h2 className="d-flex align-items-center justify-content-center m-0">
              <FileDownloadIcon />
              &nbsp; Download CV
            </h2>
          </button>
          &nbsp; &nbsp;
          <button
            className="glow-on-hover"
            type="button"
            onClick={gotoDiscoverHome}
          >
            <h2 className="d-flex align-items-center justify-content-center m-0">
              Discover&nbsp;
              <DoubleArrowIcon />
            </h2>
          </button>
        </Grid>
        <Grid item md={6} xs={12}>
          <div
            className="d-flex align-items-center justify-content-center bg-dark"
            style={{
              padding: "100px 0px",
            }}
          >
            <img
              className="homeImg"
              src={profileImg}
              height={400}
              width={400}
              alt="profile image"
            />
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

Home.propTypes = {};

export default Home;
