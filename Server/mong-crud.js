const {MongoClient, ObjectId} = require('mongodb');
const url = "mongodb://localhost:27017/";

MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
    if (err) { console.log('mongoDb server not conected',err) }

    console.log("mongoDb connected successfully to server");
    var db = client.db('LOGISTICS');
    // db.collection('userAuthData').insertOne({
    //     name: 'ram', age: 20
    // }).then((result) => { console.log(result.insertedId) });
    

    // db.collection("userAuthData").find({userId: 'Bala'}, function(err, result) {
    //     if (err) throw err;
    //     console.log(result);
    //     client.close();
    //   });

    db.collection("userAuthData").find(ObjectId("5ee994a337f0fc3788314567")).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        client.close();
    });
});