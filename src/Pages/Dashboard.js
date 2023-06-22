import { Box } from 'grommet';
import { useState } from 'react';
import LeftSideBar from '../Components/LeftSideBar';
import BreadCrums from '../Components/BreadCrumb';
import { Button, Layer } from 'grommet';
import { getURL } from '../Utils/commonUtils';
import { Expand, Contract } from 'grommet-icons';
import DashboardWindow from '../Components/DashboardWindow';
const Dashboard = () => {
  const [show, setShow] = useState();
  const [expandStatus, setExpandStatus] = useState(false);
  const getPathElements = () => {
    const pathElements = [];
    const path = getURL();
    return pathElements;
  };

  const onExit = (status) => {
    setShow(status);
  };
  return (
    <Box direction='row'>
      {show && <LeftSideBar />}
      <Box fill='horizontal'>
        <BreadCrums expandStatus={expandStatus} />
        <Box align='start' direction='row'>
          <Box
            height='100%'
            flex
            margin={{ left: '40px', top: '20px', bottom: '20px' }}
          >
            <DashboardWindow />
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
