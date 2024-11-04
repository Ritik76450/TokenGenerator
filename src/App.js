import React from 'react';
import './App.css';
import TokenGenerator from './TokenGenerator';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4A90E2',
      contrastText: '#fff',
    },
    secondary: {
      main: '#FF6F61',
      contrastText: '#fff',
    },
  },
  typography: {
    fontFamily: 'Poppins, sans-serif',
    button: {
      textTransform: 'none',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'scale(1.05)',
            boxShadow: '0px 4px 15px rgba(0,0,0,0.3)',
          },
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App" style={{ background: 'linear-gradient(to right, #FF6F61, #4A90E2)', minHeight: '100vh', padding: '20px' }}>
        <TokenGenerator />
      </div>
    </ThemeProvider>
  );
}

export default App;
