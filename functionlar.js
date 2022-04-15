function insan(cinsi,yas,boyu,sac_renk){
    this.cinsi=cinsi,
    this.yas=yas,
    this.boyu=boyu,
    this.sac_renk=sac_renk
}

var kullan = new insan("Erkek",26,1.83,"Sarı");   // Fonsiyon kullanımı objectler
var kullan2 = new insan("Kadın",25,1.50,"Siyah");
console.log(kullan);
console.log(kullan2);
console.log(insan)




var gunler = ["Pazar","pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
var d = new Date();
var gun = d.getDay();
console.log(gun)
console.log(gunler[gun])


