import React from 'react';
import { AppBar, Box, IconButton } from '@mui/material';
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../assets/images/logo.png"
import { Image } from '@mui/icons-material';

interface Props {
  setIsHamburgerOpen: (isHamburgerOpen: boolean) => void;
}

export default function NavBar(props: Props) {
  const handleOpen = () => {
    props.setIsHamburgerOpen(true);
  };
  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "7vh",
      }}
    >
      <AppBar
        sx={{
          borderBottom: 1,
          backgroundColor: "rgba(255,255,255, 1)",
        }}
        position="static"
      >
        <Box
          className="nav-bar-container"
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginY: "0.5rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flex: 50,
            }}
          >
            <IconButton
              className="hamburger-icon"
              size="large"
              onClick={() => {
                handleOpen();
              }}
            >
              <MenuIcon />
            </IconButton>
            <a href="/" style={{ textDecoration: "none", color: "white", marginTop: "1.5rem", marginBottom: "1.5rem" }}>
              <img src={logo} />
            </a>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
          </Box>
        </Box>
      </AppBar>
    </Box>
  );
};