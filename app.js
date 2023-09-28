var http = require('http');

http.createServer(function(req, res){
    res.end("Servidor criado!");
}).listen(8081);

console.log('O servidor foi criado!');