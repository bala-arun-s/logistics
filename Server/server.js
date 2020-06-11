const express = require('express');
const bodyParser=require('body-parser');

const app=express()

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:8100"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.post('/login',(req,res)=>{
    var userId = req.body.userId;
    var passWord = req.body.passWord;
    var authentication ='User '
    if(userId === 'Arun' && passWord === '123456'){
        authentication = authentication + 'Found';
    } else {
        authentication = authentication + 'Not Found';
    }
    res.send(JSON.stringify(authentication));
    console.log(userId,passWord,authentication)
  });  
app.listen(8200)