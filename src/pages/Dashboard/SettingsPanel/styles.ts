import styled from 'styled-components'

export const SettingsPanelContainer = styled.div`
  display: flex;
  flex-direction: row;

  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};

  div {
    display: flex;
    align-items: center;
    margin-top: 0.5rem;
    margin-right: 1rem;
  }

  strong {
    font-weight: 500;
    white-space: nowrap;
  }

  @media (min-width: 768px) {
    justify-content: flex-end;
    margin: 0 0.5rem;
  }
`
