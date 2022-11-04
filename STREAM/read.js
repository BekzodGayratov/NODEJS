const fs = require('js');

const chunks = [];

var readStream = fs.readStream();

readStream.on('data',function (chunk){
    chunks.push(chunk);
});