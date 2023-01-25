var connectionstring = "mongodb+srv://admin:(password)@cluster0.n1tz0mb.mongodb.net/?retryWrites=true&w=majority";
          var MongoClient = require("mongodb").MongoClient;
          
          MongoClient.connect(connectionstring,{useNewUrlParser : true},function(err,db){
              if (err) throw err
              var dbo = db.db("veritabanim");
              dbo.collection("schools").find({}).toArray(function(err,sonuc){
                  if (err) throw err;
                  console.log(sonuc);
                  }); 
                  dbo.collection("classes").find({}).toArray(function(err,sonuc2){
                    if (err) throw err;
                    console.log(sonuc2);
                    }); 
                    dbo.collection("students").find({}).toArray(function(err,sonuc3){
                      if (err) throw err;
                      console.log(sonuc3);
                      db.close();
                      }); 
                      
                });