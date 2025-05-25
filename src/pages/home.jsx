import React from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';

const Home = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        backgroundColor: '#0e0f1a',
        display: 'flex',
        justifyContent: 'right',
        alignItems: 'center',
        textAlign: 'center',
        px: 2, // padding for smaller screens
      }}
    >
      <Stack spacing={3} alignItems="center">
        <Typography variant="h3" fontWeight="bold" color="#fff">
          Hello, I'm Ranjeet
        </Typography>
        <Typography variant="h6" color="#cccccc">
          A passionate Software Developer building my portfolio
        </Typography>
        <Button
          variant="contained"
          sx={{
            background: 'linear-gradient(to right, #f33c1e, #fc5c1e)',
            px: 4,
            py: 1,
            fontWeight: 'bold',
            borderRadius: '8px',
            '&:hover': {
              background: 'linear-gradient(to right, #e6321c, #e94d1e)',
            },
          }}
        >
          RESUME
        </Button>
      </Stack>
    </Box>
  );
};

export default Home;
