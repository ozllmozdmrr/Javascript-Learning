
// Değişkenler

var age;
console.log(age);

age = 22;
console.log(age)

/* Tanımlamış olduğumuz değişkenlerin içeresine attığımız değerlere
göre tip tanımlaması yapılıyor */

var fullname = 'Ozlem Ozdemir'
console.log(fullname)

fullname = 'Yigit Erbil'
console.log(fullname)

/* Tanımlamış olduğumuz değişken içerisinde farklı bir değer atadığımız da eski değer silinir ve 
yeni değer değişkenin içine atanır . */

// DĞEİŞKEN TANIMALAMA KURALLARI 

// Sayısal ifade başlayamaz 

// var 1yas  ---> yanlış 
   var yas1 ;
   var _yas2;
   var $yas3 = 24;
   console.log($yas3)

// Komut isimleriyle tanımlama yapılmaz. 
// Birden fazla kelime 
 
var ad = 'Ozlem'
var soyad = 'Ozdemir'
//----------------------//

var ad_soyad = 'Ozlem Ozdemir1'
var adSoyad= 'Ozlem Ozdemir2'
console.log(ad_soyad)
console.log(adSoyad)
//----------------------//

// CASE SENSITIVE (büyük küçük harf duyarlı )

var fırstName = 'Yigit'
var FırstName = 'Ece'
console.log(fırstName)
console.log(FırstName)


// var , let , const

// "var" ile tanınmladığımız bütün değişkenleri "let" le tanımlayabiliriz 

let city = 'Eskişehir'
console.log(city)

const email = 'abc@gmail.com'
console.log(email)

/* Tanımladığımız bir değişkenin içerisine bir değer atadığımız ve bu değerin hiç bir zaman 
değişmesini istemiyorsanız bu değeri const ile tanımlamanız gerekiyor.*/