import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Stack } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        background: 'linear-gradient(90deg, #0f111c 0%, #131829 100%)',
        paddingY: 1,
        boxShadow: 'none',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', maxWidth: '1200px', width: '100%', margin: '0 auto' }}>
        {/* Left - Logo */}
        <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', color: '#fff' }}>
          Ranjeet
        </Typography>

        {/* Center - Nav Links */}
        <Stack direction="row" spacing={3}>
          {['Home', 'About', 'Projects','Contact'].map((item) => (
            <Button
              key={item}
              color="inherit"
              sx={{
                textTransform: 'none',
                color: '#ccc',
                '&:hover': { color: '#fff' },
              }}
            >
              {item}
            </Button>
          ))}
        </Stack>

        {/* Right - Contact Button */}
        <Button
          variant="contained"
          sx={{
            background: 'linear-gradient(90deg, #f33c1e, #fc5c1e)',
            borderRadius: '999px',
            paddingX: 3,
            paddingY: 1,
            fontWeight: 600,
            textTransform: 'none',
            boxShadow: '0px 4px 10px rgba(243, 60, 30, 0.4)',
            '&:hover': {
              background: 'linear-gradient(90deg, #e6321c, #e94d1e)',
            },
          }}
        >
          Contact
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
