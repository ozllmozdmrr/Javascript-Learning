// LOCAL STORAGE
let val ;
// set item   *** Bir eleman atarken ***

const firstName = localStorage.setItem('firstName','Ozlem');
// Burada elemana ulaşmak için bir değişken tanımlıyoruz , değişkenle değişken içerisine atacağımız bilgiyi , ikinci parametrede value kısmını belirtiyoruz.
const lastName = localStorage.setItem('lastName','Ozdemir');
let hobies = ['oyun','sinema'];



// get item   *** eleman almak ***
/* setItem()  storage yapısında tarayıcıya bir veri eklemek için "setItem(değişken ,değer)" fonksiyonu kullanılır.
Eklediğiniz bu storage elemanlarını tarayıcımızın developer tools kısmında APPLİCATİON sekmesinde görebiliriz.*/

val = localStorage.getItem('firstName');
val = localStorage.getItem('lastName');

// remove item  *** Silme ***
// localStorage.removeItem('firstName');

// clear
// localStorage.clear();

// // set array to storage 
// localStorage.setItem('hobies', hobies);
localStorage.setItem('hobies',JSON.stringify(hobies));  // JSON.stringify metodu ile bunu bir obje olarak alırız. 
// BU bilgiyi geri almak istediğimiz de 

val = JSON.parse(localStorage.getItem('hobies'));

console.log(val)
console.log(localStorage);