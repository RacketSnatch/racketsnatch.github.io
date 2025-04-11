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

const Abstract = () => {
  return (
    <>
      <ContentTitle variant="h4" component="h2">
        Abstract
      </ContentTitle>
      <ContentText>
        Video-based match simulation enhances the prospective understanding of strategies and decision-making
        in table tennis by presenting realistic simulated videos with players' nuanced actions and complicated match
        scenarios. However, the lack of high-quality motion-level data from broadcast videos hinders the generation
        of realistic videos based on simulated results. Moreover, players and coaches, the tangible beneficiaries of
        this effort, are deprived of practical real-world applications. Thus, we proposed a framework, RacketSnatch,
        for video-based match simulation in table tennis for the first time.
      </ContentText>
    </>
  );
};

export default Abstract;
