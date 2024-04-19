import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

const app = express();
const PORT = process.env.PORT || 5000;

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Proxy middleware configuration
app.use(
  '/api',
  createProxyMiddleware({
    target: 'https://secure.myfees.lk',
    changeOrigin: true,
    pathRewrite: {
      '^/api': '/api/sch/payments' // Rewrite '/api' to '/api/sch/payments'
    },
    onError: (err, req, res) => {
      console.error('Proxy Error:', err);
      res.status(500).send('Proxy Error');
    },
    onProxyReq: (proxyReq, req, res) => {
      console.log('Sending Request to the Target:', req.method, req.url);
    },
    onProxyRes: (proxyRes, req, res) => {
      console.log('Received Response from the Target:', proxyRes.statusCode, req.url);
    },
  })
);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
