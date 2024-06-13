import React from 'react'
import { SwitchBase, SwitchContainer } from './styles'
import { SwitchProps } from './types'

const Switch: React.FC<SwitchProps> = ({
  name,
  checked = false,
  disabled = false,
  value = '',
  onChange = () => {},
  onRight = () => {},
  onLeft = () => {},
  ...others
}) => {
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e)

    const target = e.target as HTMLInputElement

    if (target.checked) {
      onRight(e)
    } else {
      onLeft(e)
    }
  }

  return (
    <SwitchBase {...others}>
      <input
        onChange={onChangeHandler}
        type="checkbox"
        id={name}
        name={name}
        value={value}
        checked={checked}
        disabled={disabled}
      />
      <SwitchContainer htmlFor={name} />
    </SwitchBase>
  )
}

export default Switch
