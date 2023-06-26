import { Box, Card, Text, Button } from 'grommet';
import BarChart from '../../ChartData/BarChart';
import { useState } from 'react';
import MonthlyCharges from '../../ChartData/MonthlyCharges';
import DoughNutChart from '../../ChartData/DoughNutChart';
const CardDoughNutChart = (props) => {
  const barthk = 10;
  const [userData, setUserData] = useState({
    labels: MonthlyCharges.map((data) => data.month),

    datasets: [
      {
        label: 'Gross Collection in $K',
        data: MonthlyCharges.map((data) => data.value),
        barThickness: barthk,
        backgroundColor: ['#01A982'],
        borderRadius: barthk / 2,
        hoverBorderRadius: barthk / 2,
        categoryPercentage: 0.5,
        borderSkipped: false,
        hoverBackgroundColor: 'green',
      },
    ],
  });
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
          // style={{ backgroundColor: 'lavender' }}
          flex
          align='start'
          justify='center'
          height='100%'
        >
          <DoughNutChart height='100%' chartData={userData} />
        </Box>
        <Box height='20%' align='start' justify='end'>
          <Text flex color='black' weight='bold' size='small'>
            {props.el.title}
          </Text>
          <Text height='20%' weight='bold' size='xsmall'>
            {props.el.category}
          </Text>
        </Box>
      </Box>
    </Card>
  );
};
export default CardDoughNutChart;
