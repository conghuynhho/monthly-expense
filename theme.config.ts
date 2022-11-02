import {createTheme, ThemeOptions} from '@mui/material/styles'

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: true
    sm: false // removes the `xs` breakpoint
    md: true
    lg: true
    xl: false // removes the `xl` breakpoint
  }
}
declare module '@mui/material/styles/createPalette' {
  interface Palette {
    ruby: Palette['primary']
    jade: Palette['primary']
    smoke: Palette['primary']
    canvas: Palette['primary']
  }
  interface PaletteOptions {
    ruby: PaletteOptions['primary']
    jade: PaletteOptions['primary']
    smoke: PaletteOptions['primary']
    canvas: PaletteOptions['primary']
  }
}

const light = {
  palette: {
    mode: 'light',
    primary: {
      main: '#496CDC',
      light: '#9AA9EA',
      dark: '#0448CA',
    },
    secondary: {
      main: '#DB7048',
    },
    ruby: {
      main: '#DC496C',
    },
    jade: {
      light: '#626262',
      dark: '#222222',
    },
    smoke: {
      light: '#E1E1E1',
      dark: '#9F9F9F',
    },
    canvas: {
      light: '#FAFAFA',
      dark: '#FAFAFA',
    },
    success: {
      main: '#0448CA',
      light: '#E5ECFA',
      contrastText: '#E5ECFA',
    },
    error: {
      main: '#D50134',
      light: '#F2B2C1',
      contrastText: '#F2B2C1',
    },
    text: {
      primary: '#222222',
    },
    divider: '#E1E1E1',
  },
  spacing: [0, 4, 8, 16, 24, 32, 48, 64, 96, 112],
  breakpoints: {
    values: {
      xs: 0,
      md: 600,
      lg: 960,
    },
  },
  typography: {
    fontFamily: [
      'YakuHanJP',
      'Roboto',
      'SF Pro',
      'Hiragino Kaku Gothic ProN',
      'Noto Sans',
      'Noto Sans JP',
      'sans-serif',
    ].join(','),
    subtitle1: {
      color: '#626262',
      lineHeight: '1.5em',
      letterSpacing: '0.05em'
    },
    subtitle2: {
      color: '#626262',
      lineHeight: '1.5em',
      letterSpacing: '0.05em'
    },
    caption: {
      color: '#626262',
      lineHeight: '1.5em',
      letterSpacing: '0.05em'
    },
    body1: {
      lineHeight: '1.5em',
      letterSpacing: '0.05em'
    },
    body2: {
      lineHeight: '1.5em',
      letterSpacing:  '0.05em'
    },
    h5: {
      lineHeight: '1.5em',
      letterSpacing:  '0.05em'
    },
    h6: {
      lineHeight: '1.5em',
      letterSpacing:  '0.05em'
    }
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          padding: '12.5px 14px'
        }
      }
    },
    MuiAppBar: {
      styleOverrides: {
        root: `
          &.MuiPaper-root {
            box-shadow:rgb(0 0 0 / 8%) 0px 1px 12px;
          }`,
      },
    },
  },
}

export const rateColor = '#faaf00'
export default Object.assign(
  {},
  {
    light,
    dark: {},
  }
)
export const theme = createTheme(light as ThemeOptions)