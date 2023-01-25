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
        r1.question("Adı SoyAdı ? ", function(ad) {
          r1.question("Yaşı ? ", function(yas) {
            r1.question("Sınıfı ? ", function(sinif) {
              let employe = require('./employe/index')
              employe.ekle(`${ad}`,`${yas}`,`${sinif}`)
              r1.close();
            });
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