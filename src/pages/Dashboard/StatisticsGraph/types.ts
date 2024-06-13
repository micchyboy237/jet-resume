export interface DailyLogin {
  date: string
  count: number
}

export interface ProfileView {
  date: string
  count: number
}

export interface StatisticsGraph {
  dailyLogins: DailyLogin[]
  profileViews: ProfileView[]
}
