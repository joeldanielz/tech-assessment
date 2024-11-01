import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Menu from './components/Menu';
import DriverList from './components/DriverList/DriverList';
import { Box } from '@mui/material';

function App() {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState<boolean>(false);

  return (
    <Box className="App"
      sx={{
        display: "flex",
        flexDirection: "column",
      }}>
      <NavBar 
        setIsHamburgerOpen={setIsHamburgerOpen} />
      <Menu isHamburgerOpen={isHamburgerOpen}
        setIsHamburgerOpen={setIsHamburgerOpen}/>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginX: "2rem"
        }}>
        <DriverList />
      </Box>
    </Box>
  );
}

export default App;
