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


app.use('/api/users', createProxyMiddleware({
  target: 'https://reqres.in/',
  changeOrigin: true,
  pathRewrite: {
    '^/api/users': '/api/users' 
  },
  onError: (err, req, res) => {
    console.error('Proxy error:', err);
    res.status(500).send('Proxy error');
  }
}));

app.post('/api/users', (req, res) => {
  res.json({ success: true });
});

// app.use(cors({
//   origin: 'https://www.thecatalyst.lk',
//   methods: 'POST' // Only allow POST requests
// }));


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
