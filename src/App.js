import logo from './logo.svg';
import React from "react";
import { Grommet } from "grommet";
import { hpe } from "grommet-theme-hpe";
import './App.css';
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <Grommet className="App"  themeMode="light" theme={hpe} full>
    <BrowserRouter>
        <Login />
    </BrowserRouter>
    </Grommet>    
    );
  }

export default App;