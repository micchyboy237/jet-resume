// state.ts
import { atom } from 'jotai'
import { Settings } from './types'

const initialValue: Settings = {
  darkMode: false,
  emailNotifications: false,
}

export const settingsAtom = atom<Settings>(initialValue)

export const updateSettingsAtom = atom(
  null,
  (get, set, update: Partial<Settings>) => {
    const currentSettings = get(settingsAtom)
    set(settingsAtom, { ...currentSettings, ...update })
  },
)
