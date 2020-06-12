const express = require('express');
const bodyParser = require('body-parser');
const app=express()
const http = require('http').Server(app);
const fs = require('fs');


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:8100"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

require('./logIn')(app,fs);
app.listen(8200)

/*app.post('/login',(req,res)=>{
    var userId = req.body.userId;
    var passWord = req.body.passWord;
    var authentication;
    if(userId === 'Arun' && passWord === '123456'){
        authentication = 'senderReceiver';
    } else if(userId === 'Bala' && passWord === '654321') {
        authentication = 'serviceProvider';
    } else if(userId === 'Viswa' && passWord === '123456') {
      authentication = 'senderReceiver';
    } else if(userId === 'Sam' && passWord === '654321') {
      authentication = 'serviceProvider';
    } else {
      authentication = 'invalid inputr';
    }
    res.send(JSON.stringify(authentication));
    console.log(userId,passWord,authentication)
  });  */
