import { atom } from 'jotai'
import { StatisticsGraph } from './types'

const initialValue: StatisticsGraph = {
  dailyLogins: [
    { date: '2024-06-07', count: 5 },
    { date: '2024-06-08', count: 8 },
    { date: '2024-06-09', count: 4 },
    { date: '2024-06-10', count: 6 },
    { date: '2024-06-11', count: 7 },
    { date: '2024-06-12', count: 9 },
  ],
  profileViews: [
    { date: '2024-06-07', count: 10 },
    { date: '2024-06-08', count: 14 },
    { date: '2024-06-09', count: 7 },
    { date: '2024-06-10', count: 12 },
    { date: '2024-06-11', count: 15 },
    { date: '2024-06-12', count: 13 },
  ],
}

// Create atoms for daily logins and profile views
export const dailyLoginsAtom = atom(initialValue.dailyLogins)
export const profileViewsAtom = atom(initialValue.profileViews)
