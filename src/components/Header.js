import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

// 自定义标题容器
const HeaderContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: '60vh',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(35, 35, 35, 0.7)',
    zIndex: 0,
  }
}));

// 自定义标题文字
const HeaderTitle = styled(Typography)(({ theme }) => ({
  color: '#FFFFFF',
  fontFamily: 'Michroma, sans-serif',
  fontWeight: 600,
  textAlign: 'center',
  zIndex: 1,
  padding: '0 20px',
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
}));

const Header = ({ backgroundImage, children }) => {
  return (
    <HeaderContainer sx={{ backgroundImage: `url(${backgroundImage})` }}>
      <HeaderTitle 
        variant="h3" 
        component="h1"
        sx={{ fontSize: 'calc(1.5vw + 1rem)' }}
      >
        RacketSnatch: Video-based Interactive
      </HeaderTitle>
      <HeaderTitle 
        variant="h3" 
        component="h1" 
        sx={{ mt: 1, fontSize: 'calc(1.5vw + 1rem)' }}
      >
        Match Simulation for Table Tennis
      </HeaderTitle>
      {children}
    </HeaderContainer>
  );
};

export default Header;
