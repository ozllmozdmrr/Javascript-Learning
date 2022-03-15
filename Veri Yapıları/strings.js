// Strings

const firstName = 'Ozlem';
const lastName = "Ozdemir";
const age = 22; 
let hobbies = ' sinema,spor,kitap'
let val;

// string concatenation

val = firstName +' '+ lastName;
val = 'Ozlem';
val += ' Ozdemir'; 

val = 'Benim adım '+firstName+' '+ lastName+ ' ve yaşım '+ age + " Eskişehir'de yaşıyorum"; 
// '' Tek tırnak işaretleri ve ""çift tırnak işaretleri JavaScript'te tam olarak aynı şekilde davranır .

// ---- string concat ----
val = firstName.concat(' ',age);
// concat() metodu iki veya daha fazla metinsel ifadeyi birleştirmek için kullanılır. 

// string length // kaç karakterli olduğunu belirtir.
// val = val.length;

// string uppercase - lowecase 
val = val.toUpperCase(); // Büyük harfler ile yazar
val = val.toLowerCase(); // Küçük harflerle yazar

val = val.indexOf('e'); // indexOf() metodu, bir dizide verilen değeri arar ve ilk eşleşmeyi sağlayan elemanın index değerini verir.

val = hobbies.split(',') //split() metodu verilen bir stringi(metin) diziye dönüştürür ve bu diziyi döndürür.


console.log(val);
console.log(typeof val);