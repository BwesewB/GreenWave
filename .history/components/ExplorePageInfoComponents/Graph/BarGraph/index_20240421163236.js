import styles from '@/components/ExplorePageInfoComponents/Graph/BarGraph'
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { useEffect, useState } from "react"

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function Graph(){

    const [chartData, setChartData] = useState({
        datasets: []
    })

    const [chartOptions, setChartOptions] = useState({})

    useEffect(() => {
        setChartData({
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
              {
                label: 'Dataset 1',
                data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
                backgroundColor: 'rgb(255, 99, 132)',
              },
              {
                label: 'Dataset 2',
                data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
                backgroundColor: 'rgb(75, 192, 192)',
              },
              {
                label: 'Dataset 3',
                data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
                backgroundColor: 'rgb(53, 162, 235)',
              },
            ],
        })

        setChartOptions({
            plugins: {
                title: {
                  display: true,
                  text: 'Chart.js Bar Chart - Stacked',
                },
              },
              responsive: true,
              scales: {
                x: {
                  stacked: true,
                },
                y: {
                  stacked: true,
                },
              },
            maintainAspectRatio: false,
            responsive:true
        })
    }, [])

    return(
        <>
            {/* <div>placeholder</div> */}
            <div>
                <Bar options={chartOptions} data={chartData} style={{width: "500px", height: "300px"}}/>
            </div>
        </>
    )
}