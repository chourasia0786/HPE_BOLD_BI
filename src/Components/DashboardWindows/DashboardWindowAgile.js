import { Box, Card, Text, TextArea, Grid, Button } from 'grommet';

const DashboardWindowAgile = () => {
  const cardElements = [
    {
      title: 'Monthly Charges Summary',
      category: 'GreenLake Billing',
    },
    {
      title: 'All Tracked Cost',
      category: 'Consumption Analytics',
    },
    {
      title: 'Capacity Planning Summary',
      category: 'GreenLake Capacity Planning',
    },
    {
      title: 'Monthly Charges Summary',
      category: 'GreenLake Billing',
    },
    {
      title: 'All Tracked Cost',
      category: 'Consumption Analytics',
    },
    {
      title: 'Capacity Planning Summary',
      category: 'GreenLake Capacity Planning',
    },
    {
      title: 'Monthly Charges Summary',
      category: 'GreenLake Billing',
    },
    {
      title: 'All Tracked Cost',
      category: 'Consumption Analytics',
    },
    {
      title: 'Capacity Planning Summary',
      category: 'GreenLake Capacity Planning',
    },
  ];
  return (
    <Box>
      <Text style={{ fontWeight: 'bold', color: 'black', fontSize: '20px' }}>
        Bold BI products
      </Text>
      <Grid pad='4%' columns='small' rows='auto' gap='large' fill='horizontal'>
        {cardElements.map((el) => {
          return (
            <Card
              height='360px'
              title='Edit Details'
              background='light'
              footer={<Button label='Update' secondary />}
            >
              <Box
                height='100%'
                direction='column'
                pad={{ horizontal: 'small', vertical: 'small' }}
                // align='center'
                justify='between'
              >
                <Box
                  style={{ backgroundColor: 'red' }}
                  flex
                  align='start'
                  justify='center'
                >
                  Graph
                </Box>
                <Box height='20%' align='start' justify='end'>
                  <Text flex color='black' weight='bold' size='small'>
                    {el.title}
                  </Text>
                  <Text height='20%' weight='bold' size='xsmall'>
                    {el.category}
                  </Text>
                </Box>
              </Box>
            </Card>
          );
        })}
      </Grid>
      {/* </Box>
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
        </Box> */}
    </Box>
  );
};

export default DashboardWindowAgile;
