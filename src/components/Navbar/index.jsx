import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Drawer,
  List,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ListItem from "../ListItem";
import { sections } from "../Sections";
import { scrollToSection } from "../../util";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const toggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
  };

  return (
    <>
      <AppBar position="static" color="secondary" sx={{ position: "fixed" }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Illustration
          </Typography>
          {isSmallScreen ? (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={toggleDrawer}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <>
              {sections.map(({ label }, index) => (
                <Button key={index} onClick={() => scrollToSection(label)}>
                  {label}
                </Button>
              ))}
            </>
          )}
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer}>
        <List sx={{ width: "35vw"} }>
          {sections.map(({ label, icon }, index) => (
            <ListItem
              key={index}
              label={label}
              icon={icon}
              onClick={() => {
                scrollToSection(label);
                toggleDrawer();
              }}
            />
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
