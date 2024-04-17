import express from 'express';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser'; 
import cors from 'cors';
import { createProxyMiddleware } from 'http-proxy-middleware';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();

app.use(express.static(join(__dirname, 'dist')));

app.use(bodyParser.urlencoded({ extended: true }));


app.use('/api/proxy', createProxyMiddleware({
  target: 'https://secure.myfees.lk',
  changeOrigin: true,
  pathRewrite: {
    '^/api/proxy': '/api/sch/payments' 
  },
  onError: (err, req, res) => {
    console.error('Proxy error:', err);
    res.status(500).send('Proxy error');
  }
}));

app.post('/api/sch/payments', (req, res) => {
  // Handle POST requests to /api/sch/payments
  // You can access request body parameters using req.body
  console.log('Received payment data:', req.body);
  res.json({ status: 'success', message: 'Payment received successfully' });
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});