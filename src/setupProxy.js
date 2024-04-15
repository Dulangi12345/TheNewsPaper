import express from 'express';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { createProxyMiddleware } from 'http-proxy-middleware';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();

const apiProxy = createProxyMiddleware({
  target: 'https://secure.myfees.lk',
  changeOrigin: true,
  pathRewrite: {
    '^/api': '', 
  },
});

app.use(express.static(join(__dirname, 'dist')));

app.use('/api', apiProxy);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
