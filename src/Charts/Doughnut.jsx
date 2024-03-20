import { Doughnut } from 'react-chartjs-2';
import { ArcElement, Chart, registerables } from 'chart.js';

const data = {
  labels: ['3 Vacant', '2 Occupied'],
  datasets: [{
    label: 'My First Dataset',
    data: [3, 2],
    backgroundColor: [
      '#9300D6',
      '#E34F00',
    ],
    hoverOffset: 4
  }]
};

const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'right',
        labels:{
          font:{
              size:19,
              family:'mono',
              weight: 'bold',
          },
      boxWidth: 20,
       borderRadius: 30,
        }
      },
      
    },
    elements:{
      point:{
          pointStyle:false,
          borderColor:'green'
      }
    }
};

Chart.register(...registerables);

const MyDoughnutChart = (props) => (
  <Doughnut data={data} options={options} {...props} />
);

export default MyDoughnutChart;
