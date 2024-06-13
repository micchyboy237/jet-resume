import styled from 'styled-components'
import { defaultTheme } from '../../../theme'
import { SwitchProps } from './types'

export const SwitchContainer = styled.label``

export const SwitchBase = styled.span<SwitchProps>`
  position: relative;
  box-sizing: border-box;
  display: inline-grid;
  align-items: center;
  width: ${(p) => p.width || (p.theme && p.theme.width) || defaultTheme.width};
  height: ${(p) =>
    p.height || (p.theme && p.theme.height) || defaultTheme.height};
  vertical-align: middle;
  margin: 0 0.25rem;

  input[type='checkbox'] {
    position: absolute;
    margin-left: -9999px;
    visibility: hidden;

    & + label {
      display: inline-grid;
      box-sizing: border-box;
      align-items: center;
      outline: none;
      user-select: none;
      width: ${(p) =>
        p.width || (p.theme && p.theme.width) || defaultTheme.width};
      height: ${(p) =>
        p.height || (p.theme && p.theme.height) || defaultTheme.height};
      background-color: ${(p) =>
        p.borderColor ||
        p.leftBorderColor ||
        (p.theme && p.theme.leftBorderColor) ||
        defaultTheme.leftBorderColor};
      border-radius: ${(p) =>
        p.radius || (p.theme && p.theme.radius) || defaultTheme.radius};
      cursor: pointer;
      transition: background ease-out 0.3s;

      &:before {
        content: '';
        display: block;
        position: absolute;
        border-radius: ${(p) =>
          p.radiusBackground ||
          (p.theme && p.theme.radiusBackground) ||
          defaultTheme.radiusBackground};
        width: calc(
          ${(p) => p.width || (p.theme && p.theme.width) || defaultTheme.width} -
            2 *
            ${(p) =>
              p.borderWidth ||
              (p.theme && p.theme.borderWidth) ||
              defaultTheme.borderWidth}
        );
        height: calc(
          ${(p) =>
              p.height || (p.theme && p.theme.height) || defaultTheme.height} -
            2 *
            ${(p) =>
              p.borderWidth ||
              (p.theme && p.theme.borderWidth) ||
              defaultTheme.borderWidth}
        );
        background-color: ${(p) =>
          p.backgroundColor ||
          p.leftBackgroundColor ||
          (p.theme && p.theme.leftBackgroundColor) ||
          defaultTheme.leftBackgroundColor};
        left: ${(p) =>
          p.borderWidth ||
          (p.theme && p.theme.borderWidth) ||
          defaultTheme.borderWidth};
      }

      &:after {
        display: block;
        position: absolute;
        content: '';
        width: ${(p) =>
          p.knobWidth ||
          (p.theme && p.theme.knobWidth) ||
          defaultTheme.knobWidth};
        height: ${(p) =>
          p.knobHeight ||
          (p.theme && p.theme.knobHeight) ||
          defaultTheme.knobHeight};
        border-radius: ${(p) =>
          p.knobRadius ||
          (p.theme && p.theme.knobRadius) ||
          defaultTheme.knobRadius};
        background-color: ${(p) =>
          p.knobColor ||
          p.leftKnobColor ||
          (p.theme && p.theme.leftKnobColor) ||
          defaultTheme.leftKnobColor};
        transition: all ease-out 0.4s;
        margin-left: ${(p) =>
          p.knobGap || (p.theme && p.theme.knobGap) || defaultTheme.knobGap};
      }
    }

    &:checked {
      & + label {
        background-color: ${(p) =>
          p.borderColor ||
          p.rightBorderColor ||
          (p.theme && p.theme.rightBorderColor) ||
          defaultTheme.rightBorderColor};

        &:before {
          background-color: ${(p) =>
            p.backgroundColor ||
            p.rightBackgroundColor ||
            (p.theme && p.theme.rightBackgroundColor) ||
            defaultTheme.rightBackgroundColor};
        }

        &:after {
          margin-left: calc(
            100% -
              ${(p) =>
                p.knobWidth ||
                (p.theme && p.theme.knobWidth) ||
                defaultTheme.knobWidth} -
              ${(p) =>
                p.knobGap ||
                (p.theme && p.theme.knobGap) ||
                defaultTheme.knobGap}
          );
          transition: all ease-out 0.2s;
          background-color: ${(p) =>
            p.knobColor ||
            p.rightKnobColor ||
            (p.theme && p.theme.rightKnobColor) ||
            defaultTheme.rightKnobColor};
        }
      }

      &:disabled {
        & + label {
          background-color: ${(p) =>
            p.backgroundColorDisabled ||
            (p.theme && p.theme.backgroundColorDisabled) ||
            defaultTheme.backgroundColorDisabled};
          &:after {
            box-shadow: none;
          }
        }
      }
    }

    &:disabled {
      & + label {
        background-color: ${(p) =>
          p.backgroundColorDisabled ||
          (p.theme && p.theme.backgroundColorDisabled) ||
          defaultTheme.backgroundColorDisabled};
        cursor: default;
        &:after {
          box-shadow: none;
          background-color: ${(p) =>
            p.backgroundColorDisabled ||
            (p.theme && p.theme.backgroundColorDisabled) ||
            defaultTheme.backgroundColorDisabled};
        }
      }
    }
  }
`
