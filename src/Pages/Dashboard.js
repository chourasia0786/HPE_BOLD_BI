import { Box, ResponsiveContext } from 'grommet';
import { useContext, useEffect, useState } from 'react';
import LeftSideBar from '../Components/LeftSideBar';
import BreadCrums from '../Components/BreadCrumb';
import { Button, Layer } from 'grommet';
import { getURL } from '../Utils/commonUtils';
import { Expand, Contract } from 'grommet-icons';
import { useLocation } from 'react-router-dom';
import DashboardWindowAgile from '../Components/DashboardWindows/DashboardWindowAgile';
import { dept } from '../Config/values';

const Dashboard = () => {
  const location = useLocation();
  const [name, setName] = useState(location.state);

  const [selected, setSelected] = useState(dept[0]);
  const [show, setShow] = useState();
  const [expandStatus, setExpandStatus] = useState(false);
  const path = getURL();
  const getPathElements = () => {
    const pathElements = [];
    return pathElements;
  };

  useEffect(() => {
    // name ? setSelected(name) : setSelected(selected);
    // console.log(name);
    // setSelected(name);
  });
  const size = useContext(ResponsiveContext);
  const onExit = (status) => {
    setShow(status);
  };
  return (
    <Box direction='row'>
      {show && (
        <Box
          width={
            !['xsmall', 'small', 'medium'].includes(size) ? '20vw' : '200px'
          }
        >
          <LeftSideBar selected={selected} setSelected={setSelected} />
        </Box>
      )}
      <Box flex>
        <BreadCrums
          selected={selected}
          setSelected={setSelected}
          expandStatus={expandStatus}
        />
        <Box align='start' direction='row'>
          <Box flex margin={{ left: '40px', top: '20px', bottom: '20px' }}>
            <DashboardWindowAgile />
          </Box>
          <Button margin={{ top: 'small' }}>
            {expandStatus ? (
              <Contract
                size='20px'
                onClick={() => {
                  setExpandStatus(false);
                  onExit(false);
                }}
              />
            ) : (
              <Expand
                size='20px'
                onClick={() => {
                  setExpandStatus(true);
                  onExit(true);
                }}
              />
            )}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
