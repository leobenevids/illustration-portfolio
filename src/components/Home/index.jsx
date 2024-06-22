import { Box } from "@mui/material";
import React from "react";

const Home = ({ ...props }) => {
  const { idSelector, bgColor } = props;
  return (
    <Box id={idSelector} sx={{ backgroundColor: bgColor, height: "100vh" }}>
      Home
    </Box>
  );
};

export default Home;
