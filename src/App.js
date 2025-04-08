import React from 'react';
import './App.css';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Content from './components/Content';
import ScrollToTop from './components/ScrollToTop';

// 使用在线占位符图片
const tableBackground = 'https://images.unsplash.com/photo-1534158914592-062992fbe900?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80';

// 创建主题
const theme = createTheme({
  palette: {
    primary: {
      main: '#609A7A', 
    },
    secondary: {
      main: '#DAFBDE',
    },
    background: {
      default: '#232323',
      paper: '#232323',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#DAFBDE',
    },
  },
  typography: {
    fontFamily: 'Michroma, sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 600,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          textTransform: 'none',
          fontWeight: 500,
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <ScrollToTop />
        <Header backgroundImage={tableBackground}>
          <Navbar />
        </Header>
        <Content />
      </div>
    </ThemeProvider>
  );
}

export default App;
