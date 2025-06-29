import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  CssBaseline,
  Box
} from '@mui/material';

function App() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            My Material UI App
          </Typography>
        </Toolbar>
      </AppBar>

      <Box sx={{ bgcolor: '#80808080', minHeight: '100vh', py: 8 }}>
        <Container maxWidth="sm" sx={{ textAlign: 'center' }}>
          <Typography variant="h5" gutterBottom>
            Добро пожаловать в наше приложение!
          </Typography>
          <Button variant="contained" onClick={handleOpen}>
            Открыть диалоговое окно
          </Button>
        </Container>

        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="dialog-title"
          aria-describedby="dialog-description"
        >
          <DialogTitle id="dialog-title">Использовать Material UI?</DialogTitle>
          <DialogContent>
            <DialogContentText id="dialog-description">
              Это простое React приложение с использованием Material UI. Вы можете настроить его по своему усмотрению.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>ОТМЕНА</Button>
            <Button onClick={handleClose} autoFocus>СОГЛАСЕН</Button>
          </DialogActions>
        </Dialog>
      </Box>
    </>
  );
}

export default App;

