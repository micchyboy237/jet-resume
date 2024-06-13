import { Chart, ChartData, ChartOptions, registerables } from 'chart.js'
import 'chartjs-adapter-date-fns'
import { format } from 'date-fns'
import { useAtomValue } from 'jotai'
import React from 'react'
import { Line } from 'react-chartjs-2'
import Card from '../../../components/Card'
import { dailyLoginsAtom, profileViewsAtom } from './state'
import { StatisticsGraphDetails } from './styles'
import { DailyLogin, ProfileView } from './types'

Chart.register(...registerables) // Register the necessary scales

const StatisticsGraph: React.FC = () => {
  const dailyLogins = useAtomValue<DailyLogin[]>(dailyLoginsAtom)
  const profileViews = useAtomValue<ProfileView[]>(profileViewsAtom)

  const chartData: ChartData<'line'> = {
    labels: dailyLogins.map((log) => format(new Date(log.date), 'MMM d')),
    datasets: [
      {
        label: 'Daily Logins',
        data: dailyLogins.map((log) => log.count),
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
      },
      {
        label: 'Profile Views',
        data: profileViews.map((view) => view.count),
        borderColor: 'rgba(153, 102, 255, 1)',
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        fill: true,
      },
    ],
  }

  const options: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    elements: {
      line: {
        tension: 0.4, // Adjust the tension value to control the curvature of the bezier curves
      },
    },
    plugins: {
      tooltip: {
        enabled: true,
        mode: 'index',
        intersect: false,
      },
    },
  }

  return (
    <Card title="Statistics">
      <StatisticsGraphDetails>
        <div style={{ width: '100%', height: '100%' }}>
          <Line data={chartData} options={options} />
        </div>
      </StatisticsGraphDetails>
    </Card>
  )
}

export default StatisticsGraph
