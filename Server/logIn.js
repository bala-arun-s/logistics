module.exports = function(app,fs){
    app.post('/login',(req,res) => {
        var userObj;
        var userId = req.body.userId;
        var passWord = req.body.passWord;
        console.log(userId,passWord);
        fs.readFile('user.json',function(err, data){
            if (err) {
                console.log(err);
                res.send(JSON.stringify('Error on read file'));
            }else {
                userObj = JSON.parse(data);
                for (let i = 0; i < userObj.length; i++) {
                    if (userObj[i].userId === userId && userObj[i].passWord === passWord) {
                        console.log(userObj[i]);
                        res.send(JSON.stringify(userObj[i].userType));
                        return;
                    }         
                }
                console.log("invalid input");
                res.send(JSON.stringify('invalid input'));
            }
        })
    })
}
