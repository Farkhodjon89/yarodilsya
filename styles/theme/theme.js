import {createTheme} from '@mui/material/styles';

const theme = createTheme({

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

    btn: {
      main: '#1F3A8F'
    },
    typography: {
      fontFamily: `'Open Sans', sans-serif`,
    },
  },
});

export default theme;