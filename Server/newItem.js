module.exports = function(app,mongoDbUrl, MongoClient, ObjectId){
    itemNo=5;
    app.post('/newItem',(req,res) => {
        var newItem = req.body;
        console.log(newItem,{"gMail":newItem[1].reciverGmail});

        MongoClient.connect(mongoDbUrl, { useUnifiedTopology: true }, (err, db) => {
            if (err) { console.log('mongoDb server not conected',err) }

            console.log("mongoDb connected successfully to server for new item");
            var dbName = db.db('LOGISTICS');

            dbName.collection("userAuthData").find({"gMail":newItem[1].reciverGmail}).toArray(function(err, result) {
                if (err) throw err;
                var tap=result.userName;
                console.log(result,/*JSON.parse(JSON.stringify(result)),*/tap);
    //var temp = JSON.stringify(ObjectId(result._id))JSON.stringify(result)._id;

            });
            //var newInput={"itemNo":itemNo,"sender":ObjectId(newItem[0]),"reciver":ObjectId(result._id),"senderAddress":newItem[1].senderAddress,"reciverAddress":newItem[1].reciverAddress,"serviceProvider":newItem[1].serviceProviders}
           // console.log(newInput);
        //     //db.collection('itemList').insertOne(newItem).then((result) => { console.log(result.insertedId) });
    

        });
        res.send(JSON.stringify('newItem Done'));
    })
}