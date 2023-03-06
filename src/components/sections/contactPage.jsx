import React, { forwardRef, useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import { Loader } from "@googlemaps/js-api-loader";
import { Grid, Link } from "@mui/material";
import MapRoundedIcon from "@mui/icons-material/MapRounded";
import AlternateEmailRoundedIcon from "@mui/icons-material/AlternateEmailRounded";
import PhoneIphoneRoundedIcon from "@mui/icons-material/PhoneIphoneRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./contactPage.css";

const loader = new Loader({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  version: "weekly",
  libraries: ["places"],
});

const mapOptions = {
  center: {
    lat: 42.97456,
    lng: -82.40654,
  },
  zoom: 8,
};

const ContactPage = ({}, ref) => {
  const googleMapRef = useRef(null);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    loader
      .load()
      .then((google) => {
        const map = new google.maps.Map(googleMapRef.current, mapOptions);
        new google.maps.Marker({
          position: mapOptions.center,
          map: map,
        });
      })
      .catch((e) => {
        console.log("something went wrong - ", e);
      });
  }, []);

  return (
    <>
      <Box
        ref={ref}
        className="d-flex flex-column align-items-center justify-content-center bg-dark"
        sx={{
          mb: 5,
          py: 5,
          minHeight: "100px",
          boxShadow: "0px 15px 15px 10px rgba(0,0,0,0.5)",
        }}
      >
        <h1 className="text-white">// Reach me</h1>
        <Box
          ref={googleMapRef}
          height={"30vw"}
          width={"30vw"}
          sx={{ borderRadius: "50%", bgcolor: "white", my: 4 }}
        />
        <Grid container maxWidth={"lg"} spacing={2} sx={{ mt: 5 }}>
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            className="d-flex align-items-start justify-content-center"
          >
            <Box width={"50%"} className="contactOptionBox">
              <MapRoundedIcon fontSize="large" id="reachMeMap" />
              <Link
                href="http://maps.google.com/?q=Sarnia, ON, Canada"
                target={"_blank"}
                underline="none"
                color="inherit"
              >
                <h4>Based in Sarnia, ON, Canada</h4>
              </Link>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            className="d-flex align-items-start justify-content-center text-white"
          >
            <Box width={"50%"} className="contactOptionBox">
              <AlternateEmailRoundedIcon fontSize="large" id="reachMeEmail" />
              <Link
                href="mailto:dhruvenshah7@gmail.com"
                target={"_blank"}
                underline="none"
                color="inherit"
              >
                <h4>dhruvenshah7 @gmail.com</h4>
              </Link>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            className="d-flex align-items-start justify-content-center text-white"
          >
            <Box width={"50%"} className="contactOptionBox">
              <PhoneIphoneRoundedIcon fontSize="large" id="reachMeCell" />
              <Link href="tel:+1519-331-7008" underline="none" color="inherit">
                <h4>+1 519 331 7008</h4>
              </Link>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            className="d-flex align-items-start justify-content-center text-white"
          >
            <Box width={"50%"} className="contactOptionBox">
              <LinkedInIcon fontSize="large" id="reachMeLinkedIn" />
              <Link
                href="https://www.linkedin.com/in/dhruven-shah/"
                target={"_blank"}
                underline="none"
                color="inherit"
              >
                <h4>Message me on LinkedIn</h4>
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box className="w-100 text-center" sx={{ my: 10 }}>
        <Link
          component="button"
          variant="body2"
          underline="none"
          color="inherit"
          className="gotoTopBtn"
          sx={{ fontSize: 34 }}
          onClick={scrollToTop}
        >
          Go to Top
        </Link>
      </Box>
    </>
  );
};

export default forwardRef(ContactPage);
