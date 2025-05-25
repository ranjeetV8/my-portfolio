import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#f33c1e', // reddish-orange (adjust to your liking)
    },
    background: {
      default: '#0c0f1a',
      paper: '#131829',
    },
    text: {
      primary: '#fff',
      secondary: '#aaa',
    },
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
  },
});

export default theme;
