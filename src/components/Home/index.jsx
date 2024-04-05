import { Box } from "@mui/material";
import React from "react";

const Home = ({ ...props }) => {
  return (
    <Box id={props.idSelector} sx={{ backgroundColor: "white", height: "100vh" }}>
      Home
    </Box>
  );
};

export default Home;
