import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";

const SectionTitle = ({ title, className = "" }) => {
  return (
    <Box
      className={`d-flex align-items-center justify-content-center bg-dark text-white ${className}`}
      sx={{ p: "10px" }}
    >
      <h2 className="m-0">{title}</h2>
    </Box>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default SectionTitle;
