import {createTheme} from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiTextField: {
      defaultProps: {
        label: 'white'
      },
    },
  },
  typography: {
    fontFamily: `'Open Sans', sans-serif`,
  },
  palette: {
    primary: {
      main: '#EA56AE'
    },
    secondary: {
      main: '#49D6A3'
    },
    text: {
      primary: '#303030'
    },
    white: {
      main: '#fff'
    },
    grey: {
      main: '#606060'

    },
    btn: {
      main: '#1F3A8F'
    },

  },
});

export default theme;