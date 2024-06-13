// src/context/ThemeContext.tsx
import { useAtomValue, useSetAtom } from 'jotai'
import React, { createContext, ReactNode } from 'react'
import {
  DefaultTheme,
  ThemeProvider as StyledThemeProvider,
} from 'styled-components'
import { darkTheme, lightTheme } from '.'
import {
  settingsAtom,
  updateSettingsAtom,
} from '../pages/Dashboard/SettingsPanel/state'

export interface ThemeProviderWrapperProps {
  children: ReactNode
}

export interface ThemeContextProps {
  toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextProps | undefined>(
  undefined,
)

export const ThemeProviderWrapper: React.FC<ThemeProviderWrapperProps> = ({
  children,
}) => {
  const settings = useAtomValue(settingsAtom)
  const updateSettings = useSetAtom(updateSettingsAtom)

  const toggleTheme = () => {
    updateSettings({ darkMode: !settings.darkMode })
  }

  const themeObject: DefaultTheme = settings.darkMode ? darkTheme : lightTheme

  return (
    <ThemeContext.Provider value={{ toggleTheme }}>
      <StyledThemeProvider theme={themeObject}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  )
}
