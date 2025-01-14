const http = require('http');

const hostname = '127.0.0.1';
const port = '3000';

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end("Hello ice Tea Backend serriour with Hitesh.");
})

server.listen(port, hostname, () => {
    console.log(`server is running at http://${hostname}:${port}`);
    
})

// server.listen(port, hostname)