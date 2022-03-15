
let num1 = '10';   // string
let num2 = '2';
console.log(typeof num1);
console.log(num1 + num2);  // 102 (string birleştirme işlemi) 

/* Değerler her zaman sayısal değer olmayabilir string bir değer olabilir,
biz bunu işleme almadan önce tür dönüşümüyle istediğimiz veri türüne dönüştürebiliriz.*/

let num3 = Number('5') ;
let num4 = Number('20'); 

let total = num3 + num4;

console.log(total);
console.log(typeof total);

// number to string
let val;
val = String(10);

// Bool to string
val = String(true);

// date to string 
val = String (new Date()); 

// array to string
val = String([1,2,3,4,5]); // , dahil karakter uzunluğunu verir 

// toStrign ()
val = (10).toString();   // Sayısal bir ifadenin sonunda .toString dediğimi zaman tanımlamada String çevirir.
val = (false).toString(); 

// String to number

val = Number('10');
val = Number(true);  // true bir number ve 1.0 a karşılık geldiğini görürüz . Yani true değerinin sayısal karşılığı 1 .
val = Number(false); // False değerinin sayısal karşılığı 0 .
val = Number(null);  // Null değernin sayısal karşılığı 0.
val = Number ('a'); // NaN verir bu da 'a' değerinin sayısal bir karşılığı olmadığını ifade eder.
val = Number([1,2,3,4]); // NaN String bir ifadenin nasıl bir sayısal ifadeye cevrilmiyorsa dizi içinde aynı şey geçerli.

//parseInt (Number metoduna karşılık geliyor )
//parseFloat (Number metoduna karşılık geliyor )

val = parseInt('10');
val = parseInt('10.5'); // ondalık bir sayıyı tam sayıya yuvarlar --  10
val = parseFloat('10.5') // 



console.log(val);  // 10
console.log(typeof val);  //string
// console.log(val.length) // karakter uzunluğunu verir 
console.log(val.toFixed(2)); // number özel eleman 



