import { createTheme } from '@mui/material/styles'

export let theme = createTheme({
  components: {
    MuiTextField: {
      defaultProps: {
        label: 'white',
      },
    },
  },
  typography: {
    fontFamily: `'Open Sans', sans-serif`,
  },
  palette: {
    primary: {
      main: '#EA56AE',
    },
    secondary: {
      main: '#49D6A3',
    },
    text: {
      primary: '#303030',
    },
    white: {
      main: '#fff',
    },
    grey: {
      main: '#606060',
    },
    btn: {
      main: '#1F3A8F',
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        disableFocusRipple: true,
        disableRipple: true,
        variant: 'contained',
      },
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '8px',
          fontWeight: 600,
          padding: '8px',
        },
      },
    },
  },
})

theme = createTheme(theme, {
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          [theme.breakpoints.down('lg')]: {
            fontSize: 13,
            lineHeight: '17px',
          },
          [theme.breakpoints.up('lg')]: {
            fontSize: 15,
            lineHeight: '18px',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          [theme.breakpoints.down('lg')]: {
            fontSize: 13,
            lineHeight: '17px',
          },
          [theme.breakpoints.up('lg')]: {
            fontSize: 16,
            lineHeight: '22px',
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: '#303030',
        },
      },
    },
  },
})
