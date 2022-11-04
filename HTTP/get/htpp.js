const http = require('http');

var options = {
    host: "jsonplaceholder.typicode.com",
    path: "/users",

};

makeRequest = function (response) {
    var str = '';
    response.on('data', function (chunk) {
        str += chunk;
    });
    response.on('end', function () {
        console.log(str);
    });
};

var req = http.request(options, makeRequest);
req.end();