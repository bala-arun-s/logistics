module.exports = function(app,mongoDbUrl, MongoClient, ObjectId){
    app.post('/signup',(req,res) => {
        var userSignUpInput = req.body;
        console.log(userSignUpInput);
        MongoClient.connect(mongoDbUrl, { useUnifiedTopology: true }, (err, db) => {
            if (err) { console.log('mongoDb server not conected',err) }
        
            console.log("mongoDb connected successfully to server for signup");
            var dbName = db.db('LOGISTICS');
            
            dbName.collection("userAuthData").insertOne(userSignUpInput, function(err, result) {
                if (err) throw err;
                console.log("1 document inserted",result.ops[0]);
                res.send(result.ops[0]);
                db.close();
              })

            

            /*dbName.collection("userAuthData").find(userLoginInput,{ projection: { _id: 1, userName: 1, gMail: 1, mobileNo: 1,userType: 1}}).toArray(function(err, result) {
                if (err) throw err;
                console.log(result[0]);
                res.send(result[0]);
                db.close(); */
            });
});

   /* app.post('/signup',(req,res) => {
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
    })*/
}