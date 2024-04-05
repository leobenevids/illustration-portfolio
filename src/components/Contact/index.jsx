import { Box } from "@mui/material";
import React from "react";

const Contact = ({ ...props }) => {
  return (
    <Box id={props.idSelector} sx={{ backgroundColor: "blue", height: "100vh" }}>
      Contact
    </Box>
  );
};

export default Contact;
