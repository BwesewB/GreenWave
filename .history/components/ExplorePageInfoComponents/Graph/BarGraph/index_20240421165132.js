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

  const textColor = 'var(--white)'

  const [chartData, setChartData] = useState({
      datasets: []
  })

  const [chartOptions, setChartOptions] = useState({})

  useEffect(() => {
      setChartData({
          labels: ['2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022'],
          datasets: [
            {
              label: 'Forest Fires',
              data: [0.5, 0.8, 0.6, 1.2, 1.5, 1.0, 0.9, 1.3, 2.0, 1.7, 1.4],
              backgroundColor: 'rgb(255, 99, 132)',
            },
            {
              label: 'Deforestation',
              data: [3.0, 3.2, 3.5, 4.0, 4.5, 4.7, 4.9, 5.2, 5.5, 6.0, 6.3],
              backgroundColor: 'rgb(75, 192, 192)',
            },
          ],
      })

      setChartOptions({
          plugins: {
              title: {
                display: true,
                text: 'Forest Loss in Brazil (2012-2022)',
              },
            },
            responsive: true,
            scales: {
              x: {
                stacked: true,
                ticks: {color: textColor}
              },
              y: {
                stacked: true,
                ticks: {color: textColor}
              },
            },
          maintainAspectRatio: false,
          responsive:true
      })
  }, [])

  return(
      <>
          <div className={styles.graphWrap}>
              <Bar options={chartOptions} data={chartData}/>
          </div>
      </>
  )
}