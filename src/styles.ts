import styled from 'styled-components'

export const AppContainer = styled.div`
  height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.25rem;
`

export const AppHeader = styled.div`
  display: flex;
  max-width: 80rem;
  width: 100%;
  margin: 1.5rem 0;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
  }
`

export const AppBody = styled.div`
  max-width: 80rem;
  width: 100%;

  display: grid;
  gap: 1.25rem;
  justify-items: center;
  align-items: stretch;
  grid-template-columns: 1fr;
  grid-template-rows: auto;

  @media (min-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;

    & > :nth-child(1) {
      grid-column: 1 / -1;
    }

    & > :nth-child(2) {
      grid-column: 1 / -1;
    }

    & > :nth-child(3) {
      grid-column: 1 / -1;
    }
  }

  @media (min-width: 1024px) {
    grid-template-columns: 40% 60%;
    grid-template-rows: auto 1fr;
    gap: 1.5rem;

    & > :nth-child(1) {
      grid-column: 1 / 2;
    }

    & > :nth-child(2) {
      grid-column: 2 / 3;
    }

    & > :nth-child(3) {
      grid-column: 1 / -1;
    }
  }
`

export const PageTitle = styled.h1`
  margin: 0;
  font-weight: 600;
`
