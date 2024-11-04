import React, { useState } from 'react';
import { Button, TextField, Grid, Typography, Container, Box, Paper } from '@mui/material';

const TokenGenerator = () => {
  const [blueTokens, setBlueTokens] = useState([]);
  const [redTokens, setRedTokens] = useState([]);
  const [blueSettings, setBlueSettings] = useState({ count: '', prefix: '', perRow: '' });
  const [redSettings, setRedSettings] = useState({ count: '', prefix: '', perRow: '' });

  const handleInputChange = (e, color) => {
    const { name, value } = e.target;
    if (color === 'blue') {
      setBlueSettings({ ...blueSettings, [name]: value });
    } else {
      setRedSettings({ ...redSettings, [name]: value });
    }
  };

  const generateTokens = () => {
    const generateArray = (count, prefix) => Array.from({ length: count }, (_, i) => `${prefix}${i + 1}`);
    setBlueTokens(generateArray(Number(blueSettings.count), blueSettings.prefix));
    setRedTokens(generateArray(Number(redSettings.count), redSettings.prefix));
  };

  const clearTokens = () => {
    setBlueTokens([]);
    setRedTokens([]);
    setBlueSettings({ count: '', prefix: '', perRow: '' });
    setRedSettings({ count: '', prefix: '', perRow: '' });
  };

  const renderTokens = (tokens, color, perRow) => {
    return (
      <Grid container spacing={2} justifyContent="center">
        {tokens.map((token, index) => (
          <Grid item xs={12 / perRow} key={`${color}-${index}`}>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              width={70}
              height={70}
              bgcolor={color === 'blue' ? '#3f51b5' : '#f44336'}
              color="white"
              borderRadius={2}
              boxShadow={3}
              fontSize={18}
              style={{ margin: '10px auto' }}
            >
              {token}
            </Box>
          </Grid>
        ))}
      </Grid>
    );
  };

  return (
    <Container maxWidth="md">
      <Paper elevation={4} style={{ padding: '20px', borderRadius: '15px', marginTop: '20px' }}>
        <Typography variant="h4" style={{ marginBottom: '20px', textAlign: 'center', color: '#333' }}>
          Token Generator
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" color="primary">Blue Token Settings</Typography>
            <TextField
              label="Number of Blue Tokens"
              name="count"
              type="number"
              value={blueSettings.count}
              onChange={(e) => handleInputChange(e, 'blue')}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Prefix for Blue Tokens"
              name="prefix"
              value={blueSettings.prefix}
              onChange={(e) => handleInputChange(e, 'blue')}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Blue Tokens Per Row"
              name="perRow"
              type="number"
              value={blueSettings.perRow}
              onChange={(e) => handleInputChange(e, 'blue')}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" color="secondary">Red Token Settings</Typography>
            <TextField
              label="Number of Red Tokens"
              name="count"
              type="number"
              value={redSettings.count}
              onChange={(e) => handleInputChange(e, 'red')}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Prefix for Red Tokens"
              name="prefix"
              value={redSettings.prefix}
              onChange={(e) => handleInputChange(e, 'red')}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Red Tokens Per Row"
              name="perRow"
              type="number"
              value={redSettings.perRow}
              onChange={(e) => handleInputChange(e, 'red')}
              fullWidth
              margin="normal"
            />
          </Grid>
        </Grid>
        <Box display="flex" justifyContent="center" marginTop={3}>
          <Button
            variant="contained"
            color="primary"
            onClick={generateTokens}
            style={{ marginRight: '15px' }}
          >
            Generate
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            onClick={clearTokens}
          >
            Clear
          </Button>
        </Box>
      </Paper>

      <Paper elevation={3} style={{ padding: '20px', borderRadius: '15px', marginTop: '30px' }}>
        <Typography variant="h5" style={{ marginBottom: '15px', color: '#3f51b5' }}>
          Blue Tokens
        </Typography>
        {renderTokens(blueTokens, 'blue', blueSettings.perRow || 3)}
      </Paper>

      <Paper elevation={3} style={{ padding: '20px', borderRadius: '15px', marginTop: '30px' }}>
        <Typography variant="h5" style={{ marginBottom: '15px', color: '#f44336' }}>
          Red Tokens
        </Typography>
        {renderTokens(redTokens, 'red', redSettings.perRow || 3)}
      </Paper>
    </Container>
  );
};

export default TokenGenerator;
