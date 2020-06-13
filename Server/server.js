const express = require('express');
const bodyParser = require('body-parser');
const app=express()
const fs = require('fs');


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:8100"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

require('./logIn')(app,fs);
require('./signup')(app,fs);

var server = app.listen(8200)