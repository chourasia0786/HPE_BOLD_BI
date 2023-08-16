import { Box, Card, Text, Button } from 'grommet';
import { View } from 'grommet-icons';
import HoverButton from './HoverButton';

import { useState } from 'react';
import AllTrackedCost from '../../ChartData/AllTrackedCost';
import DoughNutChart from '../../ChartData/DoughNutChart';
const CardDoughNutChart = (props) => {
  const barthk = 2;
  const [userData, setUserData] = useState({
    labels: AllTrackedCost.map((data) => data.element),

    datasets: [
      {
        label: 'My First Dataset',
        textAlign: 'start',
        data: AllTrackedCost.map((data) => data.value),
        barThickness: barthk,
        backgroundColor: [
          '#01A982',
          '#FFBC44',
          '#FC5A5A',
          '#00739D',
          '#C54E4B',
          '#00C8FF',
        ],
        categoryPercentage: 0.5,
        borderSkipped: false,
        hoverBackgroundColor: 'green',
        borderWidth: 0,
      },
    ],
  });
  return (
    <Box height='100%' className='wrapperclass'>
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
      <Box className='overlayclass'>
        <HoverButton selected={props.selected} />
      </Box>
    </Box>
  );
};
export default CardDoughNutChart;
