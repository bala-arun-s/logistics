module.exports = function(app,mongoDbUrl, MongoClient, ObjectId){
    itemNo=1230;
    app.post('/newItem',(req,res) => {
        var newItem = req.body;
        console.log(newItem,{"gMail":newItem[1].reciverGmail});

        MongoClient.connect(mongoDbUrl, { useUnifiedTopology: true }, (err, db) => {
            if (err) { console.log('mongoDb server not conected',err) }

            console.log("mongoDb connected successfully to server for new item");
            var dbName = db.db('LOGISTICS');

            dbName.collection("itemList").find({}).count(function (err, res) {
                if (err) throw err;
                this.itemNo = res+1;
                console.log("new item no",this.itemNo);
            });

            var tap;
            var newInput;

            dbName.collection("userAuthData").find({"gMail":newItem[1].reciverGmail}).toArray(function(err, result) {
                if (err) throw err;
                tap=result[0]._id;
                console.log(result,tap);
                newInput = {"itemNo":itemNo,"sender":ObjectId(newItem[0]),"reciver":tap,"senderAddress":newItem[1].senderAddress,"reciverAddress":newItem[1].reciverAddress,"serviceProvider":newItem[1].serviceProviders,"status":"not Delivered"}
                console.log(newInput);
                dbName.collection('itemList').insertOne(newInput).then((result) => { console.log("new item from db",result.ops) });
            });

        });
        res.send(JSON.stringify('newItem Done'));
    })
}