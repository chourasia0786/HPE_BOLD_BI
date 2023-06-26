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
  return (
    <Box height='100%'>
      <Doughnut
        data={chartData}
        options={{ maintainAspectRatio: false }}
      ></Doughnut>
    </Box>
  );
};

export default DoughNutChart;
