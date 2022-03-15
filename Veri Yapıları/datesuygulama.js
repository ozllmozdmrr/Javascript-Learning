// ** Şimdiki tarihin gün ay ve yıl bilgisini yazdırınız.
var day = new Date();

console.log(day);
console.log(day.getMonth());
console.log(day.getDate());
console.log(day.getFullYear());

// ** Tarih ve saat bilgisini içeren bir Date objesi oluşturunuz.
var dayA = new Date('7/21/1994 16:50:02');
var dayB = new Date(2008,9,15,11,20,30);
console.log(dayA);
console.log(dayB);

// 1/1/1990 tarihinden bir öncesini gösteriniz
var dayC = new Date('1/1/1990');
var dayOfMonth = dayC.getDate();
dayC.setDate(dayOfMonth-1);

console.log(dayC);
// iki tarih arasındaki geçen zamanı bulunuz
var start = new Date('10/12/2018');
var end = new Date('3/9/2022');

var milisecond = end - start; // iki tane date objesinin farkını aldığımız zaman sonuç milisecond olarak gelir.
var saniye = milisecond / 1000;
var dakika = saniye / 60;
var saat = dakika / 60;
var gun = saat / 24;
var yıl = gun / 365;

console.log('milisecond : ' +milisecond);
console.log('saniye : ' + saniye);
console.log('dakika : ' + dakika);
console.log('saat : ' +  saat )
console.log('gun : ' + gun)
console.log('yıl : ' + yıl);

// Her yıl mayıs ayını 2.haftası pazar gunu kutlanan anneler günü 2019 yılında ne zaman kutlanmıştır?
var annelerGunu = new Date();
annelerGunu.setHours(0,0,0,0);
annelerGunu.setFullYear(2019);
annelerGunu.setDate(1);
annelerGunu.setMonth(4);

while(annelerGunu.getDay() != 0){
    annelerGunu.setDate(annelerGunu.getDate()+1)
}
annelerGunu.setDate(annelerGunu.getDate()+7)
console.log(annelerGunu)

// ** Yaş hesaplama nasıl yapılır? 
var birthday = new Date('1/13/1996');
var ageDifMs = Date.now() - birthday.getTime();
var ageDate  = new Date(ageDifMs);
console.log(ageDate.getFullYear() - 1976)
// console.log(birthday.getTime());
// console.log(Date.now());

var aylar =["ocak","şubat","mart","nisan","mayıs","haziran","temmuz","ağustos","eylül","ekim","kasım","aralık"];
var tarih = new Date('2/12/2029')
alert (aylar[tarih.getMonth()]); //seçtiğiniz ay çıkar 