 var sentence = "Frontend ve Backend Programcıları Neler Yapar? Frontend: Frontend'in Türkçe karşılığı “Önyüz”dür. Yapılma aşamasındaki bir web sitesinin ön yüzünü (client-side) HTML, CSS ve JavaScript gibi teknolojileri kullanarak web sitesinin görsel tarafını oluşturan kişilere ise front-end developer ( Ön yüz geliştirici ) denir.";

var url = "https://www.linkedin.com/in/özlem-özdemir/ Ozlem Ozdemir profil hesabı";

// cümle kaç karakterlidir?
console.log(sentence.length); // 317

// kaç kelimeden oluşuyor?
console.log(sentence.trim().split(' ').length); // 41

// tüm cümleyi küçük harfe çevirin
console.log(sentence.toLowerCase());

// cümlenin başındaki ve sonundaki boşlukları siliniz.
console.log(sentence.trim());  //trim() metodu ile karakter dizisinin başındaki ve sonundaki boşluk karakterlerini sileriz.

// '-' karakterini silin.
console.log(sentence.replace('-',''));
//url'nin içinden str kısmını çıkarınız.

var str = 'http://';
//console.log(url.substr(str.length)); //substr(), slice() ve substring() gibi string parçalama işlemlerinde kullanılır ancak diğer metotlardan farkı ikinci parametre başlangıçtan itibaren alınacak karakter sayısını temsil eder.
console.log(url.slice(str.length));

// Url hangi protocol'u kullanmaktadır ? (http,https)
console.log(url.startsWith('http'));
console.log(url.startsWith('https'));

// url, '.com' ifadesini içeriyor mu?
console.log(url.indexOf('.com'));
console.log(url.includes('.com'));

