import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body, #__next {
    font-family: sans-serif;
    font-size: 16px;

    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: space-between;
  }

  body {
    min-height: 100vh;
    min-width: 100vw;

    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }

  #__next {
    max-width: 1440px;
  }
`

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`
