module.exports = function(app,mongoDbUrl, MongoClient, ObjectId){
    app.post('/delivered',(req,res) => {
        var delId = req.body;
        var userId = delId[0];
        var itemId = delId[1];
        console.log(userId,itemId);
    });
}