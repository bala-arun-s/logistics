var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var server = app.listen(8081 ,function () {
    var host =server.address().address
    var post = server.address().port
    console.log("Example app listening at http://%s:%s",host,post); 
})

app.get('/up/:name/:password', function(req,res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    var name = req.params.name;
    var pass = req.params.password;
    var output;
    console.log( name );
    console.log( pass );
    if(name == 'Arun' && pass == '123456'){
        output = name + " user found";
    } else {
        output = name + " user not found";
    }
    res.end(JSON.stringify(output));
});