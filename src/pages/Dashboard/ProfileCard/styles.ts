import styled from 'styled-components'
import { Container } from '../../../components/Card/styles'

// Extend Container from src/components/Card/styles.ts
export const ProfileCardContainer = styled(Container)`
  flex-direction: column;

  strong {
    color: ${({ theme }) => theme.colors.textGray};
  }
`

export const ProfileCardHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
`

export const ProfileName = styled.h2`
  margin: 0;
  font-size: 1.75rem;
  color: ${({ theme }) => theme.colors.text};
`

export const ProfileTitle = styled.p`
  margin: 0.25rem 0 0;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.textGray};
`

export const ProfileCardInfo = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};

  div {
    margin-bottom: 1rem;
    width: 100%;

    @media (min-width: 768px) {
      width: 50%;
    }
  }

  strong {
    margin-right: 0.5rem;
  }
`

export const ProfileCardImage = styled.img`
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
  border: 0.125rem solid ${({ theme }) => theme.colors.primary};
`

export const ProfileCardBio = styled.p`
  margin: 0;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.textLighter};
  line-height: 1.5;
`

export const ProfileCardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
