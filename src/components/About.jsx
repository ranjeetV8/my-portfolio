import React from 'react';
import { Box, Typography, Container, Stack } from '@mui/material';

const About = () => {
  return (
    <Box
      id="about"
      sx={{
        py: 10,
        backgroundColor: '#0e0f1a',
        color: '#ffffff',
      }}
    >
      <Container maxWidth="md">
        <Stack spacing={4} textAlign="center">
          <Typography variant="h4" fontWeight="bold">
            About Me
          </Typography>
          <Typography variant="body1" sx={{ color: '#ccc', lineHeight: 1.8 }}>
            I'm Ranjeet, a passionate software developer with a love for building modern web
            applications. I specialize in full-stack development using technologies like
            React, Node.js, MongoDB, and Express (MERN stack). My goal is to create clean,
            performant, and user-friendly experiences that solve real-world problems.
          </Typography>
          <Typography variant="body1" sx={{ color: '#ccc', lineHeight: 1.8 }}>
            Whether it's designing beautiful front-end interfaces or building robust back-end
            APIs, I enjoy every part of the development process. I'm currently working on a
            portfolio that showcases my latest projects and skills. Thanks for stopping by!
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default About;
