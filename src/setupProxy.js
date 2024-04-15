import express from 'express';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser'; 
import cors from 'cors';
import axios from 'axios'; // Import axios
import { createProxyMiddleware } from 'http-proxy-middleware';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();

app.use(express.static(join(__dirname, 'dist')));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors({
  origin: 'https://www.thecatalyst.lk'
}));

app.use('/api/sch/payments', createProxyMiddleware({
  target: 'https://secure.myfees.lk',
  changeOrigin: true,
  pathRewrite: {
    '^/api/sch/payments': '/api/sch/payments' 
  },
  onError: (err, req, res) => {
    console.error('Proxy error:', err);
    res.status(500).send('Proxy error');
  }
}));

app.post('/api/sch/payments', async (req, res) => {
  const formData = req.body;

  try {
    const response = await axios.post('https://secure.myfees.lk/api/sch/payments', formData, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    });
    console.log(response.data);
    res.json(response.data);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Error sending data to external API');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
