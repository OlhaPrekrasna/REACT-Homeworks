import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, Typography } from '@mui/material';
import styled from '@emotion/styled';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#ffffff',
    },
    primary: {
      main: '#1976d2',
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#121212',
    },
    primary: {
      main: '#90caf9',
    },
  },
});

const StyledButton = styled(Button)`
  margin-top: 20px;
`;

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const currentTheme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          bgcolor: 'background.default',
          color: 'text.primary',
        }}
      >
        <Typography variant="h4" gutterBottom>
          {isDarkMode ? 'Dark Mode' : 'Light Mode'}
        </Typography>
        <StyledButton variant="contained" onClick={toggleTheme}>
          Toggle Theme
        </StyledButton>
      </Box>
    </ThemeProvider>
  );
}

export default App;
