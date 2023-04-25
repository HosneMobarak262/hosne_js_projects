var fs=require('fs');
var http=require('http');

var server=http.createServer( function (req, res) {
    if(req.url=="/"){
        let data = fs.readFileSync('default/index.html', 'utf8');
        res.end(data);
    }

});

server.listen(5050);
console.log("Server running successfully.");