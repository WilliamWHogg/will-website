import React, { useState } from 'react';
import {
  Box, IconButton, Typography, Fade
} from '@mui/material';
import {
  NavigateBefore, NavigateNext, Close
} from '@mui/icons-material';
import { getProjectImage } from '../utils/imageLoader';

const ImageSlideshow = ({ images, projectTitle, projectFolder, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const getImagePath = (image) => {
    if (!image) return null;
    const img = getProjectImage(projectFolder, image.file);
    if (!img) console.warn(`Slideshow image not found: ${projectFolder}/${image.file}`);
    return img;
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowRight') nextImage();
    if (event.key === 'ArrowLeft') prevImage();
    if (event.key === 'Escape') onClose();
  };

  React.useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (!images || images.length === 0) return null;

  const currentImage = getImagePath(images[currentIndex]);
  const currentCaption = images[currentIndex]?.caption;

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 2000,
      }}
      onClick={onClose}
    >
      <Box
        sx={{
          position: 'relative',
          maxWidth: '90%',
          maxHeight: '90%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <IconButton
          onClick={onClose}
          sx={{
            position: 'absolute',
            top: -50,
            right: 0,
            color: 'white',
            zIndex: 1,
          }}
        >
          <Close />
        </IconButton>

        {/* Image container */}
        <Box
          sx={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Previous button */}
          {images.length > 1 && (
            <IconButton
              onClick={prevImage}
              sx={{
                position: 'absolute',
                left: -60,
                color: 'white',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                },
              }}
            >
              <NavigateBefore />
            </IconButton>
          )}

          {/* Main image */}
          <Fade in key={currentIndex} timeout={300}>
            {currentImage ? (
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                <Box
                  component="img"
                  src={currentImage}
                  alt={`${projectTitle} - Image ${currentIndex + 1}`}
                  sx={{
                    maxWidth: '100%',
                    maxHeight: '65vh',
                    objectFit: 'contain',
                    borderRadius: 2,
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                  }}
                />
                {currentCaption && (
                  <Typography
                    variant="body1"
                    sx={{
                      color: 'white',
                      textAlign: 'center',
                      maxWidth: '90%',
                      backgroundColor: 'rgba(0, 0, 0, 0.5)',
                      padding: '8px 16px',
                      borderRadius: 1,
                    }}
                  >
                    {currentCaption}
                  </Typography>
                )}
              </Box>
            ) : (
              <Box
                sx={{
                  width: 400,
                  height: 300,
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  border: '2px dashed rgba(255, 255, 255, 0.3)',
                }}
              >
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Image Not Found
                </Typography>
                <Typography variant="body2" sx={{ textAlign: 'center', opacity: 0.7 }}>
                  {images[currentIndex]}
                </Typography>
                <Typography variant="body2" sx={{ textAlign: 'center', opacity: 0.7, mt: 1 }}>
                  Add this image to the project folder
                </Typography>
              </Box>
            )}
          </Fade>

          {/* Next button */}
          {images.length > 1 && (
            <IconButton
              onClick={nextImage}
              sx={{
                position: 'absolute',
                right: -60,
                color: 'white',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                },
              }}
            >
              <NavigateNext />
            </IconButton>
          )}
        </Box>

        {/* Image info */}
        <Box
          sx={{
            mt: 2,
            textAlign: 'center',
            color: 'white',
          }}
        >
          <Typography variant="h6" sx={{ mb: 1 }}>
            {projectTitle}
          </Typography>
          {images.length > 1 && (
            <Typography variant="body2" sx={{ opacity: 0.7 }}>
              {currentIndex + 1} of {images.length}
            </Typography>
          )}
        </Box>

        {/* Thumbnail strip */}
        {images.length > 1 && (
          <Box
            sx={{
              display: 'flex',
              gap: 1,
              mt: 2,
              maxWidth: '100%',
              overflowX: 'auto',
            }}
          >
            {images.map((image, index) => {
              const thumbImage = getImagePath(image);
              return thumbImage ? (
                <Box
                  key={index}
                  component="img"
                  src={thumbImage}
                  alt={image.caption || `Thumbnail ${index + 1}`}
                  onClick={() => setCurrentIndex(index)}
                  sx={{
                    width: 60,
                    height: 45,
                    objectFit: 'cover',
                    borderRadius: 1,
                    cursor: 'pointer',
                    opacity: index === currentIndex ? 1 : 0.6,
                    border: index === currentIndex ? '2px solid white' : '2px solid transparent',
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      opacity: 1,
                    },
                  }}
                />
              ) : null;
            })}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default ImageSlideshow;