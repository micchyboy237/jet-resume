import styled from 'styled-components'

export const Container = styled.button<{ circle?: boolean }>`
  background: ${({ circle, theme }) =>
    circle ? theme.colors.primary : 'none'};
  border: none;
  cursor: pointer;
  position: absolute;
  top: 0.625rem;
  right: 0.625rem;

  color: ${({ circle, theme }) => (circle ? '#fff' : 'inherit')};
  border-radius: ${({ circle }) => (circle ? '50%' : '0')};

  width: 40px;
  height: 40px;

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }

  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 480px) {
    top: 0.75rem;
    right: 0.75rem;
  }

  @media (min-width: 768px) {
    top: 1rem;
    right: 1rem;

    font-size: 20px;
    width: ${({ circle }) => (circle ? '2.125rem' : 'auto')};
    height: ${({ circle }) => (circle ? '2.125rem' : 'auto')};
  }
`
