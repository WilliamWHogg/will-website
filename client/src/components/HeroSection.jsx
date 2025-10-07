import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container, Box, Grid, Typography, Button, Avatar, Chip, Fade
} from '@mui/material';
import {
  KeyboardArrowDown, Rocket, ChevronRight, Engineering, Build, TrendingUp
} from '@mui/icons-material';
import profileImage from '../assets/profile-will.png';

const HeroSection = () => {
  return (
    <Box
      sx={{
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 50%, #252525 100%)',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 30% 20%, rgba(197, 48, 48, 0.1) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(139, 149, 156, 0.1) 0%, transparent 50%)',
          zIndex: 1,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Fade in timeout={1000}>
          <Grid container spacing={4} alignItems="center" justifyContent="center">
            <Grid item xs={12} md={8}>
              <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                <Typography variant="h5" color="primary" sx={{ mb: 2, fontWeight: 600 }}>
                  👋 Hello, I'm
                </Typography>
                <Typography variant="h1" sx={{ mb: 3, fontWeight: 700 }}>
                  William Hogg
                </Typography>
                <Typography variant="h4" color="text.secondary" sx={{ mb: 3, fontWeight: 400 }}>
                  Mechanical Engineer & Creative Problem Solver
                </Typography>
                <Typography variant="h6" color="text.secondary" sx={{ mb: 4, lineHeight: 1.8, maxWidth: '600px', mx: { xs: 'auto', md: 0 } }}>
                  I’m a mechanical engineering student specializing in metal additive manufacturing, mechatronics, and process optimization. I build hardware and control systems, run experiments, and use data‑driven methods to improve manufacturing processes.
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: { xs: 'center', md: 'flex-start' } }}>
                  <Button 
                    variant="contained" 
                    size="large" 
                    component={Link} 
                    to="/projects"
                    endIcon={<Rocket />}
                    sx={{ fontSize: '1.1rem', px: 4, py: 1.5 }}
                  >
                    View My Projects
                  </Button>
                  <Button 
                    variant="outlined" 
                    size="large" 
                    component={Link} 
                    to="/contact"
                    endIcon={<ChevronRight />}
                    sx={{ fontSize: '1.1rem', px: 4, py: 1.5 }}
                  >
                    Get In Touch
                  </Button>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: 'center' }}>
                <Avatar
                  src={profileImage}
                  alt="William Hogg - Mechanical Engineer"
                  sx={{
                    width: 280,
                    height: 280,
                    mx: 'auto',
                    mb: 2,
                    boxShadow: '0px 12px 40px rgba(197, 48, 48, 0.3)',
                    border: '4px solid',
                    borderColor: 'primary.main',
                  }}
                >
                  WH
                </Avatar>
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, flexWrap: 'wrap' }}>
                  <Chip icon={<Engineering />} label="Additive Manufacturing" color="primary" variant="outlined" />
                  <Chip icon={<Build />} label="Mechanical Design" color="secondary" variant="outlined" />
                  <Chip icon={<TrendingUp />} label="Optimization" color="primary" variant="outlined" />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Fade>
      </Container>
      <Box
        sx={{
          position: 'absolute',
          bottom: 20,
          left: '50%',
          transform: 'translateX(-50%)',
          animation: 'bounce 2s infinite',
          '@keyframes bounce': {
            '0%, 20%, 50%, 80%, 100%': { transform: 'translateX(-50%) translateY(0)' },
            '40%': { transform: 'translateX(-50%) translateY(-10px)' },
            '60%': { transform: 'translateX(-50%) translateY(-5px)' },
          },
        }}
      >
        <KeyboardArrowDown sx={{ fontSize: 40, color: 'primary.main', opacity: 0.8 }} />
      </Box>
    </Box>
  );
};

export default HeroSection;