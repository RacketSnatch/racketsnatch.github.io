import React from 'react';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

// 自定义内容标题
const ContentTitle = styled(Typography)(({ theme }) => ({
  color: '#DAFBDE',
  fontFamily: 'Michroma, sans-serif',
  fontWeight: 'bold',
  marginBottom: '30px',
  textAlign: 'center',
  marginTop: '40px',
}));

// 自定义内容文本
const ContentText = styled(Typography)(({ theme }) => ({
  color: '#FFFFFF',
  fontFamily: 'Michroma, sans-serif',
  textAlign: 'justify',
  marginBottom: '20px',
  lineHeight: 1.6,
}));

const DemoApplication = () => {
  return (
    <>
      <ContentTitle variant="h4" component="h2">
        Demo Application
      </ContentTitle>
      <ContentText>
      Currently, online demo is not available due to the hardware limited (e.g., GPU required). Source code will be released once paper accepted.
      </ContentText>
    </>
  );
};

export default DemoApplication;
