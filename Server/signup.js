module.exports = function(app,fs){
    app.post('/signup',(req,res) => {
        var newUser = req.body;
        fs.readFile('user.json', function (err, data) {
                var userObj = JSON.parse(data)
                for (let i = 0; i < userObj.length; i++) {
                    if (userObj[i].userId === newUser.userId) {
                        res.send(JSON.stringify('userIdAlreadyExists'));
                        console.log('userIdAlreadyExists');
                        return;
                    }         
                }
                userObj.push(newUser)
                console.log(newUser.userId)
                fs.writeFileSync("user.json", JSON.stringify(userObj))
                res.send(JSON.stringify(userObj[userObj.length-1].userType));
            })
        console.log(newUser);
    })
}