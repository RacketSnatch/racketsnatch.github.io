import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import componentStrokeTechnique from '../assets/user_selection/component_stroke_technique.png';
import componentWaitingPosition from '../assets/user_selection/component_waiting_position.png';
import componentBallPosition from '../assets/user_selection/component_ball_position.png';
import componentHittingPosition from '../assets/user_selection/component_hitting_position.png';

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
  marginBottom: '40px',
  lineHeight: 1.6,
}));

// 图片容器样式
const ImageContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  height: 'auto',
  maxWidth: '250px',
  margin: '0 auto',
  '& img': {
    width: '100%',
    height: 'auto',
    borderRadius: '4px',
  }
}));

const VisualDesign = () => {
  const components = [
    {
      image: componentWaitingPosition,
      title: 'Waiting Position'
    },
    {
      image: componentHittingPosition,
      title: 'Hitting Position'
    },
    {
      image: componentStrokeTechnique,
      title: 'Stroke Technique'
    },
    {
      image: componentBallPosition,
      title: 'Ball Position'
    }
  ];

  return (
    <Box sx={{ py: 4, px: 4 }}>
      <ContentTitle variant="h4" component="h2">
        Visual Design
      </ContentTitle>

      <Grid
        container
        spacing={3}
        sx={{
          mb: 4,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        {components.map((component, index) => (
          <Grid item xs={3} key={index}>
            <ImageContainer>
              <img
                src={component.image}
                alt={component.title}
              />
            </ImageContainer>
          </Grid>
        ))}
      </Grid>

      <ContentText>
          We have provided four visualizations for the users to select the simulation action, namely, Waiting Position, Hitting Position, Stroke Technique, and Ball Position.
          Users can directly select the simulation actions with the corresponding interactive components embedded inside the video, and the system will generate the subsequent simulation videos as shown in the following demos.
          Specifically, waiting position and hitting position are the player position, which refer to the specific position of the player on the court. Stroke technique consists of a dynamic process of how the player hits the ball, we present each technique with its most representative hitting posture. Ball position is the 9 areas on the opponent's table determined by the player when hitting the ball.
      </ContentText>
    </Box>
  );
};

export default VisualDesign;
