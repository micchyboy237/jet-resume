import styled from 'styled-components'

export const Form = styled.form`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`

export const FormField = styled.div`
  margin-bottom: 1.25rem;
  display: flex;
  flex-direction: column;
`

export const FormImage = styled.img`
  margin-top: 1.25rem;
  align-self: center;
  object-fit: cover;
  border-radius: 50%;
  width: 8rem;
  height: 8rem;

  @media (min-width: 768px) {
    width: 10rem;
    height: 10rem;
  }
`

export const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-family: ${({ theme }) => theme.fonts.main};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textGray};
`

export const Input = styled.input`
  width: 100%;
  padding: 0.625rem;
  box-sizing: border-box;
  border: 1px solid ${({ theme }) => theme.colors.formBorder};
  border-radius: 0.25rem;
  font-family: ${({ theme }) => theme.fonts.main};
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.inputBackground};
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
  background-color: ${({ theme }) => theme.colors.inputBackground};
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
