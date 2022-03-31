// Selecting Elements
// ** Single Elements


//tek bir eleman seçerken document.getElementById kullanılır.
let val;
val = document.getElementById('header');
val = document.getElementById('header').id;
val = document.getElementById('header').className;

// her seferinde getElementById kullanmak zorunda değilsiniz . bir farklı kullanımı aşağıdaki gibi 
//val = document.getElementById('header');
//  val = val.id;
// val = val.className;
val = document.getElementById('header');

val.style.color='orange';
val.style.fontSize = '50px';
val.style.fontWeight = 'bold'; 

val = document.getElementById('header').innerText= 'my toDo App';
console.log(val)

// *************************************************** //

// document.querySelector()

/* querySelector() yöntemi, belirtilen CSS ile eşleşen birinci elemanı döner selector(s) belgesinde. Not: querySelector() metodu sadece belirtilen seçiciler uyan ilk elemanı ile döner. Tüm maçları dönmek kullanmak için querySelectorAll() yerine yöntemi.*/ 

console.log(document.querySelector('#header'));
console.log(document.querySelector('.card-header'));
console.log(document.querySelector('h1'));
console.log(document.querySelector('div'));
console.log(document.querySelector('li').style.color='red')
console.log(document.querySelector('li:last-child').style.color='blue'); // son eleman mavi
console.log(document.querySelector('li:nth-child(2)').style.color='green') // 2.kısım yeşil
console.log(document.querySelector('li:nth-child(3)').style.color = 'purple') // 3.kısım mor
console.log(document.querySelector('li:nth-child(1)').textContent ='Ozlem');
console.log(document.querySelector('li:nth-child(2)').textContent ='Yigit');
console.log(document.querySelector('li:nth-child(3)').textContent ='Alperen');
console.log(document.querySelector('li:nth-child(4)').textContent ='Ezgi');