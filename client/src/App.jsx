import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline, ThemeProvider, Box } from '@mui/material';
import theme from './theme';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
// FeatureCards removed
import ProjectsGrid from './components/ProjectsGrid';
import Resume from './components/Resume';

// Home page component
function Home() {
  return (
    <>
      <HeroSection />
    </>
  );
}

// Projects page component
function Projects() {
  return <ProjectsGrid />;
}

// About page component

function ResumePage() {
  return <Resume />;
}


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router basename="/will-website">
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Navigation />
          <Box sx={{ flexGrow: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              {/* About page removed */}
              <Route path="/resume" element={<ResumePage />} />
            </Routes>
          </Box>
          <Footer />
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
