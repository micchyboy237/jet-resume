import styled from 'styled-components'

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`

export const ModalContent = styled.div`
  background: white;
  padding: 1.25rem;
  border-radius: 0.5rem;
  width: 25rem;
  max-width: 100%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  animation: fadeIn 0.3s ease-in-out;

  @media (min-width: 480px) {
    padding: 1.5rem;
  }

  @media (min-width: 768px) {
    padding: 1.75rem;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: scale(0.95);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`

export const ModalTitle = styled.h3`
  margin: 0;
`

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`
