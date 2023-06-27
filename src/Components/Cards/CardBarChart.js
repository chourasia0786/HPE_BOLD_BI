import { Box, Card, Text, Button } from 'grommet';
import BarChart from '../../ChartData/BarChart';
import HoverButton from './HoverButton';
import { useState } from 'react';
import { View } from 'grommet-icons';
import '../../Components/Cards/CardCss.css';
import MonthlyCharges from '../../ChartData/MonthlyCharges';
import { useNavigate } from 'react-router-dom';
const CardBarChart = (props) => {
  const barthk = 10;
  const navigate = useNavigate();
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
    <Box height='100%' className='wrapperclass'>
      <Card
        className='cardclass'
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
          <Box direction='row' height='10%' align='start' justify='start'>
            <Text height='20%' weight='bold' size='small'>
              {props.el.amount}
            </Text>
            <Text
              // alignSelf='end'
              margin={{ left: '10px' }}
              flex
              weight='light'
              size='xsmall'
            >
              Month to Date
            </Text>
          </Box>
          <Box
            // style={{ backgroundColor: 'lavender' }}
            flex
            align='start'
            justify='center'
            height='100%'
          >
            <BarChart height='100%' chartData={userData} />
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
      <Box className='overlayclass'>
        <HoverButton title={props.title} selected={props.selected} />
      </Box>
    </Box>
  );
};
export default CardBarChart;
