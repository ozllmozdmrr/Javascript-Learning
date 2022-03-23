let cats = ['Calypso', 'Kivi','Dark'];
let people =[
    {firstName: 'Ozlem',lastName:'Ozdemir', age:22},
    {firstName: 'Yigit',lastName:'Erbil', age:24},
    {firstName: 'Mert',lastName: 'Ates', age:20}
];

// console.log(cats[0]);
// console.log(cats[1]);
// console.log(cats[2]);

for (let i=0; i<people.length;i++){
    console.log(people[i].firstName);
};

/*Döngüler, her seferinde farklı bir değerle aynı kodu tekrar tekrar çalıştırmak istiyorsanız kullanışlıdır. 
Dizilerle çalışırken genellikle durum budur:*/

for (let i=0;i<cats.length;i++){
    console.log(cats[i]);
}

// for-in (For in döngüsü dizi ve nesnelerin değerlerine ulaşmak için kullanılır.

// Arrays
for (let i in cats){
    console.log(`index : ${i} value : ${cats[i]}`)
}
console.log(cats)

//Objects
for (let i in people){
    console.log(`index : ${i} value : ${people[i].firstName}`);
}


//foreach  

/* foreach, dizi (array) ve koleksiyon (collection) tabanlı nesnelerin elemanları üzerinden ilerleyen, iterasyon gerçekleştirerek bu elemanlara erişip iş katmanınızı oluşturabileceğiniz bir döngüdür.Bu döngünün genel kullanımı aşağıdaki gibidir:

foreach (tip değişken in koleksiyon)

{

yapılacak işler

}

değişken: foreach döngüsü içinde iterasyon için kullanılacak değeri temsil eder.
koleksiyon: Dizi, ArrayList, Generic List, Dictionary gibi aynı tipleri barındıran liste yapılarıdır.
tip: Her döngüde kullanılacak ve içinde farklı değerlerin bulunacağı değişkenin string, int, byte gibi ilgili tipinin belirtildiği alan.

*/

cats.forEach(function(item){
    console.log(item);
});

people.forEach(function(item){
    console.log(item.lastName);
});

// map: returns an array
/*
map() yöntemi, çağıran dizideki her öğede sağlanan bir işlevi çağırmanın sonuçlarıyla doldurulmuş yeni bir dizi oluşturur.
*/

let val = people.map(function(item){
    return item.firstName + ' ' + item.lastName + ' '+ item.age;
});
console.log(val);


// bütün elemanların karesini alıyoruz
let numbers = [1,5,6,8,10];

let num =numbers.map(function(n){
    return n*n;
});
console.log(num);