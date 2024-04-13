// proxy-server.js

const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

// Define a route to proxy requests
app.post('/proxy', async (req, res) => {
  try {
    // Forward the request to the target server
    const response = await axios.post('https://secure.myfees.lk/api/sch/payments', req.body, {
      // Pass the request headers to the target server
      headers: req.headers
    });
    // Forward the response from the target server to the client
    res.send(response.data);
  } catch (error) {
    // If an error occurs, send an error response to the client
    res.status(500).send('Error');
  }
});

// Start the proxy server
app.listen(port, () => {
  console.log(`Proxy server listening at http://localhost:${port}`);
});
