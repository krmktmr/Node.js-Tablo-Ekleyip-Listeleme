
const readline = require("readline");
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

  r1.question("Kayıt Eklemek İstiyormusunuz? (Evet/Hayır)", function(regstr) {

       var eklemedurumu =`${regstr}`.toUpperCase()
       if(eklemedurumu=="EVET")
       {
          r1.question("Adı ? ", function(ad) {
            r1.question("Memleketi ? ", function(memleket) {
                let employe = require('./employe/index')
                employe.ekle(`${ad}`,`${memleket}`)
                r1.close();
            });
          });
        }
        else
        {
          var connectionstring = "mongodb+srv://admin:nodejs@cluster0.n1tz0mb.mongodb.net/?retryWrites=true&w=majority";
          var MongoClient = require("mongodb").MongoClient;
          
          MongoClient.connect(connectionstring,{useNewUrlParser : true},function(err,db){
              if (err) throw err;
              var dbo = db.db("veritabanim");
              dbo.collection("musteriler").find({}).toArray(function(err,sonuc){
                  if (err) throw err;
                  console.log(sonuc);
                  db.close();
              });
          });

          r1.close();
        }
  });





