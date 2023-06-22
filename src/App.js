import logo from './logo.svg';
import React from 'react';
import { Grommet } from 'grommet';
import { hpe } from 'grommet-theme-hpe';
import './App.css';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';
import { BrowserRouter } from 'react-router-dom';
import Loginnew from './Pages/Loginnew';
import AppRoutes from './Routes/AppRoutes';
function App() {
  return (
    <Grommet theme={hpe} full>
      <NavBar />
      <AppRoutes />
      <Footer />
    </Grommet>
  );
}

export default App;
