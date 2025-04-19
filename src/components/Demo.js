import React, { useState } from 'react';
import { Typography, Grid, Box, Dialog, DialogContent } from '@mui/material';
import { styled } from '@mui/material/styles';

import clip1_origin from '../assets/clip1/clip1_origin.mp4';
import clip1_choice1 from '../assets/clip1/clip1_choice1.png';
import clip1_choice2 from '../assets/clip1/clip1_choice2.png';
import clip1_generated1 from '../assets/clip1/clip1_generated1.mp4';
import clip1_generated2 from '../assets/clip1/clip1_generated2.mp4';

import clip2_origin from '../assets/clip2/clip2_origin.mp4';
import clip2_choice1 from '../assets/clip2/clip2_choice1.png';
import clip2_choice2 from '../assets/clip2/clip2_choice2.png'
import clip2_generated1 from '../assets/clip2/clip2_generated1.mp4';
import clip2_generated2 from '../assets/clip2/clip2_generated2.mp4'

import clip3_origin from '../assets/clip3/clip3_origin.mp4';
import clip3_choice1 from '../assets/clip3/clip3_choice1.png';
import clip3_choice2 from '../assets/clip3/clip3_choice2.png';
import clip3_generated1 from '../assets/clip3/clip3_generated1.mp4';
import clip3_generated2 from '../assets/clip3/clip3_generated2.mp4';

import clip4_origin from '../assets/clip4/clip4_origin.mp4';
import clip4_choice1 from '../assets/clip4/clip4_choice1.png';
import clip4_choice2 from '../assets/clip4/clip4_choice2.png';
import clip4_generated1 from '../assets/clip4/clip4_generated1.mp4';
import clip4_generated2 from '../assets/clip4/clip4_generated2.mp4';

import clip5_origin from '../assets/clip5/clip5_origin.mp4';
import clip5_choice1 from '../assets/clip5/clip5_choice1.png';
import clip5_generated1 from '../assets/clip5/clip5_generated1.mp4';


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
  height: '144px',
  position: 'relative',
  cursor: 'pointer',
  transition: 'transform 0.3s ease',
  overflow: 'hidden',
  borderRadius: '4px',
  backgroundColor: '#000',
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

