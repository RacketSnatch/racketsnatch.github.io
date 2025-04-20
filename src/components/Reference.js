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

const Reference = () => {
  return (
    <>
        <ContentTitle variant="h4" component="h2">
            Reference
        </ContentTitle>
        <ContentText>
            [1] Zhendong Yang, Ailing Zeng, Chun Yuan, and Yu Li. 2023. Effective whole-body pose estimation with two-stages distillation. In Proceedings of the IEEE/CVF International Conference on Computer Vision. 4210–4220.
        </ContentText>
        <ContentText>
            [2] Torabi F, Warnell G, Stone P. Behavioral cloning from observation[J]. arXiv preprint arXiv:1805.01954, 2018.
        </ContentText>
        <ContentText>
            [3] Li Hu. 2024. Animate Anyone: Consistent and Controllable Image-to-Video Synthesis for Character Animation. In Proceedings of 2024 IEEE/CVF Conference on Computer Vision and Pattern Recognition. IEEE, Seattle, WA, USA, 8153–8163.
        </ContentText>
    </>
  );
};

export default Reference;
