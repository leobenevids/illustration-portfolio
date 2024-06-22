import { Box } from "@mui/material";
import React from "react";

const Services = ({ ...props }) => {
  const { idSelector, bgColor } = props;
  return (
    <Box id={idSelector} sx={{ backgroundColor: bgColor, height: "100vh" }}>
      Services
    </Box>
  );
};

export default Services;
