const fs = require('fs');

// READ FILE
fs.readFile('./hello.txt', 'utf8', (err, data) => {

    if (err) {
        console.log(err);
        return;
    }
    console.log(data);
});

fs.writeFile