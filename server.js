// import express from 'express';
// import http from 'http';
// import { createProxyServer } from 'http-proxy';
// import path from 'path';
// import { fileURLToPath } from 'url';

// const __dirname = path.dirname(fileURLToPath(import.meta.url));
// const app = express();
// const PORT = process.env.PORT || 5173;

// app.use(express.static(path.join(__dirname, 'dist')));

// const apiServer = http.createServer((req, res) => {
//   if (req.url.startsWith('/api')) {
//     res.writeHead(200, { 'Content-Type': 'application/json' });
//     res.end(JSON.stringify({ message: 'Hello from the server' }));
//   } else {
//     proxy.web(req, res, { target: 'http://localhost:' + PORT });
//   }
// });

// const proxy = createProxyServer({});
// proxy.on('error', (err, req, res) => {
//   console.error('Proxy error:', err);
//   res.writeHead(500, { 'Content-Type': 'text/plain' });
//   res.end('Proxy error');
// });


// apiServer.listen(PORT, () => {
//   console.log(`API server is running on port ${PORT}`);
// });

// app.listen(3000, () => {
//   console.log(`Express server is running on port 3000`);
// });
