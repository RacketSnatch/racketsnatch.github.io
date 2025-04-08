import React, { useState, useEffect } from 'react';
import { Fab } from '@mui/material';
import { styled } from '@mui/material/styles';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

// 自定义悬浮按钮样式
const StyledFab = styled(Fab)(({ theme }) => ({
  position: 'fixed',
  top: '30px',
  left: '30px',
  backgroundColor: '#232323',
  color: '#609A7A',
  border: '3px solid #609A7A',
  boxShadow: 'none',
  '&:hover': {
    backgroundColor: '#609A7A',
  },
  zIndex: 1000,
}));

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // 监听滚动事件，决定是否显示按钮
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 5) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // 点击按钮滚动到顶部
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <StyledFab 
          size="medium" 
          aria-label="scroll back to top" 
          onClick={scrollToTop}
        >
          <KeyboardArrowUpIcon />
        </StyledFab>
      )}
    </>
  );
};

export default ScrollToTop;
