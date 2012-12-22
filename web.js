var port = process.env.PORT || 8080;
var connect = require('connect');
console.log("listening on " + port);

connect.createServer(
    connect.static(__dirname)
).listen(port);
