import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme/theme';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Home />
      <About />
      <Contact />
    </ThemeProvider>
  );
}

export default App;
