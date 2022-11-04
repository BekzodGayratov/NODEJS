const fs = require('fs');

const content = "HELLLLLLLLLLLLO";

var writeStream = fs.createWriteStream('./output');

writeStream.write(content);

writeStream.on('end', () => {
console.log('Successfully');
});

writeStream.on('error', (err) => {
console.log("Error");
});


