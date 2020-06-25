//
var http = require('http')

var server = http.createServer(function(req, res){

    res.write('<html><body><h1>ileri programlama final</h1></body></html>');

    res.end('mesaj bitti');
});
server.listen(8000);
