const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://secure.myfees.lk/api/sch/payments',
      changeOrigin: true,
    }),
  )
}
