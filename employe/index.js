let ekle = function(ad,memleket) {
    var veri = {isim : `${ad}`, il : `${memleket}`};
    console.log(veri)
    var connectionstring = "mongodb+srv://admin:nodejs@cluster0.n1tz0mb.mongodb.net/?retryWrites=true&w=majority";
    var MongoClient = require("mongodb").MongoClient;
    MongoClient.connect(connectionstring,{useNewUrlParser : true},function(err,db){
        if (err) throw err;
        var dbo = db.db("veritabanim");
        dbo.collection("musteriler").insertOne(veri , function(err){
            if (err) throw err;
            console.log("Veri eklendi!");
            db.close();
        })
    });
    
}
module.exports = {
    ekle : ekle
}
