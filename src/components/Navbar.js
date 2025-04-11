import React from 'react';
import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

// 自定义透明导航栏
const TransparentAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: 'transparent',
  boxShadow: 'none',
  position: 'relative',
  zIndex: 1,
  width: '100%',
}));

// 左侧按钮（带左侧圆角）
const LeftNavButton = styled(Button)(({ theme }) => ({
  color: '#DAFBDE',
  fontFamily: 'Michroma, sans-serif',
  backgroundColor: 'rgba(35, 35, 35, 0.3)',
  borderRadius: '15px 0 0 15px',
  border: '1px solid #609A7A',
  borderRight: 'none',
  padding: '8px 20px',
  fontSize: '1.1rem',
  '&:hover': {
    backgroundColor: 'rgba(96, 154, 122, 0.4)',
  },
}));

// 中间按钮（无圆角）
const MiddleNavButton = styled(Button)(({ theme }) => ({
  color: '#DAFBDE',
  fontFamily: 'Michroma, sans-serif',
  backgroundColor: 'rgba(35, 35, 35, 0.3)',
  borderRadius: '0',
  border: '1px solid #609A7A',
  borderRight: 'none',
  padding: '8px 20px',
  fontSize: '1.1rem',
  '&:hover': {
    backgroundColor: 'rgba(96, 154, 122, 0.4)',
  },
}));

// 右侧按钮（带右侧圆角）
const RightNavButton = styled(Button)(({ theme }) => ({
  color: '#DAFBDE',
  fontFamily: 'Michroma, sans-serif',
  backgroundColor: 'rgba(35, 35, 35, 0.3)',
  borderRadius: '0 15px 15px 0',
  border: '1px solid #609A7A',
  padding: '8px 20px',
  fontSize: '1.1rem',
  '&:hover': {
    backgroundColor: 'rgba(96, 154, 122, 0.4)',
  },
}));

const Navbar = () => {
  const navItems = ['Abstract', 'Demo Application', 'Demo', 'Model', 'Reference'];
  
  // 处理滚动到指定区域的函数
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      // 滚动到元素位置，并居中显示
      section.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  // 将导航项与对应的区域ID映射
  const getIdFromNavItem = (item) => {
    return item.toLowerCase().replace(/\s+/g, '-');
  };

  return (
    <TransparentAppBar>
      <Toolbar sx={{ justifyContent: 'center', padding: '30px 0', top: '70%', marginTop: '10px' }}>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          {navItems.map((item, index) => {
            const sectionId = getIdFromNavItem(item);
            
            if (index === 0) {
              return (
                <LeftNavButton 
                  key={index} 
                  onClick={() => scrollToSection(sectionId)}
                >
                  {item}
                </LeftNavButton>
              );
            } else if (index === navItems.length - 1) {
              return (
                <RightNavButton 
                  key={index} 
                  onClick={() => scrollToSection(sectionId)}
                >
                  {item}
                </RightNavButton>
              );
            } else {
              return (
                <MiddleNavButton 
                  key={index} 
                  onClick={() => scrollToSection(sectionId)}
                >
                  {item}
                </MiddleNavButton>
              );
            }
          })}
        </Box>
      </Toolbar>
    </TransparentAppBar>
  );
};

export default Navbar;
