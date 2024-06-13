import styled from 'styled-components'

export const Container = styled.div`
  margin: 0 auto;
  position: relative;
  border-radius: 0.75rem;
  box-shadow: ${({ theme }) => theme.colors.cardShadow};
  background-color: ${({ theme }) => theme.colors.cardBackground};
  width: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 1rem;

  @media (min-width: 480px) {
    padding: 1.25rem;
  }

  @media (min-width: 768px) {
    padding: 1.5rem;
  }
`

export const Title = styled.h2`
  margin-top: 0;
  font-size: 1.375rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`
