import express from 'express';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser'; 
import cors from 'cors';
import { createProxyMiddleware } from 'http-proxy-middleware';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const router = express.Router();

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



// Custom route for /api/sch/payments
router.post('/', (req, res) => {
  // Handle POST requests to /api/sch/payments
  // You can access request body parameters using req.body
  console.log('Received payment data:', req.body);
  res.json({ status: 'success', message: 'Payment received successfully' });
});

// Mount the router to the /api/sch/payments endpoint
app.use('/api/sch/payments', router);



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});