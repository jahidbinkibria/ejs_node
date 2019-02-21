const http = require('http');
const fs = require('fs');


const server = http.createServer( (req, res) => {
    console.log("Request was made. " + req.url);
    res.writeHead(200, {'Content-Type': 'text/plain'});

    const myReadStream = fs.createReadStream(`${__dirname}/readme.txt`, 'utf-8');
    const myWriteStream = fs.createWriteStream(__dirname+'/writeme.txt');
    myReadStream.pipe(res);
});
server.listen(3000, '127.0.0.1');
console.log("yo dawgs, now listining to port 3000");