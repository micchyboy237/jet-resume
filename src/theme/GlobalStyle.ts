import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.main};
  }

  body.modal-open {
    overflow: hidden;
  }


  input, textarea, button {
    font-family: ${({ theme }) => theme.fonts.main};
  }
`

export default GlobalStyle
