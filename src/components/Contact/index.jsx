import { Box } from "@mui/material";
import React from "react";

const Contact = ({ ...props }) => {
  const { idSelector, bgColor } = props;
  return (
    <Box id={idSelector} sx={{ backgroundColor: bgColor, height: "100vh" }}>
      Contact
    </Box>
  );
};

export default Contact;
