import React, { useState } from 'react';
import { Button, TextField, Grid, Typography, Container, Paper } from '@mui/material';
import { Box } from '@mui/system';
import { motion } from 'framer-motion';

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
    return tokens.map((token, index) => (
      <Grid item xs={12 / perRow} key={`${color}-${index}`} style={{ textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Paper
            elevation={5}
            style={{
              padding: '10px',
              background: color === 'blue' ? 'linear-gradient(135deg, #4A90E2, #6DC7FF)' : 'linear-gradient(135deg, #FF6F61, #FFB199)',
              color: '#fff',
              fontWeight: 'bold',
              borderRadius: '12px',
              boxShadow: '0px 4px 12px rgba(0,0,0,0.2)',
            }}
          >
            {token}
          </Paper>
        </motion.div>
      </Grid>
    ));
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 4, mb: 4, textAlign: 'center' }}>
        <Typography variant="h3" color="primary" style={{ fontWeight: 'bold', color: '#fff' }}>
          Fancy Token Generator
        </Typography>
      </Box>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <TextField label="Number of Blue Tokens" name="count" type="number" value={blueSettings.count} onChange={(e) => handleInputChange(e, 'blue')} fullWidth margin="normal" variant="outlined" />
          <TextField label="Prefix for Blue Tokens" name="prefix" value={blueSettings.prefix} onChange={(e) => handleInputChange(e, 'blue')} fullWidth margin="normal" variant="outlined" />
          <TextField label="Blue Tokens Per Row" name="perRow" type="number" value={blueSettings.perRow} onChange={(e) => handleInputChange(e, 'blue')} fullWidth margin="normal" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField label="Number of Red Tokens" name="count" type="number" value={redSettings.count} onChange={(e) => handleInputChange(e, 'red')} fullWidth margin="normal" variant="outlined" />
          <TextField label="Prefix for Red Tokens" name="prefix" value={redSettings.prefix} onChange={(e) => handleInputChange(e, 'red')} fullWidth margin="normal" variant="outlined" />
          <TextField label="Red Tokens Per Row" name="perRow" type="number" value={redSettings.perRow} onChange={(e) => handleInputChange(e, 'red')} fullWidth margin="normal" variant="outlined" />
        </Grid>
      </Grid>
      <Box sx={{ textAlign: 'center', mt: 3, mb: 3 }}>
        <Button variant="contained" color="primary" onClick={generateTokens} style={{ marginRight: '10px', padding: '10px 20px' }}>Generate</Button>
        <Button variant="outlined" color="secondary" onClick={clearTokens} style={{ padding: '10px 20px' }}>Clear</Button>
      </Box>

      <Typography variant="h5" color="primary" style={{ marginBottom: '10px', color: '#fff' }}>Blue Tokens</Typography>
      <Grid container spacing={2} justifyContent="center">
        {renderTokens(blueTokens, 'blue', blueSettings.perRow || 1)}
      </Grid>

      <Typography variant="h5" color="secondary" style={{ margin: '20px 0 10px', color: '#fff' }}>Red Tokens</Typography>
      <Grid container spacing={2} justifyContent="center">
        {renderTokens(redTokens, 'red', redSettings.perRow || 1)}
      </Grid>
    </Container>
  );
};

export default TokenGenerator;
