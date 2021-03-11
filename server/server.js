const express = require('express');
var cors = require('cors')
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();

app.use(cors()); //the api doesnt use cors hence needed to create proxy and install cors

app.use('*', createProxyMiddleware({ 
    target: 'https://www.metaweather.com/',
    headers: {
        "Access-Control-Allow-Origin" : "*",
        "accept" : "application/json",
        "method" : "GET",
    },
    changeOrigin: true
}));
app.listen(8080);