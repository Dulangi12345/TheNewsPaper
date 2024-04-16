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

app.use(bodyParser.json());

app.use(cors());


app.post('/api/sch/payments', (req, res) => {
  fetch('https://dummy.restapiexample.com/api/v1/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(req.body),
  })
  .then(response => response.json())
  .then(data => {
    
    res.json(data);
  })
  .catch(error => {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  });
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
