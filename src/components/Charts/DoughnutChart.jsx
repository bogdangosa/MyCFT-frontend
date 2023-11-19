import { Bar, Doughnut } from "react-chartjs-2";
//import { Chart as ChartJS } from "chart.js";
import Chart from 'chart.js/auto';

const DoughnutChart = ({data})=>{

    return <Doughnut data={data} options={{}}></Doughnut>
}

export default DoughnutChart;