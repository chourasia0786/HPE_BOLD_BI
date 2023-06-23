import logo from './logo.svg';
import React, { useContext } from 'react';
import { Grommet, ResponsiveContext } from 'grommet';
import { hpe } from 'grommet-theme-hpe';
import './App.css';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';
import { BrowserRouter } from 'react-router-dom';
import Loginnew from './Pages/Loginnew';
import AppRoutes from './Routes/AppRoutes';
import { getURL } from './Utils/commonUtils';
import NavBarLogin from './Components/NavBarLogin';
function App() {
  const path = getURL();
  return (
    <Grommet theme={hpe} full>
      {path === '/' ? <NavBarLogin /> : <NavBar />}
      <AppRoutes />
      <Footer />
    </Grommet>
  );
}

export default App;
