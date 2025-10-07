import React from 'react';
import { Container, Box, Typography, Button } from '@mui/material';

const Resume = () => {
  const resumeUrl = '/resume.pdf';

  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h3" sx={{ fontWeight: 700 }}>Resume</Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
          View or download my resume below.
        </Typography>
      </Box>

      <Box sx={{ mb: 4 }}>
        <iframe
          title="Resume"
          src={resumeUrl}
          style={{ width: '100%', height: '800px', border: '1px solid rgba(0,0,0,0.08)' }}
        />
      </Box>

      <Box sx={{ textAlign: 'center' }}>
        <Button variant="contained" href={resumeUrl} target="_blank" rel="noopener noreferrer">
          Download Resume (PDF)
        </Button>
      </Box>
    </Container>
  );
};

export default Resume;
