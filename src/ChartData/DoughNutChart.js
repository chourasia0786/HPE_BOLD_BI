import { Doughnut } from 'react-chartjs-2';
import { Box } from 'grommet';
import {
  Chart as chartJS,
  BarElement,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js/auto';

const DoughNutChart = ({ chartData }) => {
  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        align: 'start',
      },
    },
  };
  return (
    <Box height='100%'>
      <Doughnut data={chartData} options={options}></Doughnut>
    </Box>
  );
};

export default DoughNutChart;
