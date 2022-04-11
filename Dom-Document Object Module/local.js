// LOCAL STORAGE
let val ;
// set item   *** Bir eleman atarken ***

const firstName = localStorage.setItem('firstName','Ozlem');
// Burada elemana ulaşmak için bir değişken tanımlıyoruz , değişkenle değişken içerisine atacağımız bilgiyi , ikinci parametrede value kısmını belirtiyoruz.
const lastName = localStorage.setItem('lastName','Ozdemir');

// get item   *** eleman almak ***
val = localStorage.getItem('firstName');
val = localStorage.getItem('lastName')

// remove item  *** Silme ***
// localStorage.removeItem('firstName');

console.log(val)
console.log(localStorage);