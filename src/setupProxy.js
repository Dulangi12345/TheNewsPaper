const express = require('express');
const axios = require('axios');
const app = express();

// Proxy endpoint
app.get('/api/sch/payments', async (req, res) => {
  try {
    const response = await axios.get('https://secure.myfees.lk/api/sch/payments');
    res.json(response.data);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Other routes and middleware...
