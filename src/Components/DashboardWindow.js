import { Box, Card, Text, TextArea } from 'grommet';
import { CardDashboard } from './Cards/CardDashboard';

const DashboardWindow = () => {
  return (
    <Box>
      <Box>
        <Text style={{ fontWeight: 'bold', color: 'black', fontSize: '20px' }}>
          Bold BI products
        </Text>
      </Box>
      <Box direction='column'>
        <Box direction='row' pad={{ top: '2%' }}>
          <Box width='35%' pad={{ right: '2%' }}>
            <CardDashboard />
          </Box>
          <Box width='35%' pad={{ right: '2%' }}>
            <CardDashboard />
          </Box>
          <Box width='35%' pad={{ right: '2%' }}>
            <CardDashboard />
          </Box>
          <Card />
        </Box>
        <Box direction='row' pad={{ top: '2%' }}>
          <Box width='35%' pad={{ right: '2%' }}>
            <CardDashboard />
          </Box>
          <Box width='35%' pad={{ right: '2%' }}>
            <CardDashboard />
          </Box>
          <Box width='35%' pad={{ right: '2%' }}>
            <CardDashboard />
          </Box>
          <Card />
        </Box>
        <Box direction='row' pad={{ top: '2%' }}>
          <Box width='35%' pad={{ right: '2%' }}>
            <CardDashboard />
          </Box>
          <Box width='35%' pad={{ right: '2%' }}>
            <CardDashboard />
          </Box>
          <Box width='35%' pad={{ right: '2%' }}>
            <CardDashboard />
          </Box>
          <Card />
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardWindow;
