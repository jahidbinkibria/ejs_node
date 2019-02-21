const http = require('http');

const server = http.createServer( (req, res) => {
    console.log("Request was made. " + req.url);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hey ninjas');
});
server.listen(3000, '127.0.0.1');
console.log("yo dawgs, now listining to port 3000");