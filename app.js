var fs = require('fs');

//create directory
   //fs.mkdirSync('stuff');

//remove directory
    //fs.rmdirSync('stuff');

//asyn
fs.mkdirSync('stuffs',() => {
    fs.readFile('readme.txt', 'utf-8', (err, data) => {
        fs.writeFile('./stuffs/write.txt', data);
    });
});