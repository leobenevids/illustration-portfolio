import { Box } from "@mui/material";
import React from "react";

const About = ({ ...props }) => {
  return (
    <Box id={props.idSelector} sx={{ backgroundColor: "red", height: "100vh" }}>
      About
    </Box>
  );
};

export default About;
