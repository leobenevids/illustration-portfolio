import { Box } from "@mui/material";
import React from "react";

const About = ({ ...props }) => {
  const { idSelector, bgColor } = props;
  return (
    <Box id={idSelector} sx={{ backgroundColor: bgColor, height: "100vh" }}>
      About
    </Box>
  );
};

export default About;
