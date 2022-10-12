import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {ThemeProvider, createTheme} from '@mui/material/styles'
import themeConfig from '../theme.config'

const theme = createTheme(themeConfig.light)

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
