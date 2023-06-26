import { Box, Card, Text, TextArea, Grid, Button } from 'grommet';
import CardBarChart from '../../Components/Cards/CardBarChart';
import CardDoughNutChart from '../Cards/CardDoughNutChart';

const DashboardWindowAgile = () => {
  const cardElements = [
    {
      amount: '$22,013',
      title: 'Monthly Charges Summary',
      category: 'GreenLake Billing',
    },
    {
      amount: '$22,013',
      title: 'All Tracked Cost',
      category: 'Consumption Analytics',
    },
    {
      amount: '$22,013',
      title: 'Capacity Planning Summary',
      category: 'GreenLake Capacity Planning',
    },
    {
      amount: '$22,013',
      title: 'Monthly Charges Summary',
      category: 'GreenLake Billing',
    },
    {
      amount: '$22,013',
      title: 'All Tracked Cost',
      category: 'Consumption Analytics',
    },
  ];
  return (
    <Box>
      <Text style={{ fontWeight: 'bold', color: 'black', fontSize: '20px' }}>
        Bold BI products
      </Text>
      <Grid pad='4%' columns='small' rows='auto' gap='large' fill='horizontal'>
        {cardElements.map((el) => {
          return <CardBarChart el={el}></CardBarChart>;
        })}
      </Grid>
      <Grid pad='4%' columns='small' rows='auto' gap='large' fill='horizontal'>
        {cardElements.map((el) => {
          return <CardDoughNutChart el={el}></CardDoughNutChart>;
        })}
      </Grid>
    </Box>
  );
};

export default DashboardWindowAgile;
