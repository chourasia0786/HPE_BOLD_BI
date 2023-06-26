import { Bar } from 'react-chartjs-2';
import { Box } from 'grommet';
import {
  Chart as chartJS,
  BarElement,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js/auto';

const BarChart = ({ chartData }) => {
  return (
    <Box height='100%'>
      <Bar data={chartData} options={{ maintainAspectRatio: false }}></Bar>
    </Box>
  );
};

export default BarChart;
