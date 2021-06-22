const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end('Welcome to our home page')
    }
    else if(req.url === '/about') {
        res.end('Here is our short history')
    } else {
        res.end(`
            <p>Oops, we can't seem to find what you're looking for</p>
            <a href="/">Go back</a>
        `);
    }
});

server.listen(5000);