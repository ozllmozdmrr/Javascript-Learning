// Date Object

let d = new Date();  // şuan ki tarih ve saati belirtir ( Wed Mar 09 2022 14:15)
let birthday = new Date(2000,9,29);

console.log(d.getDate());
console.log(d.getMonth());
console.log(d.getFullYear());
console.log(d.getHours());
console.log(typeof d)  // object

console.log(d.getFullYear() - birthday.getFullYear())  // şuan ki yıl ile doğum yılımı çıkardım
console.log(d.getMonth() - birthday.getMonth()) // şuan ki ay ve doğum ayı çıkardık


/*********** GET METHODS ***************/

// .getFullYear() --->Y ılı 4 haneli olarak verir (YYYY)
// .getMonth() ---> Ay bilgisini verir. (0-11)
// .getDate() ---> Gün bilgisini verir. (1-31)
// .getHours() ---> Saat Bilgisini verir. (0-23)
// .getMinutes() ---> Dakika bilgisini verir. (0-59)
// .getSeconds() ---> Saniye bilgisini verir. (0-59)
// .getMilliseconds() ---> Milisaniye bilgisini verir. (0-999)
// .getTime() ---> Tarihi milisaniye olarak verir. (29 Ekim 2000'den itibaren)
// .getDay() ---> Gün değerini belirtir. (0-6)
// Date.now() ---> Zamanı belirtir.


/************ SET METHODS ***************/

// .setDate() ---> Gün değerini atar. (0-31)
// .setFullYear() ---> Yıl değerini atar. ( gün ve ay isteğe bağlı)
// .setHours() ---> Saat değerini atar. (0-23)
// .setMilliseconds() ---> Milisaniye değerini atar. (0-999)
// .setMinutes() ---> Dakika değerini atar. (0-59)
// .setMonth() ---> Ay değerini atar. (0-11)
// .setSeconds() ---> Saniye değerini atar. (0-59)
// .setTime() ---> Tarihi 6 Kasım 1998 'den itibaren milisaniye cinsinden atar.