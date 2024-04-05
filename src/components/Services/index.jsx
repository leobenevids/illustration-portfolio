import { Box } from "@mui/material";
import React from "react";

const Services = ({ ...props }) => {
  return (
    <Box id={props.idSelector} sx={{ backgroundColor: "yellow", height: "100vh" }}>
      Services
    </Box>
  );
};

export default Services;
