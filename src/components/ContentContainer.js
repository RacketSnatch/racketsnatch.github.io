import React from 'react';
import { Box, Container } from '@mui/material';
import { styled } from '@mui/material/styles';

// 自定义内容容器 - 单一背景
const MainContainer = styled(Box)(({ theme }) => ({
  padding: '40px 0',
  background: 'radial-gradient(circle at top left, #609A7A, #232323 30%, #232323 70%, #609A7A 100%)',
  minHeight: '100vh',
}));

const ContentContainer = ({ children }) => {
  return (
    <MainContainer>
      <Container maxWidth="lg">
        {children}
      </Container>
    </MainContainer>
  );
};

export default ContentContainer;
