const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Enable CORS for all origins
app.use(cors({
    origin: 'https://www.thecatalyst.lk'
  }));
  

app.post('/api/sch/payments', async (req, res) => {
  try {
    // Forward the POST request to the desired URL
    const response = await axios.post('https://secure.myfees.lk/api/sch/payments', req.body);
    res.json(response.data);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(3001, () => {
  console.log('Proxy server is running on port 3001');
});
