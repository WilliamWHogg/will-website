import React from 'react';
import { Box, Container, Typography, IconButton } from '@mui/material';
import { School, LinkedIn, Email } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box component="footer" sx={{ py: 4, mt: 'auto', borderTop: 1, borderColor: 'divider' }}>
      <Container maxWidth="lg">
        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between', 
            alignItems: 'center',
            gap: 2
          }}
        >
          <Typography variant="body2" color="text.secondary">
            © 2025 William Hogg. All rights reserved.
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 1 }}>
            <IconButton
              color="inherit"
              href="https://scholar.google.com/citations?user=VKsGGyMAAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Google Scholar Profile"
            >
              <School />
            </IconButton>
            <IconButton 
              color="inherit" 
              href="https://www.linkedin.com/in/will-hogg/" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <LinkedIn />
            </IconButton>
            <IconButton 
              color="inherit" 
              href="mailto:WilliamWHogg@gmail.com"
              aria-label="Email Contact"
            >
              <Email />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;