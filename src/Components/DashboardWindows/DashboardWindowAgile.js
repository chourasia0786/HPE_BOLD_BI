import { Box, Card, Text, TextArea, Grid, Button } from 'grommet';
import CardBarChart from '../../Components/Cards/CardBarChart';
import CardDoughNutChart from '../Cards/CardDoughNutChart';
import CardHorizontalBarChart from '../Cards/CardHorizontalBarChart';

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
        <CardBarChart el={cardElements[0]} />
        <CardDoughNutChart el={cardElements[1]} />
        <CardHorizontalBarChart el={cardElements[2]} />
        <CardBarChart el={cardElements[0]} />
        <CardDoughNutChart el={cardElements[1]} />
        <CardHorizontalBarChart el={cardElements[2]} />
        <CardBarChart el={cardElements[0]} />
        <CardDoughNutChart el={cardElements[1]} />
        <CardHorizontalBarChart el={cardElements[2]} />
      </Grid>
    </Box>
  );
};

export default DashboardWindowAgile;
