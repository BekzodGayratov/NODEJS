const fs = require('fs');

// ENCODINGS:
// ascii, utf-8, utf-16, hex, binary
var readStream = fs.createReadStream('./video.mp4');
var createStream = fs.createWriteStream('./hello.mp4',);

var recievedchunk;

readStream.on('chunk', function (chunk) {
    recievedchunk += chunk;

});

readStream.on('end', function () {
    createStream.write(recievedchunk);
});


