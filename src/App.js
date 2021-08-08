import Home from './pages/Home';
import theme from './theme';
import { ThemeProvider } from 'styled-components';
import '@material/react-text-field';
import '@material/react-material-icon/dist/material-icon.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Reset } from 'styled-reset';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Reset />
      <Home />
    </ThemeProvider>
  );
}

export default App;
