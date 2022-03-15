// Demo : Arrays

// "Bmw , Mercedes, Opel, Mazda" elemalarında sahip bir dizi oluşturun.
let car = ['Bwm','Mercedes','Opel','Mazda'];
// let car2 = new Array("Bwm","Mercedes","Opel","Mazda")  farklı kullanımı
console.log(car);
// Dizi kaç elemanlıdır?
console.log(car.length)
// Dizinin ilk ve son elemanı nedir?
console.log(car[0]);
console.log(car[3]);
// console.log(car [car.length-1]) farklı kullanım

// "Renault " değerini dizinin sonuna ekleyin
car[4] = 'Renualt';
// car.push('Renualt');
console.log(car);

// "Toyota" değerini dizinin başına ekleyin
car.unshift('Toyota');
console.log(car);
// "Renault" değerini siliniz
car.shift('Renault')
console.log(car);
// "Toyota" değerini siliniz
car.pop('Toyota');
console.log(car);
// Dizi elemanlarını ters çevirin
car.reverse();
console.log(car);
// Dizi elemanlarını alfabetik olarak sıralayın
car.sort();
console.log(car);
// [1,2,5,80,15] dizisini sıralayın
let numbers = [1,2,5,80,15];

function compare(a,b){
    if(a>b) return 1;
    if(a==b) return 0;
    if(a>b) return -1;
}

console.log(numbers.sort(compare))
// "Open" değeri dizinin bir elemanıdır?
console.log(car.indexOf('Opel'));
console.log(car.includes('Opel'));

// var str = "Chevrolet,Dacia";   -----> 
var str = "Chevrolet,Dacia";
var car2 = str.split(',');
console.log(car2);

// Oluşturulan 2 dizinin elemanlarını bir başka dizi ile birleştirin.
var car3 = car.concat(car2);
console.log(car3);

//Oluşturulan diziden son 2 elemanı siliniz.
// console.log(car3.pop());
// console.log(car3.pop());
console.log(car3.slice(6,8));
console.log(car3);

/* Aşağıda verilen elemanları bir dizi içerisinde saklayın.
    studentA : Yiğit Erbil 1998
    studentB : Özlem Özdemir 2000
    studentC : Mert Ateş 2001
*/

var studentA = ['Yigit','Erbil',1998];
var studentB = ['Ozlem','Ozdemir',2000];
var studentC = ['Mert','Ateş',2001];

var students = [studentA,studentB,studentC];

console.log(students[0]);
console.log(students[0][0]);
console.log(students[0][1]);
console.log(students[0][2]);

console.log(students[1][0]);
console.log(students[1][1]);
console.log(students[1][2]);

console.log(students[2][0]);
console.log(students[2][1]);
console.log(students[2][2]);

console.log(students);


