import Home from './pages/Home';
import theme from './theme';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import '@material/react-text-field';
import '@material/react-material-icon/dist/material-icon.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Reset } from 'styled-reset';
import store from './redux/store';
import theme from './theme';
import Home from './pages/Home';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Reset />
        <Home />
      </ThemeProvider>
    </Provider>

  );
}

export default App;
