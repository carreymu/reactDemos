const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        createProxyMiddleware('/api1' ,{
            target:'http://localhost:5000',
            /*
            When changeOrigin is set to true, the Host header received by the server will be 127.0.0.1:5000 (i.e., the host of the proxy address).
            When changeOrigin is set to false, the Host header received by the server will be localhost:3000 (i.e., the host of the local site).
             - The default value of changeOrigin is false.
             - However, it is generally recommended to set changeOrigin to true and adjust it based on specific requirements.
            */
            changeOrigin: true,
            pathRewrite: {'^/api1' : ''}
        }),
        createProxyMiddleware('/api2', {
            target: 'http://localhost:5001',
            changeOrigin: true, 
            pathRewrite: {'^/api2': ''}
        })
    )
}