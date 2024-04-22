import styles from '@/components/ExplorePageInfoComponents/Graph/BarGraph/Graph.module.css'
import { Line } from 'react-chartjs-2';
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

export default function Graph1(){

  const textColor = 'rgb(242, 245, 234)';
  const fontFamily = 'Poppins'

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
              data: ['28', '28.5', '29', '29.5', '30', '30.5', '31', '31.5', '32', '32.5', '33'],
              backgroundColor: 'rgb(11, 170, 129)',
            }
          ],
      })

      setChartOptions({
          plugins: {
              title: {
                display: true,
                text: 'Great Barrier Reef coral decline',
                color: textColor,
                font: {
                  family: fontFamily,
                  size: '20px'
                }
              },
              legend: {
                labels: {
                  color: textColor,
                  font: {
                    family: fontFamily,
                    size: '14px'
                  }
                }
              }
            },
            responsive: true,
            scales: {
              x: {
                stacked: true,
                title: {
                  display: true,
                  text: 'Years',
                  color: textColor,
                  font: {
                    family: fontFamily,
                    size: '14px'
                  }
                },
                ticks: {
                  color: textColor,
                  font: {
                    family: fontFamily,
                    size: '14px'
                  }
                }
              },
              y: {
                stacked: true,
                title: {
                  display: true,
                  text: 'Temperature (°C)',
                  color: textColor,
                  font: {
                    family: fontFamily,
                    size: '14px'
                  }
                },
                ticks: {
                  color: textColor,
                  font: {
                    family: fontFamily,
                    size: '14px'
                  }
                }
              },
            },
          maintainAspectRatio: false,
          responsive:true
      })
  }, [])

  return(
      <>
          <div className={styles.graphWrap}>
              <Line options={chartOptions} data={chartData} className={styles.testingCode}/>
          </div>
      </>
  )
}