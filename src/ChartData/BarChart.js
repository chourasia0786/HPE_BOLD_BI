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
  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
        labels: {
          font: {
            size: 1,
          },
        },
      },
    },
  };
  return (
    <Box height='100%'>
      <Bar data={chartData} options={options}></Bar>
    </Box>
  );
};

export default BarChart;
