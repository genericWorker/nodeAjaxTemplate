var express = require('express'); 
var app = express(); 
app.get('/string', function(req, res) {
    res. setHeader("Access-Control-Allow-Origin", "*");
    var strings = ["rad", "bla", "ska"]
    var n = Math.floor(Math.random() * strings.length)
    res.send(strings[n])
});

app.listen(3000); 
console.log("server initialized");