const {createProxyMiddleware}  = require('http-proxy-middleware');


const proxy = {
    target : 'https://secure.myfees.lk',
    changeOrigin :true,
}

module.exports = function(app) {
    app.use('/api/sch/payments', createProxyMiddleware(proxy));
}   
