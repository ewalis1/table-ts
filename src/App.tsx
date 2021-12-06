import React from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import Form from './components/Form';
import TableComponent from './components/Table';
import {AppBar, Box, Toolbar, Typography, IconButton} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const App: React.FC = () => {
  return (
    <div className="App">
      <Box sx={{flexGrow: 1}}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{mr: 2}}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{flexGrow: 1 / 25}}>
              <Link
                to="/"
                style={{
                  color: '#fff',
                  textDecoration: 'none',
                  cursor: 'pointer',
                }}
              >
                Table
              </Link>
            </Typography>
            <Typography variant="h6" component="div" sx={{flexGrow: 1 / 25}}>
              <Link
                to="/form"
                style={{
                  color: '#fff',
                  textDecoration: 'none',
                  cursor: 'pointer',
                }}
              >
                Form
              </Link>
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Routes>
        <Route path="/" element={<TableComponent />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </div>
  );
};

export default App;
