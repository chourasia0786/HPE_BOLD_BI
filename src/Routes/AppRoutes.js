import { Box } from 'grommet';
import { Route, Routes } from 'react-router-dom';
import Loginnew from '../Pages/Loginnew';
import Dashboard from '../Pages/Dashboard';
import { dept } from '../Config/values';
import DashboardWindowAgile from '../Components/DashboardWindows/DashboardWindowAgile';

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Loginnew />} path='/'></Route>

      <Route
        element={
          <Dashboard>
            <DashboardWindowAgile />
          </Dashboard>
        }
        path='/dashboard/Solution/Agile'
      ></Route>
      <Route
        element={<Dashboard />}
        path='/dashboard/Solution/Construction'
      ></Route>
      <Route
        element={<Dashboard />}
        path='/dashboard/Solution/Education'
      ></Route>
      <Route element={<Dashboard />} path='/dashboard/Solution/Energy'></Route>
      <Route element={<Dashboard />} path='/dashboard/Solution/Finance'></Route>
      <Route
        element={<Dashboard />}
        path='/dashboard/Solution/Government'
      ></Route>
      <Route
        element={<Dashboard />}
        path='/dashboard/Solution/Healthcare'
      ></Route>
      <Route
        element={<Dashboard />}
        path='/dashboard/Solution/Hospitality'
      ></Route>
      <Route element={<Dashboard />} path='/dashboard/Solution/HR'></Route>
      <Route
        element={<Dashboard />}
        path='/dashboard/Solution/Information Technology'
      ></Route>
      <Route
        element={<Dashboard />}
        path='/dashboard/Solution/Insurance'
      ></Route>

      <Route
        element={<Dashboard />}
        path='/dashboard/Solution/Manufacturing'
      ></Route>
      <Route
        element={<Dashboard />}
        path='/dashboard/Solution/Marketing'
      ></Route>
    </Routes>
  );
};

export default AppRoutes;
