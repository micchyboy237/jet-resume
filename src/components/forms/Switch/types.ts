export interface SwitchProps {
  className?: string
  name?: string
  value?: string
  checked?: boolean
  disabled?: boolean
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onRight?: (e: React.ChangeEvent) => void
  onLeft?: (e: React.ChangeEvent) => void
  width?: string
  height?: string
  borderWidth?: string
  borderColor?: string
  leftBorderColor?: string
  rightBorderColor?: string
  backgroundColor?: string
  leftBackgroundColor?: string
  rightBackgroundColor?: string
  backgroundColorDisabled?: string
  radius?: string
  radiusBackground?: string
  knobRadius?: string
  knobWidth?: string
  knobHeight?: string
  knobGap?: string
  knobColor?: string
  leftKnobColor?: string
  rightKnobColor?: string
}
