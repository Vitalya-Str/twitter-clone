import { createTheme } from '@mui/material/styles';

const theme = createTheme({
 
  palette: {
    primary: {
      main: '#1DA1F2', // Twitter blue
    },
    secondary: {
      main: '#14171A', // Twitter dark gray
    },
    background: {
      default: '#FFFFFF', // White background
    },
    text: {
      primary: '#14171A', // Dark text
      secondary: '#657786', // Light text
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h1: {
      fontSize: '2rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '1.5rem',
      fontWeight: 700,
    },
    body1: {
      fontSize: '1rem',
    },
  },
});

export default theme;
