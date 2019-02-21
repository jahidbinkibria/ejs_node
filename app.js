const fs = require('fs');

//read a file
const readme = fs.readFileSync('./readme.txt', 'utf-8');

//write to a file
fs.writeFileSync('writeme.txt', readme);

//async
fs.readFile('./readme.txt', 'utf-8' , (e, data) => {
    console.log(data);
});
fs.writeFileSync('writemte.txt', readme);