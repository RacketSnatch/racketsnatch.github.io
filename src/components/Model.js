import React, { useState } from 'react';
import { Typography, Grid, Box, Dialog, DialogContent } from '@mui/material';
import { styled } from '@mui/material/styles';
import pipeline from '../assets/pipeline.jpg';
import mannual from '../assets/model/collected_stroke.png';
import automatic from '../assets/model/data_collection.png';
import placeholderVideo from '../assets/clip2/clip2_origin.mp4';
import originalPlayer from '../assets/model/original_player.jpg';
import skeletonVideo from '../assets/model/skeleton.gif';
import sprite from '../assets/model/sprite.png';
import characterVideo from '../assets/model/generated_player.gif';

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

// 自动播放的GIF组件
const AutoPlayGif = ({ src, alt }) => (
    <Box
        component="img"
        src={src}
        alt={alt}
        sx={{
            width: '100%',
            height: '200px',
            objectFit: 'cover',
            borderRadius: '4px',
            boxShadow: 2,
            display: 'block' // 确保GIF自动播放
        }}
    />
);

// 图片样式
const StyledImage = styled('img')(({ theme }) => ({
    width: '100%',
    height: '200px',
    borderRadius: '4px',
    objectFit:'cover',
    boxShadow:2
}));

// 伪代码 - 可滚动代码块组件
const CodeBlock = styled('pre')(({ theme }) => ({
    backgroundColor: 'black',
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(3),
    overflowX: 'auto',
    textAlign:'left',
    maxWidth:'40vw',
    maxHeight: '40vh',
    whiteSpace: 'pre-wrap',
    fontFamily: 'Menlo, Monaco, Consolas, "Courier New", monospace',
    lineHeight: 1.5,
    margin: theme.spacing(3, 0),
    '& code': {
        color: theme.palette.text.primary,
    }
}));

// 伪代码内容
const pseudoCode = `
// The definition
class HybridBCModel extends Module {
  constructor() {
    super();
    this.feature_extractor = Sequential(
      Linear(state_dim, 128),
      ReLU(),
      Dropout(0.2)
    );
    
    this.action_head = Sequential(
      Linear(128, 64),
      ReLU(),
      Linear(64, action_dim)
    );
    
    this.reward_head = Sequential(
      Linear(129, 64),  // 128+1
      ReLU(),
      Linear(64, reward_dim)
    );
    
    this.policy_adapter = Linear(
      action_dim + reward_dim, 
      action_dim
    );
  }

  forward(x, action) {
    features = this.feature_extractor(x);
    
    // action predict
    action_logits = this.action_head(features);
    action_probs = softmax(action_logits);
    
    // reward predict
    if (action is None) {
      pred_action = argmax(action_probs);
      reward_input = concat(features, pred_action);
    } else {
      reward_input = concat(features, action);
    }
    reward_logits = this.reward_head(reward_input);
    
    // the hybrid policy
    final_logits = this.policy_adapter(
      concat(action_logits, reward_logits)
    );
    
    return { action_logits, reward_logits, final_logits };
  }
}

// training process
function train_model() {
  model = HybridBCModel();
  trainer = HybridTrainer(model);
  
  for epoch in epochs {
    for batch in dataloader {
      states, actions, rewards = batch;
      loss = trainer.step(states, actions, rewards);
      log_metrics(loss);
    }
    
    validate(model);
    if early_stop: break;
  }
  
  save_model(model);
}
`;

const Model = () => {
  // 控制视频弹窗的状态
  const [open, setOpen] = useState(false);
  const [videoSrc, setVideoSrc] = useState('');


  // 打开视频弹窗
  const handleOpenVideo = (src) => {
    setVideoSrc(src);
    setOpen(true);
  };

  // 关闭视频弹窗
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <ContentTitle variant="h4" component="h2">
        Video-based Match Simulation Pipeline and Code
      </ContentTitle>
      <ContentText>
        Video-based match simulation enhances the prospective understanding of strategies and decision-making in
        table tennis by presenting realistic simulated videos with players' nuanced actions and complicated match
        scenarios. We proposed the match video generation pipeline, and you can see the details of each step as follows.
      </ContentText>

      {/*数据采集*/}
      <Box>
        <ContentTitle variant="h6" component="h2" sx={{textAlign:'left'}}>
          1. Data collection and processing
        </ContentTitle>
        <ContentText>
          The data we use falls into two categories, manually collected technical-tactical details and automatically collected posture data (with DWPose [1]).
            With the data, we can perform realistic simulations of elite players' decision-making on the motion level.
        </ContentText>
        <Grid container spacing={10} justifyContent="center">
            <Grid item xs={12} md={5}>
              <Box
                component="img"
                src={mannual} alt="Mannual collected"
                sx={{
                  width:'100%',
                  height: 400,
                  objectFig:'cover',
                  borderRadius: 2,
                  boxShadow: 3
                }}
                />
            </Grid>
            <Grid item xs={12} md={5}>
              <Box
                  component="img"
                  src={automatic} alt="Automatic collected"
                  sx={{
                    width:'100%',
                    height: 400,
                    objectFig:'cover',
                    borderRadius: 2,
                    boxShadow: 3
                  }}
              />
            </Grid>
        </Grid>
      </Box>

        {/*模仿学习*/}
        <Box>
            <ContentTitle variant="h6" component="h2" sx={{textAlign:'left'}}>
                2. Players' Decision-making simulation
            </ContentTitle>
            <ContentText>
                We propose a staged action simulation model to learn the decision-making of technical-tactical action of elite players, and the model could simulate the four tactical attributes shown above for the cycle in which the player completes a single hitting stroke.
                To achieve this, we employ a hybrid imitation learning framework with the basic behavior cloning [2] to learn players' decisions for each stage.
                With the consideration of the results of each stroke as the rewards of the given state-action pair, the model can learn the scoring performance for different actions in the given state.
                The pseudocode is as follows:
            </ContentText>
            {/* 代码块示例 */}
            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                <CodeBlock height="300px">
                    <code>{pseudoCode}</code>
                </CodeBlock>
            </Grid>
        </Box>

        <Box>
            <ContentTitle variant="h6" component="h2" sx={{textAlign:'left'}}>
                3. Match Video Generation
            </ContentTitle>
            <ContentText>
                For the last step, we need to generate the appropriate postures based on the simulated actions for each stage, and then merge them into one skeleton animation.
                The skeleton animation is shown in the video below and then combined with a picture of the player's appearance, we will generate a simulation video of the specific player with a character control model.
            </ContentText>
            <Grid container spacing={3} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Grid item xs={12} sm={3}>
                    <StyledImage
                        src={originalPlayer}
                        alt="original player's image"
                    />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <AutoPlayGif
                        src={skeletonVideo}
                        alt="skeleton animation"
                    />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <StyledImage
                        src={sprite}
                        alt="player's sprite"
                    />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <AutoPlayGif
                        src={characterVideo}
                        alt="generated player video"
                    />
                </Grid>
            </Grid>
            <ContentText>
                To ensure that the character control model of AnimateAnyone [3] works well, we make some tricks.
                We insert a T-pose into the n frames before each skeleton animation which could map the posture of the character in the sprite image, and continue to insert frames between each successive frame after the interpolation to make the animation more continuous.
                With the combination of other elements in the match scenario, we can get the final complete video for the simulated rally as shown in the demos.
            </ContentText>
        </Box>
    </>
  );
};

export default Model;
