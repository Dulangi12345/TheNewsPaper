// Import necessary modules
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

// Create an Express app
const app = express();

// Define proxy middleware
app.use(
  '/api', // Route to proxy
  createProxyMiddleware({
    target: 'https://secure.myfees.lk/api/sch/payments', // Target URL
    changeOrigin: true, // Change the origin of the host header to the target URL
  })
);

// Test endpoint to verify the proxy is working
app.get('/test-proxy', (req, res) => {
  res.send('Proxy middleware is working!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
