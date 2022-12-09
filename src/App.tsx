import { ThemeProvider } from 'styled-components';
import { TrasactionsProvider } from './contexts/TransactionsContext';
import Transactions from './pages/Transactions';
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/default';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <TrasactionsProvider>
        <Transactions />
      </TrasactionsProvider>
    </ThemeProvider>
  );
}

export default App;
