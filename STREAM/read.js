const fs = require('fs');

// ENCODINGS:
// ascii, utf-8, utf-16, hex, binary
var stream = fs.createReadStream('./video.mp4', 'binary');

stream.on('data', function (data) {
    console.log(data.toString());
});