// 注解文字样式
const AnnotationText = styled(Typography)(({ theme }) => ({
  color: '#DAFBDE',
  fontFamily: 'Michroma, sans-serif',
  fontSize: '0.8rem',
  textAlign: 'left',
  marginTop: '-8px',
  marginBottom: '24px',
  opacity: 0.9,
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
        Demos
      </ContentTitle>
      <ContentText>
      This section shows specific use cases of this system in several games. There will be the original video of the selected clip, and there are also simulations for the selected clip by adjusting different tactical actions in terms of the same or different tactical attributes.
      </ContentText>

      <Box sx={{ width: '95%', margin: '0 auto', mb: 6 }}>
        {/* Case 1 */}
        <Box sx={{ mb: 6 }}>
          {/* Original Clip Section */}
          <Typography variant="subtitle1" sx={{ color: '#DAFBDE', fontFamily: 'Michroma, sans-serif', mb: 2, textAlign: 'left' }}>
            Original Clip 1
          </Typography>
          <Grid container sx={{ mb: 4 }}>
            <Grid item xs={6}>
              <VideoThumbnail onClick={() => handleOpenVideo(clip1_origin)}>
                <VideoPreview src={clip1_origin} muted preload="metadata" />
                <PlayIcon />
              </VideoThumbnail>
            </Grid>
          </Grid>

          {/* Simulations Section */}
          <Typography variant="subtitle1" sx={{ color: '#DAFBDE', fontFamily: 'Michroma, sans-serif', mb: 2, textAlign: 'left' }}>
            Simulations for Clip 1
          </Typography>
          {/* Pair 1 */}
          <Grid container spacing={2} sx={{ mb: 4 }}>
            <Grid item xs={12} md={6}>
              <Grid container spacing={1}>
                <Grid item xs={6}>
                  <Box
                      component="img"
                      src={clip1_choice1}
                      alt="Hitting Position"
                      sx={{ width: '100%', height: '144px', objectFit: 'cover', borderRadius: '4px' }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <VideoThumbnail onClick={() => handleOpenVideo(clip1_generated1)}>
                    <VideoPreview src={clip1_generated1} muted preload="metadata" />
                    <PlayIcon />
                  </VideoThumbnail>
                </Grid>
              </Grid>
              <Typography variant="caption" sx={{ display: 'block', mt: 1, textAlign:'left'}}>
                Adjust the hitting position to the forehand.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Grid container spacing={1}>
                <Grid item xs={6}>
                  <Box
                      component="img"
                      src={clip1_choice2}
                      alt="Stroke Technique"
                      sx={{ width: '100%', height: '144px', objectFit: 'cover', borderRadius: '4px' }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <VideoThumbnail onClick={() => handleOpenVideo(clip1_generated2)}>
                    <VideoPreview src={clip1_generated2} muted preload="metadata" />
                    <PlayIcon />
                  </VideoThumbnail>
                </Grid>
              </Grid>
              <Typography variant="caption" sx={{ display: 'block', mt: 1, textAlign:'left'}}>
                Adjust the stroke technique to the twist.
              </Typography>
            </Grid>
          </Grid>
        </Box>

        {/* Case 2 */}
        <Box sx={{ mb: 6 }}>
          {/* Original Clip Section */}
          <Typography variant="subtitle1" sx={{ color: '#DAFBDE', fontFamily: 'Michroma, sans-serif', mb: 2, textAlign: 'left' }}>
            Original Clip 2
          </Typography>
          <Grid container sx={{ mb: 4 }}>
            <Grid item xs={3}>
              <VideoThumbnail onClick={() => handleOpenVideo(clip2_origin)}>
                <VideoPreview src={clip2_origin} muted preload="metadata" />
                <PlayIcon />
              </VideoThumbnail>
            </Grid>
          </Grid>

          {/* Simulations Section */}
          <Typography variant="subtitle1" sx={{ color: '#DAFBDE', fontFamily: 'Michroma, sans-serif', mb: 2, textAlign: 'left' }}>
            Simulations for Clip 2
          </Typography>
          {/* Pair 1 */}
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Grid container spacing={1}>
                <Grid item xs={3}>
                  <Box
                      component="img"
                      src={clip2_choice1}
                      alt="Waiting Position"
                      sx={{ width: '100%', height: '144px', objectFit: 'cover', borderRadius: '4px' }}
                  />
                </Grid>
                <Grid item xs={3}>
                  <VideoThumbnail onClick={() => handleOpenVideo(clip2_generated1)}>
                    <VideoPreview src={clip2_generated1} muted preload="metadata" />
                    <PlayIcon />
                  </VideoThumbnail>
                </Grid>
              </Grid>
              <Typography variant="caption" sx={{ display: 'block', mt: 1, textAlign:'left' }}>
                Adjust the waiting position to the original position.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Grid container spacing={1}>
                <Grid item xs={3}>
                  <Box
                      component="img"
                      src={clip2_choice2}
                      alt="Ball Position"
                      sx={{ width: '100%', height: '144px', objectFit: 'cover', borderRadius: '4px' }}
                  />
                </Grid>
                <Grid item xs={3}>
                  <VideoThumbnail onClick={() => handleOpenVideo(clip2_generated2)}>
                    <VideoPreview src={clip2_generated2} muted preload="metadata" />
                    <PlayIcon />
                  </VideoThumbnail>
                </Grid>
              </Grid>
              <Typography variant="caption" sx={{ display: 'block', mt: 1, textAlign:'left' }}>
                Adjust the ball position to the backhand long area.
              </Typography>
            </Grid>
          </Grid>
        </Box>

        {/* Case 3 */}
        <Box sx={{ mb: 6 }}>
          {/* Original Clip Section */}
          <Typography variant="subtitle1" sx={{ color: '#DAFBDE', fontFamily: 'Michroma, sans-serif', mb: 2, textAlign: 'left' }}>
            Original Clip 3
          </Typography>
          <Grid container sx={{ mb: 4 }}>
            <Grid item xs={6}>
              <VideoThumbnail onClick={() => handleOpenVideo(clip3_origin)}>
                <VideoPreview src={clip3_origin} muted preload="metadata" />
                <PlayIcon />
              </VideoThumbnail>
            </Grid>
          </Grid>

          {/* Simulations Section */}
          <Typography variant="subtitle1" sx={{ color: '#DAFBDE', fontFamily: 'Michroma, sans-serif', mb: 2, textAlign: 'left' }}>
            Simulations for Clip 3
          </Typography>
          {/* Pair 1 */}
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Grid container spacing={1}>
                <Grid item xs={6}>
                  <Box component="img" src={clip3_choice1} alt="Choice 1" sx={{ width: '100%', height: '144px', objectFit: 'cover', borderRadius: '4px' }} />
                </Grid>
                <Grid item xs={6}>
                  <VideoThumbnail onClick={() => handleOpenVideo(clip3_generated1)}>
                    <VideoPreview src={clip3_generated1} muted preload="metadata" />
                    <PlayIcon />
                  </VideoThumbnail>
                </Grid>
              </Grid>
              <Typography variant="caption" sx={{display:'block', mt:1, textAlign:'left'}}>Change the ball position to the middle long area.</Typography>
            </Grid>
            <Grid item xs={12} mb={6}>
              <Grid container spacing={1}>
                <Grid item xs={6}>
                  <Box component="img" src={clip3_choice2} alt="Choice 2" sx={{ width: '100%', height: '144px', objectFit: 'cover', borderRadius: '4px' }} />
                </Grid>
                <Grid item xs={6}>
                  <VideoThumbnail onClick={() => handleOpenVideo(clip3_generated2)}>
                    <VideoPreview src={clip3_generated2} muted preload="metadata" />
                    <PlayIcon />
                  </VideoThumbnail>
                </Grid>
              </Grid>
              <Typography variant="caption" sx={{display:'block', mt:1,textAlign:'left'}}>Change the ball position to the backhand long area.</Typography>
            </Grid>
          </Grid>
        </Box>

        {/* Case 4 */}
        <Box sx={{ mb: 6 }}>
          {/* Original Clip Section */}
          <Typography variant="subtitle1" sx={{ color: '#DAFBDE', fontFamily: 'Michroma, sans-serif', mb: 2, textAlign: 'left' }}>
            Original Clip 4
          </Typography>
          <Grid container sx={{ mb: 4 }}>
            <Grid item xs={6}>
              <VideoThumbnail onClick={() => handleOpenVideo(clip4_origin)}>
                <VideoPreview src={clip4_origin} muted preload="metadata" />
                <PlayIcon />
              </VideoThumbnail>
            </Grid>
          </Grid>

          {/* Simulations Section */}
          <Typography variant="subtitle1" sx={{ color: '#DAFBDE', fontFamily: 'Michroma, sans-serif', mb: 2, textAlign: 'left' }}>
            Simulations for Clip 4
          </Typography>
          {/* Pair 1 */}
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Grid container spacing={1}>
                <Grid item xs={6}>
                  <Box component="img" src={clip4_choice1} alt="Choice 1" sx={{ width: '100%', height: '144px', objectFit: 'cover', borderRadius: '4px' }} />
                </Grid>
                <Grid item xs={6}>
                  <VideoThumbnail onClick={() => handleOpenVideo(clip4_generated1)}>
                    <VideoPreview src={clip4_generated1} muted preload="metadata" />
                    <PlayIcon />
                  </VideoThumbnail>
                </Grid>
              </Grid>
              <Typography variant="caption" sx={{display:'block', mt:1, textAlign:'left'}}>Change the ball position to middle long area.</Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Grid container spacing={1}>
                <Grid item xs={6}>
                  <Box component="img" src={clip4_choice2} alt="Choice 2" sx={{ width: '100%', height: '144px', objectFit: 'cover', borderRadius: '4px' }} />
                </Grid>
                <Grid item xs={6}>
                  <VideoThumbnail onClick={() => handleOpenVideo(clip4_generated2)}>
                    <VideoPreview src={clip4_generated2} muted preload="metadata" />
                    <PlayIcon />
                  </VideoThumbnail>
                </Grid>
              </Grid>
              <Typography variant="caption" sx={{display:'block', mt:1,textAlign:'left'}}>Change the ball position to forehand long area.</Typography>
            </Grid>
          </Grid>
        </Box>

        {/* Case 5 */}
        <Box sx={{ mb: 6 }}>
          {/* Original Clip Section */}
          <Typography variant="subtitle1" sx={{ color: '#DAFBDE', fontFamily: 'Michroma, sans-serif', mb: 2, textAlign: 'left' }}>
            Original Clip 5
          </Typography>
          <Grid container sx={{ mb: 4 }}>
            <Grid item xs={6}>
              <VideoThumbnail onClick={() => handleOpenVideo(clip5_origin)}>
                <VideoPreview src={clip5_origin} muted preload="metadata" />
                <PlayIcon />
              </VideoThumbnail>
            </Grid>
          </Grid>

          {/* Simulations Section */}
          <Typography variant="subtitle1" sx={{ color: '#DAFBDE', fontFamily: 'Michroma, sans-serif', mb: 2, textAlign: 'left' }}>
            Simulations for Clip 5
          </Typography>
          {/* Pair 1 */}
          <Grid container spacing={2} sx={{ mb: 4 }}>
            <Grid item xs={12} md={6}>
              <Grid container spacing={1}>
                <Grid item xs={6}>
                  <Box
                      component="img"
                      src={clip5_choice1}
                      alt="Stroke Technique"
                      sx={{ width: '100%', height: '144px', objectFit: 'cover', borderRadius: '4px' }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <VideoThumbnail onClick={() => handleOpenVideo(clip5_generated1)}>
                    <VideoPreview src={clip5_generated1} muted preload="metadata" />
                    <PlayIcon />
                  </VideoThumbnail>
                </Grid>
              </Grid>
              <Typography variant="caption" sx={{ display: 'block', mt: 1, textAlign:'left' }}>
                Change the stroke technique from twist to short.
              </Typography>
            </Grid>
          </Grid>
        </Box>

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
