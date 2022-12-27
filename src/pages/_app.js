import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../styles/globals'
import light from '../styles/theme/light'

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={light}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
