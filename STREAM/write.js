const fs = require('fs');

var data = "Assalomu alaykum";

var writeStream = fs.createWriteStream('data.txt');

writeStream.write(data);




