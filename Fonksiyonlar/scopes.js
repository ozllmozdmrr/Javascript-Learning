//Scopes 
/* Scope, ilgili değişkenlere ulaşabildiğimiz alanı temsil eder. Global Scope ve Local Scope (Block Scope ve Function Scope) olmak üzere türleri vardır.*/

// ** Global Scopes   
/* Fonksiyonların ya da for, if veya while gibi blokların dışında tanımlanan değişkenlerin sahip olduğu Scope türüdür. Bu değişkenlere her yerden ulaşılabilir.*/

var ısım= 'Ozlem'


function logName(){
    var ısım = 'yigit';
    var age = 24
    console.log('function scope',age, ısım)
}

// console.log(age)   fonksiyon dışarısına çıktığımız zaman console.log ile age ulaşamayız hata verir. 


if(true){
    var age = 22
    console.log('block scope',age,ısım);
}

//fonksiyonlar kendi scope'larını oluşturur.
// Block'lar yeni scope oluşturmaz.

logName();
console.log(ısım);



// ** Local Scopes
/* Global Scope’da belirtilen yapıların içerisinde tanımlanmış ve sadece tanımlandığı alan içerisinden ulaşılabilen değişkenlerin sahip olduğu scope türüdür. ES6 ile gelen let ve const’un sahip olduğu Block Scope ve Function Scope kavramlarını örnekler üzerinden açıklayacağım.*/ 

console.log('************************');

if(true){
    var model = 'Opel';
    let year = 2016;
    const color = 'white';
    console.log('block scope',model,year,color);
}

// ES6 ile gelen let ve const block scope oluşturur.

var i = 1;
for(var i=0; i<10;i++){
    console.log('i',i);
}

console.log(i)