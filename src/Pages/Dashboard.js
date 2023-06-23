import { Box } from 'grommet';
import { useEffect, useState } from 'react';
import LeftSideBar from '../Components/LeftSideBar';
import BreadCrums from '../Components/BreadCrumb';
import { Button, Layer } from 'grommet';
import { getURL } from '../Utils/commonUtils';
import { Expand, Contract } from 'grommet-icons';
import { useLocation } from 'react-router-dom';
import DashboardWindowAgile from '../Components/DashboardWindows/DashboardWindowAgile';

const Dashboard = () => {
  const location = useLocation();
  const [name, setName] = useState(location.state);

  const [selected, setSelected] = useState('Agile');
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

  const onExit = (status) => {
    setShow(status);
  };
  return (
    <Box direction='row'>
      {show && (
        <Box>
          <LeftSideBar selected={selected} setSelected={setSelected} />
        </Box>
      )}
      <Box fill='horizontal'>
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
