let ekle = function(ad,memleket) {
    var veri = {isim : `${ad}`, il : `${memleket}`}
    console.log(veri)
    var connectionstring = "mongodb+srv://admin:nodejs@cluster0.n1tz0mb.mongodb.net/?retryWrites=true&w=majority";
    var MongoClient = require("mongodb").MongoClient;
    MongoClient.connect(connectionstring,{useNewUrlParser : true},function(err,db){
        if (err) throw err
        var dbo = db.db("veritabanim")
        dbo.collection("musteriler").insertOne(veri , function(err){
            if (err) throw err
            console.log("Veri eklendi!")
            db.close();
            const readline = require("readline");
            const r1 = readline.createInterface({
              input: process.stdin,
              output: process.stdout
            }); 
            r1.question("Başka İşlem Yapmak İstiyormusunuz? (Evet/Hayır)", function(drm) {
                var durum =`${drm}`.toUpperCase()
              if(durum=="EVET")
                 {
                  require('./app.js')
                  r1.close()
                }
                else
                r1.close()
            });
            
        })
    });
    
}

module.exports = ekle