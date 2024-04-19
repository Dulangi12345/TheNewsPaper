import express from 'express';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser'; 
import cors from 'cors';
import { createProxyMiddleware } from 'http-proxy-middleware';
import axios from 'axios';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const router = express.Router();

app.use(cors(
  {
    origin: 'https://www.thecatalyst.lk',
    methods : 'GET,POST',
    allowedHeaders: 'Content-Type,Authorization',
  }
));

app.use(express.static(join(__dirname, 'dist')));

app.use(bodyParser.urlencoded({ extended: true }));


app.use('/', createProxyMiddleware({
  target: 'https://secure.myfees.lk/api/sch/payments',
  changeOrigin: true,
  pathRewrite: {
    '^/api/sch/payments': '/'
  },

  onError: (err, req, res) => {
    console.error('Proxy error:', err);
    res.status(500).send('Proxy error');
  }
}));




router.post('/', async (req, res) => {
  try {
    const response  = await axios.post('https://secure.myfees.lk/api/sch/payments', req.body);
    res.json(response.data);
    console.log(response.data);
    
  } catch (error) {
    console.error(error); 
    res.status(500).send('Internal Server Error');  
  }
});

app.use('/api/sch/payments', router);



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});