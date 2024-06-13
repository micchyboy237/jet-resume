import { useAtomValue, useSetAtom } from 'jotai'
import React from 'react'
import Switch from '../../../components/forms/Switch'
import { settingsAtom, updateSettingsAtom } from './state'
import { SettingsPanelContainer } from './styles'

const SettingsPanel: React.FC = () => {
  const settings = useAtomValue(settingsAtom)
  const updateSettings = useSetAtom(updateSettingsAtom)

  const handleSwitchChange = (name: string, value: boolean) => {
    updateSettings({ [name]: value })
  }

  return (
    <SettingsPanelContainer>
      <div>
        <strong>Dark Mode:</strong>
        <Switch
          name="darkMode"
          checked={settings.darkMode}
          onChange={(e) => handleSwitchChange('darkMode', e.target.checked)}
        />
      </div>
      <div>
        <strong>Email Notifications:</strong>
        <Switch
          name="emailNotifications"
          checked={settings.emailNotifications}
          onChange={(e) =>
            handleSwitchChange('emailNotifications', e.target.checked)
          }
        />
      </div>
    </SettingsPanelContainer>
  )
}

export default SettingsPanel
