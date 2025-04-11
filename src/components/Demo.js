import React, { useState } from 'react';
import { Typography, Grid, Box, Dialog, DialogContent } from '@mui/material';
import { styled } from '@mui/material/styles';
import caseVideo from '../assets/case_video.jpg';
import choice1 from '../assets/choice1.png';
import choice2 from '../assets/choice2.png';
import choice3 from '../assets/choice3.png';
import placeholderVideo from '../assets/placeholder.mp4';

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

// 视频缩略图样式
const VideoThumbnail = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '180px',
  position: 'relative',
  cursor: 'pointer',
  transition: 'transform 0.3s ease',
  overflow: 'hidden',
  borderRadius: '4px',
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));

// 视频预览样式
const VideoPreview = styled('video')(({ theme }) => ({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
}));

// 播放图标样式
const PlayIcon = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '&::before': {
    content: '""',
    width: 0,
    height: 0,
    borderTop: '8px solid transparent',
    borderBottom: '8px solid transparent',
    borderLeft: '12px solid white',
    marginLeft: '3px',
  },
}));

// 图片样式
const StyledImage = styled('img')(({ theme }) => ({
  width: '90%',
  height: 'auto',
  marginBottom: '30px',
  borderRadius: '4px',
  display: 'block',
  margin: '0 auto 30px auto',
}));

const Demo = () => {
  // 控制视频弹窗的状态
  const [open, setOpen] = useState(false);
  const [videoSrc, setVideoSrc] = useState('');

  // 打开视频弹窗
  const handleOpenVideo = () => {
    setVideoSrc(placeholderVideo);
    setOpen(true);
  };

  // 关闭视频弹窗
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <ContentTitle variant="h4" component="h2">
        Demo
      </ContentTitle>
      <ContentText>
        Video-based match simulation enhances the prospective understanding of strategies and decision-making in
        table tennis by presenting realistic simulated videos with players' nuanced actions and complicated match
        scenarios.
      </ContentText>
      
      {/* 案例视频图片 */}
      <Box sx={{ width: '100%', mb: 4, display: 'flex', justifyContent: 'center' }}>
        <StyledImage src={caseVideo} alt="Case Video Demonstration" />
      </Box>
      
      {/* 9个视频占位符的网格布局 */}
      <Box sx={{ width: '90%', margin: '0 auto', mb: 6 }}>
        {/* 第一行 */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={4}>
            <VideoThumbnail onClick={handleOpenVideo}>
              <VideoPreview src={placeholderVideo} muted preload="metadata" />
              <PlayIcon />
            </VideoThumbnail>
          </Grid>
          <Grid item xs={4}>
            <Box component="img" src={choice1} alt="Choice 1" sx={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '4px' }} />
          </Grid>
          <Grid item xs={4}>
            <VideoThumbnail onClick={handleOpenVideo}>
              <VideoPreview src={placeholderVideo} muted preload="metadata" />
              <PlayIcon />
            </VideoThumbnail>
          </Grid>
        </Grid>
        
        {/* 第二行 */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={4}>
            <VideoThumbnail onClick={handleOpenVideo}>
              <VideoPreview src={placeholderVideo} muted preload="metadata" />
              <PlayIcon />
            </VideoThumbnail>
          </Grid>
          <Grid item xs={4}>
            <Box component="img" src={choice2} alt="Choice 2" sx={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '4px' }} />
          </Grid>
          <Grid item xs={4}>
            <VideoThumbnail onClick={handleOpenVideo}>
              <VideoPreview src={placeholderVideo} muted preload="metadata" />
              <PlayIcon />
            </VideoThumbnail>
          </Grid>
        </Grid>
        
        {/* 第三行 */}
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <VideoThumbnail onClick={handleOpenVideo}>
              <VideoPreview src={placeholderVideo} muted preload="metadata" />
              <PlayIcon />
            </VideoThumbnail>
          </Grid>
          <Grid item xs={4}>
            <Box component="img" src={choice3} alt="Choice 3" sx={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '4px' }} />
          </Grid>
          <Grid item xs={4}>
            <VideoThumbnail onClick={handleOpenVideo}>
              <VideoPreview src={placeholderVideo} muted preload="metadata" />
              <PlayIcon />
            </VideoThumbnail>
          </Grid>
        </Grid>
      </Box>
      
      {/* 视频播放弹窗 */}
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="md"
        fullWidth
      >
        <DialogContent sx={{ p: 0, bgcolor: '#000' }}>
          <video width="100%" controls autoPlay>
            <source src={videoSrc} type="video/mp4" />
            您的浏览器不支持视频标签。
          </video>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Demo;
