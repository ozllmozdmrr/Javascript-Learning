// Arrays

let names = ['ozlem','yigit','kaan','ezgi','mert','ata','ulus','ece']
let years =[,1998,1991,2028,2000,2022,2020,1970,2017]
let mix =['ozlem','ozdemir',2000,null,undefined,['kitap','oyun']];

// // get array item
// console.log(names[1]);
// console.log(names[4]);
// console.log(names[5]);

// // set array item
// names[5] = 'alperen';
// names[6] = 'sena';
// names[7] = 'mehmet';

// // add item
// years.push(2026); // push ile sona bir eleman eklenir 
// years.unshift(2036) // unshift ile başa bir eleman eklenir

// // remove item ---> diziden bir eleman silmek
// years.pop() //son eleman silinir
// years.shift(); // en baştaki eleman gider

// // indexof ----> IndexOf metodunu göreceğiz bu metod ile kısa bir deyiş ile Array(dizi)'leriniz içerisinde arama gerçekleştirebilirsiniz.

// let index = names.indexOf('ezgi');
// console.log('index:' + index)

// // reverse  ----> Reverse () yöntemi bir diziyi yerinde ters çevirir. İlk dizi öğesi son, sonuncu ise ilk olur. 

// names.reverse();

// // sort
/*JavaScript sort fonksiyonu karşılaştırmak üzere iki değeri karşılaştırma fonksiyonuna gönderir ve karşılaştırma sonucunda negatif, sıfır ve pozitif değerine göre sıralama yapar. Örneğin; 40 ve 100 değerlerini karşılaştırırken sort fonksiyonu karşılaştırma fonksiyonunu çalıştırır.*/

// years.sort();

// // concat

/*Concat() metodu, dizileri birleştirmek için kullanılır. Birden fazla diziyi tek bir dizi haline getirir yani birleştirir. Birleştirmek için dizi sınırı yoktur ancak en az 1 dizi diğer bir dizi ile birleştirilebilir.*/


// let val = years.concat(names)
// console.log(val)

// splice 
// names.splice(2,0,'elma')
// names.splice(3,3,'çilek')

function over22(years){
    let age = 2022 - years;
    return age>=22;
}
// find
// let val = years.find(over22);

// filter
let val = years.filter(over22)

console.log(val)

console.log(names);
console.log(names.length);
console.log(typeof names);

// console.log(years);
// console.log(mix)