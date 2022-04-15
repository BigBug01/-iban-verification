var testiban = "TR92 0006 4000 0016 0221 58 88";

const puppeteer = require('puppeteer');

(async () => {
    const url = 'https://www.e-iban.com/';

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  await page.keyboard.type(testiban);
  await page.keyboard.press('Enter');
  
  await page.screenshot({ path: 'example.png' });
  await browser.close();
  
})();

function smellsLikeIban(str){
  return /^([A-Z]{2}[ \-]?[0-9]{2})(?=(?:[ \-]?[A-Z0-9]){9,30}$)((?:[ \-]?[A-Z0-9]{3,5}){2,7})([ \-]?[A-Z0-9]{1,3})?$/.test(str);
 }
 
 function validateIbanChecksum(iban) {       
   const ibanStripped = iban.replace(/[^A-Z0-9]+/gi,'') 
                            .toUpperCase(); 
   const m = ibanStripped.match(/^([A-Z]{2})([0-9]{2})([A-Z0-9]{9,30})$/);
   if(!m) return false;
   
   const numbericed = (m[3] + m[1] + m[2]).replace(/[A-Z]/g,function(ch){
                        
                         return (ch.charCodeAt(0)-55); 
                     });
  
   const mod97 = numbericed.match(/\d{1,7}/g)
                           .reduce(function(total, curr){ return Number(total + curr)%97},'');
 
   return (mod97 === 1);
 };
 
 

 if (smellsLikeIban(testiban) && validateIbanChecksum(testiban)) {
   console.log("İban Kullanılabilir");
   console.log("İban Kontrolleri Tamamlandı");
   
  // İBAN RENDER
 
  var donguesitle = testiban.replaceAll(' ','');
  const hesap = donguesitle.substring(9,26);
  const ulke = donguesitle.substring(0,2);
  const sube = donguesitle.substring(4,9);

  
  const called = async (acc,kod,from) => {
  const call  = `https://www.e-iban.com/banka.php?acc=${acc}&kod=${kod}&ulke=${from}`
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(call);
  await page.screenshot({ path: 'wexample.png' });
  
  
  const [ veri ] = await page.$x('/html/body/text()');
  const text = await veri.getProperty('textContent');
  const textvalue = await text.jsonValue();
  const traver = textvalue.replaceAll(';','\n');
  const scope = [];
  scope.push(traver.trim());
  console.log(scope);

  for(var i = 0; i < 1; i++){
   
    console.log(scope[i].trim());
    console.log(testiban)
  }
  
  await browser.close();
};
called(hesap,sube,ulke); 
  
 } else {
   console.log("İban Hatalıdır !");
 }