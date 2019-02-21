const http = require('http');
const fs = require('fs');

const myReadStream = fs.createReadStream(`${__dirname}/readme.txt`, 'utf-8');
const myWriteStream = fs.createWriteStream(__dirname+'/writeme.txt');

myReadStream.on('data' , chunk => {
    console.log("new chunk recived");
    myWriteStream.write(chunk);
});






// const server = http.createServer( (req, res) => {
//     console.log("Request was made. " + req.url);
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.end('Hey ninjas');
// });
// server.listen(3000, '127.0.0.1');
// console.log("yo dawgs, now listining to port 3000");