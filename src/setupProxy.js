const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function addProxyMiddleware(app) {
  app.use(
    '/api/sch/payments',
    createProxyMiddleware({
      target: 'https://secure.myfees.lk',
      changeOrigin: true,
      headers: {
        'Content-Type': 'application/json',
        'access-control-allow-origin': '*',

      }
    }),
  );
};
