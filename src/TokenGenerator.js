import React, { useState } from 'react';
import { Button, TextField, Grid, Typography, Container, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import './TokenGenerator.css';

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
      <Grid item xs={12 / perRow} key={`${color}-${index}`} className="token-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.05 }}
          whileHover={{ scale: 1.1, rotate: 2 }}
          className={`token ${color}`}
        >
          {token}
        </motion.div>
      </Grid>
    ));
  };

  return (
    <Container maxWidth="md" className="token-generator-container">
      <Typography variant="h3" className="title">Futuristic Token Generator</Typography>
      
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <TextField label="Blue Token Count" name="count" type="number" value={blueSettings.count} onChange={(e) => handleInputChange(e, 'blue')} fullWidth variant="outlined" />
          <TextField label="Blue Prefix" name="prefix" value={blueSettings.prefix} onChange={(e) => handleInputChange(e, 'blue')} fullWidth variant="outlined" />
          <TextField label="Blue Tokens per Row" name="perRow" type="number" value={blueSettings.perRow} onChange={(e) => handleInputChange(e, 'blue')} fullWidth variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField label="Red Token Count" name="count" type="number" value={redSettings.count} onChange={(e) => handleInputChange(e, 'red')} fullWidth variant="outlined" />
          <TextField label="Red Prefix" name="prefix" value={redSettings.prefix} onChange={(e) => handleInputChange(e, 'red')} fullWidth variant="outlined" />
          <TextField label="Red Tokens per Row" name="perRow" type="number" value={redSettings.perRow} onChange={(e) => handleInputChange(e, 'red')} fullWidth variant="outlined" />
        </Grid>
      </Grid>
      
      <div className="button-group">
        <Button onClick={generateTokens}>Generate Tokens</Button>
        <Button onClick={clearTokens}>Clear Tokens</Button>
      </div>

      <Typography variant="h5" className="subtitle">Blue Tokens</Typography>
      <Grid container spacing={2} justifyContent="center">
        {renderTokens(blueTokens, 'blue', blueSettings.perRow || 3)}
      </Grid>

      <Typography variant="h5" className="subtitle">Red Tokens</Typography>
      <Grid container spacing={2} justifyContent="center">
        {renderTokens(redTokens, 'red', redSettings.perRow || 3)}
      </Grid>
    </Container>
  );
};

export default TokenGenerator;
