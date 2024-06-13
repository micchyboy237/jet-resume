import React, { ReactNode } from 'react'
import { Container, Title } from './styles'

interface CardProps {
  children: ReactNode
  title?: string
}

const Card: React.FC<CardProps> = ({ children, title }) => {
  return (
    <Container>
      {title && <Title>{title}</Title>}
      {children}
    </Container>
  )
}

export default Card
