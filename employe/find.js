var connectionstring = "mongodb+srv://admin:nodejs@cluster0.n1tz0mb.mongodb.net/?retryWrites=true&w=majority";
          var MongoClient = require("mongodb").MongoClient;
          
          MongoClient.connect(connectionstring,{useNewUrlParser : true},function(err,db){
              if (err) throw err
              var dbo = db.db("veritabanim");
              dbo.collection("musteriler").find({}).toArray(function(err,sonuc){
                  if (err) throw err;
                  console.log(sonuc);
                  db.close();
                  }); 
                });