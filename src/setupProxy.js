// // import express from 'express';
// // import { dirname, join } from 'path';
// // import { fileURLToPath } from 'url';
// import bodyParser from 'body-parser'; 
// // import cors from 'cors';
// // import { createProxyMiddleware } from 'http-proxy-middleware';
// // const __dirname = dirname(fileURLToPath(import.meta.url));
// // const app = express();
// // const router = express.Router();


// // app.use(cors(
// //   {
// //     origin: 'https://www.thecatalyst.lk',
// //     methods : 'GET,POST',
// //     allowedHeaders: 'Content-Type,Authorization',
// //   }
// // ));

// // app.use(express.static(join(__dirname, 'dist')));


 
// // app.use(function(req, res, next) {
// //   res.header('Access-Control-Allow-Origin', '*');
// //   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
// //   next();
// // });


// // app.use('/api', createProxyMiddleware({
// //   target: 'https://secure.myfees.lk/api/sch/payments',
// //   changeOrigin: true,
// //   pathRewrite: {
// //     '^/api': ''
// //   },

// //   onError: (err, req, res) => {
// //     console.error('Proxy error:', err);
// //     res.status(500).send('Proxy error');
// //   }
// // }));


// // const PORT = process.env.PORT || 3000;
// // app.listen(PORT, () => {
// //   console.log(`Server is running on port ${PORT}`);
// // });




// import express from 'express';

// const app = express();
// const PORT = process.env.PORT || 3000;

// app.use(bodyParser.urlencoded({ extended: true }));
// app.post('/api/register', (req, res) => {
//   console.log(req.body);
//   res.json({ message: 'Received' , data : req.body});
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// }
// );
