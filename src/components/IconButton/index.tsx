import React, { ReactNode } from 'react'
import { Container } from './styles'

interface IconButtonProps {
  onClick: () => void
  children: ReactNode
  circle?: boolean
}

const IconButton: React.FC<IconButtonProps> = ({
  onClick,
  children,
  circle,
}) => {
  return (
    <Container onClick={onClick} circle={circle}>
      {children}
    </Container>
  )
}

export default IconButton
