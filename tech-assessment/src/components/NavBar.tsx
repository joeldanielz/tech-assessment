import { AppBar, Box, IconButton } from '@mui/material';
import MenuIcon from "@mui/icons-material/Menu";
import React from 'react';

export default function NavBar() {
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
          backgroundColor: "rgba(0,0,0,0.8)",
        }}
        position="static"
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginY: "0.5rem",
            paddingX: "3rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flex: 50,
            }}
          >
            {/* Only show button on mobile */}
            <IconButton
              size="large"
              onClick={() => {
              }}
              sx={{
                color: "white",
                marginRight: "2rem"
              }}
            >
              <MenuIcon />
            </IconButton>
            <a href="/" style={{textDecoration: "none", color:"white"}}>
              <h1>Logistics UK</h1>
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