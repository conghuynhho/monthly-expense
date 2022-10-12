import {ThemeOptions} from '@mui/material/styles'

const lightTheme : ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#496CDC',
      light: '#9AA9EA',
      dark: '#0448CA',
    },
    secondary: {
      main: '#f50057',
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
  spacing: [0, 4, 8, 16, 24, 32, 48, 64, 96],
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  typography: {
    fontFamily: [
      'YakuHanJP',
      'Noto Sans',
      'Roboto',
      'SF Pro',
      'Hiragino Kaku Gothic ProN',
      'Noto Sans',
      'Noto Sans JP',
      'sans-serif',
    ].join(','),
    subtitle1: {
      color: '#626262'
    },
    subtitle2: {
      color: '#626262'
    },
    caption: {
      color: '#626262'
    },
    body2: {
      color: '#222'
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: '8px 16px',
          fontSize: '16px',
        }
      },
      variants: [
        {
          props: { variant: 'contained' },
          style: {
            background: '#222222',
            color: '#fff',
            boxShadow: 'none',
            '&:hover': {
              background: '#626262',
            },
            '&:focus': {
              background: '#222222',
            },
            '&:disabled': {
              background: '#222222B3',
              color: '#FFFFFF73',
            },
          },
        },
        {
          props: { variant: 'outlined' },
          style: {
            background: '#fff',
            borderColor: '#9F9F9F',
            color: '#444444',
            fontSize: '14px',
            boxShadow: 'none',
            '&:hover': {
              background: '#FAFAFA',
              borderColor: '#9F9F9F',
              color: '#444444',
            },
            '&:focus': {
              background: '#fff',
              borderColor: '#9F9F9F',
              color: '#444444',
            },
            '&:disabled': {},
          },
        },
      ],
    },
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          padding: '12.5px 14px'
        }
      }
    }
  },
}

export default Object.assign({
  light: lightTheme,
  dark: {}
})