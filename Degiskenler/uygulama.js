// Bir müşterinin aşağıdaki bilgileri için değişken oluşturunuz.

// ** Müşteri Adı
// ** Müşteri Soyadı
// ** Müşteri tc kimlik
// ** Müşteri Sipariş Toplamı
// ** Müşteri Cinsiyet
// ** Müşteri Adres Bilgisi
// ** Müşteri hobileri

var customerName = 'Ozlem';
var customerLastname = 'Ozdemir';
// var fullName = 'Ozlem Ozdemir'; 
var customeriId = '25896314785';
var total = 285.5;
var gender = true; // true kadın , false erkek

// Object
var Address = {
    city : 'Ankara',
    district : 'Çankaya',
    body : 'Osmanağa mah. No:6'
};
// Array
var hobbies = ['Kitap','Sinema','Oyun','Spor'] ;

// ** Aşağıdaki siparişlerin toplamını hesaplayınız.

var order1 = Number('300');   // '300' & '100' durumunda bize string olarak yan yana toplanmıs olarak gelir 300100. Number('300) & Number('100') Sayısal değerlerin cevrilmiş halini alırız ve toplanır 400.
var order2 = Number('100');

var totelOrder = order1 + order2;
console.log(totelOrder);  

// ** Aşağıdaki siparişlerim toplamını tam sayı olarak hesaplayınız.

var order3 = Number('100.2');
var order4 = Number('140.5');
var totelOrder2 = order3 + order4 ;

console.log(totelOrder2);

// ** Aşağıdaki siparişlerin toplamını tam sayı olarak hesaplayınız.

var order5 = parseInt('100.2');
var order6 = parseInt('150.5');

var totelOrder3 = order5 + order6;
console.log(totelOrder3);

// ** Aşağıdaki verilen doğum yılına göre yaş hesaplayınız.

var yearOfBirth = 2000;
console.log(new Date().getFullYear()-yearOfBirth)

// ** Aşağıdaki string ifadenin karakter sayısını bulunuz.

let learning = 'JavaScript Notları';
console.log(learning.length);   // 18
