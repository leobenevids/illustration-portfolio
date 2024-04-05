import React from "react";
import { Button } from "@mui/material";
import MuiListItem from "@mui/material/ListItem";

const ListItem = ({ label = "", onClick = () => {}, icon = null }) => {
  return (
    <MuiListItem>
      <Button
        sx={{ display: "flex", alignItems: "flex-start" }}
        onClick={onClick}
        startIcon={icon}
      >
        {label}
      </Button>
    </MuiListItem>
  );
};

export default ListItem;
