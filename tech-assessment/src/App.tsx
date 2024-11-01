import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Menu from './components/Menu';
import DriverList from './components/DriverList/DriverList';
import { Box } from '@mui/material';

function App() {
  return (
    <Box className="App"
      sx={{
        display: "flex",
        flexDirection: "column",
      }}>
      <NavBar />
      <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginX: "2rem"
      }}>
        <Menu />
        <DriverList />
      </Box>
    </Box>
  );
}

export default App;
