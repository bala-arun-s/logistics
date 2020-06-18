module.exports = function(app,mongoDbUrl, MongoClient, ObjectId){

    app.get('/reciver/:id', function(req,res) {
        var id = req.params.id;
        var search = {"reciver":ObjectId(id)};
        console.log(search);

        MongoClient.connect(mongoDbUrl, { useUnifiedTopology: true }, (err, db) => {
            if (err) { console.log('mongoDb server not conected',err) }
        
            console.log("mongoDb connected successfully to server for get reciver");
            var dbName = db.db('LOGISTICS');

            dbName.collection("itemList").find(search).toArray(function(err, result) {
                if (err) throw err;
                console.log(result);
                res.send(result);
                db.close();
            });
        });

    });

    app.get('/sender/:id', function(req,res) {
        var id = req.params.id;
        var search = {"sender":ObjectId(id)};
        console.log(search);

        MongoClient.connect(mongoDbUrl, { useUnifiedTopology: true }, (err, db) => {
            if (err) { console.log('mongoDb server not conected',err) }
        
            console.log("mongoDb connected successfully to server for get sender");
            var dbName = db.db('LOGISTICS');

            dbName.collection("itemList").find(search).toArray(function(err, result) {
                if (err) throw err;
                console.log(result);
                res.send(result);
                db.close();
            });
        });

    });

    app.get('/serviceList/:id', function(req,res) {
        var id = req.params.id;
        var search = {"service provider":ObjectId(id)};
        console.log(search);

        MongoClient.connect(mongoDbUrl, { useUnifiedTopology: true }, (err, db) => {
            if (err) { console.log('mongoDb server not conected',err) }
        
            console.log("mongoDb connected successfully to server for get sender");
            var dbName = db.db('LOGISTICS');

            dbName.collection("itemList").find({"status":"not Delivered"}).toArray(function(err, result) {
                if (err) throw err;
                console.log(result);
                res.send(result);
                db.close();
            });
        });

    });

    app.get('/history/:id', function(req,res) {
        var id = req.params.id;
        var search = {"service provider":ObjectId(id)};
        console.log(search);

        MongoClient.connect(mongoDbUrl, { useUnifiedTopology: true }, (err, db) => {
            if (err) { console.log('mongoDb server not conected',err) }
        
            console.log("mongoDb connected successfully to server for get sender");
            var dbName = db.db('LOGISTICS');

            dbName.collection("itemList").find({"status":"Delivered"}).toArray(function(err, result) {
                if (err) throw err;
                console.log(result);
                res.send(result);
                db.close();
            });
        });

    });
}