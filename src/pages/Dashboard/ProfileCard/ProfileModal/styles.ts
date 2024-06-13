import styled from 'styled-components'

export const Form = styled.form`
  width: 100%;
  max-width: 90vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  @media (min-width: 576px) {
    max-width: 500px;
  }
`

export const FormField = styled.div`
  margin-bottom: 1.25rem;
  display: flex;
  flex-direction: column;
`

export const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-family: ${({ theme }) => theme.fonts.main};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
`

export const Input = styled.input`
  width: 100%;
  padding: 0.625rem;
  box-sizing: border-box;
  border: 1px solid ${({ theme }) => theme.colors.formBorder};
  border-radius: 0.25rem;
  font-family: ${({ theme }) => theme.fonts.main};
  color: ${({ theme }) => theme.colors.text};
`

export const TextArea = styled.textarea`
  width: 100%;
  padding: 0.625rem;
  box-sizing: border-box;
  border: 1px solid ${({ theme }) => theme.colors.formBorder};
  border-radius: 0.25rem;
  font-family: ${({ theme }) => theme.fonts.main};
  color: ${({ theme }) => theme.colors.text};
  min-height: 6.25rem;
`

export const Button = styled.button`
  align-self: flex-end;
  padding: 0.625rem 1.25rem;
  margin-top: 1.25rem;
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 1rem;
  color: #fff;
  background-color: ${({ theme }) => theme.colors.primary};
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }
`

export const FileInput = styled(Input)`
  padding: 0.375rem;
`
