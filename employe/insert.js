let ekle = function(ad,yas,sinif) {
    const mongoose = require('mongoose');
    const ObjectId = mongoose.Types.ObjectId;
    const stringId = `${sinif}`;
    const objectId = new ObjectId(stringId);
    var veri = {name : `${ad}`, age : `${yas}`,class: objectId};
    console.log(veri)
    var connectionstring = "mongodb+srv://admin:nodejs@cluster0.n1tz0mb.mongodb.net/?retryWrites=true&w=majority";
    var MongoClient = require("mongodb").MongoClient;
    MongoClient.connect(connectionstring,{useNewUrlParser : true},function(err,db){
        if (err) throw err
        var dbo = db.db("veritabanim")
        dbo.collection("students").insertOne(veri, function(err){
            if (err) throw err
            console.log("Veri eklendi!")
            db.close();
        })
   });
    
}

module.exports = ekle