const readline = require("readline");
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
}); 
var durum
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
          r1.question("Kayıtları Görmek İstiyormusunuz? (Evet/Hayır)", function(grntl) {
            var gorntdurumu =`${grntl}`.toUpperCase()
          if(gorntdurumu=="EVET")
             {
             durum = "table" 
             let employe = require('./employe/index')
             employe.table(durum)
              r1.close()
            }
              else
              r1.close();
        });
      }
  });