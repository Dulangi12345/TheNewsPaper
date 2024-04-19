import express from 'express';
import http from 'http';
import { createProxyServer } from 'http-proxy';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 5173;

// Serve static files from the 'dist' directory
app.use(express.static(path.join(__dirname, 'dist')));

// Create an HTTP server for API calls
const apiServer = http.createServer((req, res) => {
  // Handle API requests here
  if (req.url.startsWith('/api')) {
    // Respond with a sample JSON message
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Hello from the server' }));
  } else {
    // If the request is not for the API, proxy it to the Express app
    proxy.web(req, res, { target: 'http://localhost:' + PORT });
  }
});

// Create a proxy server for forwarding non-API requests to the Express app
const proxy = createProxyServer({});
proxy.on('error', (err, req, res) => {
  console.error('Proxy error:', err);
  res.writeHead(500, { 'Content-Type': 'text/plain' });
  res.end('Proxy error');
});

// Start the API server
apiServer.listen(PORT, () => {
  console.log(`API server is running on port ${PORT}`);
});

// Start the Express app
app.listen(3000, () => {
  console.log(`Express server is running on port 3000`);
});
