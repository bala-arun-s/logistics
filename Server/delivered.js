module.exports = function(app,mongoDbUrl, MongoClient, ObjectId){
    app.post('/delivered',(req,res) => {
        var delId = req.body;
        var userId = delId[0];
        var itemId = delId[1];
        console.log(userId,itemId);

        MongoClient.connect(mongoDbUrl, { useUnifiedTopology: true }, (err, db) => {
            if (err) { console.log('mongoDb server not conected',err) }
            console.log("mongoDb connected successfully to server for update");
            var dbName = db.db('LOGISTICS');

            
            dbName.collection("itemList").updateOne({_id:ObjectId(itemId)}, {$set:{status:"Delivered"}}, function(err, res) {
                if (err) throw err;
                console.log("1 document updated");
                db.close();
              });
        });

    });
}