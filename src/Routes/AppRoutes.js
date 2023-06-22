import { Box } from 'grommet';
import { Route, Routes } from 'react-router-dom';
import Loginnew from '../Pages/Loginnew';
import Dashboard from '../Pages/Dashboard';

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Loginnew />} path='/'></Route>
      <Route element={<Dashboard />} path='/dashboard'></Route>
    </Routes>
  );
};

export default AppRoutes;
