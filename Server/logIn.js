module.exports = function(app,mongoDbUrl, MongoClient, ObjectId){
    app.post('/login',(req,res) => {
        var userLoginInput = req.body;
        console.log(userLoginInput);

        MongoClient.connect(mongoDbUrl, { useUnifiedTopology: true }, (err, db) => {
            if (err) { console.log('mongoDb server not conected',err) }
        
            console.log("mongoDb connected successfully to server for login");
            var dbName = db.db('LOGISTICS');

            dbName.collection("userAuthData").find(userLoginInput,{ projection: { _id: 1, gMail: 1, mobileNo: 1,userType: 1}}).toArray(function(err, result) {
                if (err) throw err;
                console.log(result[0]);
                res.send(result[0]);
                db.close();
            });
        });


        // fs.readFile('user.json',function(err, data){
        //     if (err) {
        //         console.log(err);
        //         res.send(JSON.stringify('Error on read file'));
        //     }else {
        //         userObj = JSON.parse(data);
        //         for (let i = 0; i < userObj.length; i++) {
        //             if (userObj[i].userId === userId && userObj[i].passWord === passWord) {
        //                 console.log(userObj[i]);
        //                 res.send(JSON.stringify(userObj[i].userType));
        //                 return;
        //             }         
        //         }
        //         console.log("invalid input");
        //         res.send(JSON.stringify('invalidInput'));
        //     }
        // })
    })
}
