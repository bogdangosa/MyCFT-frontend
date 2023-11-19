import { Bar } from "react-chartjs-2";
//import { Chart as ChartJS } from "chart.js";
import Chart from 'chart.js/auto';

const BarChart = ({data})=>{

    return <Bar data={data} options={{
        legend: {
            display: false
        },
        tooltips: {
            callbacks: {
               label: function(tooltipItem) {
                      return tooltipItem.yLabel;
               }
            }
        },
        scales: {
            x:  {
              grid: {
                display: false
              }
            },
            y: {
              beginAtZero: true,
              grid: {
                display: false
              }
            }
        }
    }}></Bar>
}

export default BarChart;