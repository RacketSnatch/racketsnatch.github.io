import React, { useState } from 'react';
import { Typography, Grid, Box, Dialog, DialogContent } from '@mui/material';
import { styled } from '@mui/material/styles';
import caseVideo from '../assets/case_video.jpg';
import st from '../assets/st.png';
import wp from '../assets/wp.png';
import bp from '../assets/bp.png';
import hp from '../assets/hp.jpg';
import st_original from '../assets/original_st.mp4';
import wp_original from '../assets/original_wp.mp4';
import bp_original from '../assets/original_bp.mp4';
import hp_original from '../assets/original_hp.mp4';

import st_generated from '../assets/generated_st.mp4';
import wp_generated from '../assets/generated_wp.mp4';
import bp_generated from '../assets/generated_bp.mp4';
import hp_generated from '../assets/generated_hp.mp4';

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
  const handleOpenVideo = (videoSource) => {
    setVideoSrc(videoSource);
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
      This section shows specific use cases of this system in several games. Each row from left to right shows the original video of the players losing points, the key frames users making choices, and the simulated video generated based on the user's selection.
      </ContentText>
      
      {/* 案例视频图片 */}
      <Box sx={{ width: '100%', mb: 4, display: 'flex', justifyContent: 'center' }}>
        <StyledImage src={caseVideo} alt="Case Video Demonstration" />
      </Box>
      
      {/* 9个视频占位符的网格布局 */}
      <Box sx={{ width: '90%', margin: '0 auto', mb: 6 }}>
        {/* 列标题 */}
        <Grid container spacing={23} sx={{ mb: 2, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Typography variant="h6" sx={{ color: '#DAFBDE', fontFamily: 'Michroma, sans-serif' }}>
              Original Video
            </Typography>
          </Grid>
          <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Typography variant="h6" sx={{ color: '#DAFBDE', fontFamily: 'Michroma, sans-serif' }}>
              User Choice
            </Typography>
          </Grid>
          <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Typography variant="h6" sx={{ color: '#DAFBDE', fontFamily: 'Michroma, sans-serif' }}>
              Generated Video
            </Typography>
          </Grid>
        </Grid>

        {/* 第一行 */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={4}>
            <VideoThumbnail onClick={() => handleOpenVideo(st_original)}>
              <VideoPreview src={st_original} muted preload="metadata" />
              <PlayIcon />
            </VideoThumbnail>
          </Grid>
          <Grid item xs={4}>
            <Box component="img" src={st} alt="Choice 1" sx={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '4px' }} />
          </Grid>
          <Grid item xs={4}>
            <VideoThumbnail onClick={() => handleOpenVideo(st_generated)}>
              <VideoPreview src={st_generated} muted preload="metadata" />
              <PlayIcon />
            </VideoThumbnail>
          </Grid>
        </Grid>
        
        {/* 第二行 */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={4}>
            <VideoThumbnail onClick={() => handleOpenVideo(wp_original)}>
              <VideoPreview src={wp_original} muted preload="metadata" />
              <PlayIcon />
            </VideoThumbnail>
          </Grid>
          <Grid item xs={4}>
            <Box component="img" src={wp} alt="Choice 2" sx={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '4px' }} />
          </Grid>
          <Grid item xs={4}>
            <VideoThumbnail onClick={() => handleOpenVideo(wp_generated)}>
              <VideoPreview src={wp_generated} muted preload="metadata" />
              <PlayIcon />
            </VideoThumbnail>
          </Grid>
        </Grid>
        
        {/* 第三行 */}
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <VideoThumbnail onClick={() => handleOpenVideo(bp_original)}>
              <VideoPreview src={bp_original} muted preload="metadata" />
              <PlayIcon />
            </VideoThumbnail>
          </Grid>
          <Grid item xs={4}>
            <Box component="img" src={bp} alt="Choice 3" sx={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '4px' }} />
          </Grid>
          <Grid item xs={4}>
            <VideoThumbnail onClick={() => handleOpenVideo(bp_generated)}>
              <VideoPreview src={bp_generated} muted preload="metadata" />
              <PlayIcon />
            </VideoThumbnail>
          </Grid>
        </Grid>

        {/* 第四行 */}
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <VideoThumbnail onClick={() => handleOpenVideo(hp_original)}>
              <VideoPreview src={hp_original} muted preload="metadata" />
              <PlayIcon />
            </VideoThumbnail>
          </Grid>
          <Grid item xs={4}>
            <Box component="img" src={hp} alt="Choice 3" sx={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '4px' }} />
          </Grid>
          <Grid item xs={4}>
            <VideoThumbnail onClick={() => handleOpenVideo(hp_generated)}>
              <VideoPreview src={hp_generated} muted preload="metadata" />
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
