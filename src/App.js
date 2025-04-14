import React from 'react';
import './App.css';
import { CssBaseline, ThemeProvider, createTheme, Box } from '@mui/material';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Abstract from './components/Abstract';
import Demo from './components/Demo';
import DemoApplication from './components/DemoApplication';
import Model from './components/Model';
import Reference from './components/Reference';
import ContentContainer from './components/ContentContainer';
import ScrollToTop from './components/ScrollToTop';
import backgroundImage from './assets/background_picture.jpg';

// 使用在线占位符图片
const tableBackground = backgroundImage;

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
        <ContentContainer>
          <Box id="abstract" sx={{ mb: '100px' }}>
            <Abstract />
          </Box>
          <Box id="demo-application" sx={{ mb: '100px' }}>
            <DemoApplication />
          </Box>
          <Box id="demo" sx={{ mb: '100px' }}>
            <Demo />
          </Box>
          {/* <Box id="model" sx={{ mb: '100px' }}>
            <Model />
          </Box> */}
          <Box id="reference">
            <Reference />
          </Box>
        </ContentContainer>
      </div>
    </ThemeProvider>
  );
}

export default App;
