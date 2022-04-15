var arabalar = ["Bmw","Panamera","Brodway","Şahin","Kartal"];

var result = arabalar.length; // İndex sayısını gösterir.
console.log(result);

var ekle = ["Porche"]

var result = arabalar.concat(ekle); // Concat array veri tipine string ekler
console.log(result)

var result = arabalar.constructor(); // Gelen Veri tipini gösteririr - array - string - obj
console.log(" constructor ", result)

var result = arabalar.copyWithin(0,0); // Elemanları Hedeflenen kısım dışında kalanlarını kopyalar.
console.log(" copyWithin" , result)

var result = arabalar.entries();
console.log(" Entries " , result)  // Entries elemanların index numalarını ve valuesini verir. 
for (let [index,value] of result){
    console.log(index,value);
}


console.log(result)
function goster (deger){
    return deger == "Bmw";  // Every Değer mevcutsa true değilse false döner ( boolean )
}
console.log(arabalar.every(goster))


var result = arabalar.fill("Şahin",1,3) // Fill methodu fill("Değer" , başlangç , bitiş) şeklinde ilerler ve arrayda değerleri sabit değer olarak tanımlar.
console.log(result)

var result = arabalar.filter(e=>{
    return e == "Bmw";   // Filter Array içerisinde basitçe veri filtreler ve veriyi getirir. Katagori oluştururken işimize yarar.
})
console.log(result)

var result = arabalar.find(e=>{ // Array İçerisinde arama yapar.
    return e == "Şahin";
})
console.log(result)

var result = arabalar.findIndex(e=>{ // Array içerisinde başlangıçtan başlar ve istenileni bulur ve index sayısını verir.
    return e == "Şahin";
})
console.log(result)

var result = arabalar.forEach(e=>{ // Elemanları Sıralar, Foor Loop 
    console.log(e)
})
var result = arabalar.forEach((index,value)=>{
    console.log("Foreach Kt" , value,index)
})

var veri = `İstanbul , Ankara, Ordu`;
var result = Array.from(veri);   // Verileri tek tek parçalar ve array formatına taşır.
console.log(result)

var sor = "Bmw";
var result = arabalar.includes(sor,0); // Array İçerisinde var mı yok mu ( t / f olarak) sorgular. İncludex("Aranan" veri, 2 indexde mevcut mu )
console.log(result) 


console.log(arabalar.indexOf("Şahin")) // İndex numarasını bulur ve verir bulamaz ise -1 döner


var result = Array.isArray(arabalar); // Array değerinin array olup olmadığını kontrol etmemize yarar, gelen data array midir !
console.log(result)

var result = arabalar.join(" \n "); // Join methodu array liste tipini arrayden dışarı çıkartır ve stringe çevirir. bunun dışında metinselde
console.log(result)                 // , - gibi itemleri değiştirebiliriz. join(" * ") gibi 


var say = arabalar.keys()
for(let x of say){     // Keys method arrayın index sayılarını verir.
    console.log("KEYS",x)
}

var result = arabalar.lastIndexOf("Kartal"); // LastIndexOf methodu geriden arama yapar ve değeri bulur index sayısını verir.
console.log(result)

var result = arabalar.map((index,value)=>{ // Map Methodu for gibi listeleri sıralar ve işlem sağlıyor çarpma vb.
   console.log("MAP ",value,index) // return sonrası consol edemeyiz işlem sonu return önce consol etmeliyiz. İndex value alabiliyoruz.
})

var result = arabalar.pop(); // Sondan değeri siler sadece
console.log(result)
console.log(arabalar)



var result = arabalar.push("Kartal"); // Push methodu arrayın sonuna obje string deger ekler
console.log(result)
console.log(arabalar)

var sayi = [1,2,3,5,20,60,80,60]
var result = sayi.reduce((toplam,simdiki,kendisi)=>{ // Array içerisinde ki işlemleri toplamaya yarar
    console.log("Toplam ",toplam)
    console.log("Simdiki ",simdiki)
    console.log("Kendisi",kendisi)
    return toplam = toplam + simdiki;
})
console.log(result)


var result = arabalar.reduce((toplam,simdiki)=>{  // Array veri tipinde string değeleri liste dışına append eder taşır.
    return toplam += " DSD " + simdiki;
})
console.log(result)


var result = arabalar.unshift("Pagani"); // Array veri tipine liste başına veriyi ekler.
console.log(arabalar)

var result= arabalar.reduceRight((toplam,simdiki)=>{ // Sağdan reduce işlemi yapar.
    return toplam += " " + simdiki;
})
console.log(result)

var result = arabalar;
console.log(typeof(result))
console.log(result)

var result = arabalar.reverse(); // Reverse methodu arrayı tersine çevirir.
console.log(result)

var result = arabalar.shift();  // Shift methodu array listesinin başındaki değeri siler.
console.log(result, "\n", arabalar)

var result = arabalar.slice(0,2); // Slice methodu seçili bölümü alır ve copy eder. İndex değerine göre kopyalar.
console.log(result);

var result = arabalar.some(y=>{  // Some methodu fonksiyon aracılığı ile array içerisini kontrol eder ve boolen değeri döner.
    return y == "Bmw";
});
console.log(result)

var result = sayi.sort((a,b)=>{  // String değeri a dan z ye sıralar sayısal değerlerde fonksiyon gereklidir.
    return  a-b ;
});
console.log(result)

var result = arabalar.splice(1,0,"Bugatti") // BU işlem index seç , sil , ekle şeklinde arraya eleman ekler.
console.log(arabalar)

var result = arabalar.toString(); // Arrayı stringe çevirir
console.log(result)

var saydir = [1,2,[3,4],[5,6]]; // Flat methodu iç içe arrayları çözümler ve tek bir array model haline getirir.
var result = saydir.flat();
console.log(result)
