import React from 'react'
import ActivityList from './pages/Dashboard/ActivityList'
import ProfileCard from './pages/Dashboard/ProfileCard'
import SettingsPanel from './pages/Dashboard/SettingsPanel'
import StatisticsGraph from './pages/Dashboard/StatisticsGraph'
import { AppBody, AppContainer, AppHeader, PageTitle } from './styles'
import GlobalStyle from './theme/GlobalStyle'
import { ThemeProviderWrapper } from './theme/ThemeContext'

const App: React.FC = () => {
  return (
    <ThemeProviderWrapper>
      <GlobalStyle />
      <AppContainer>
        <AppHeader>
          <PageTitle>Dashboard</PageTitle>
          <SettingsPanel />
        </AppHeader>
        <AppBody>
          <ProfileCard />
          <StatisticsGraph />
          <ActivityList />
        </AppBody>
      </AppContainer>
    </ThemeProviderWrapper>
  )
}

export default App
