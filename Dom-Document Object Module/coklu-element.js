// Selecting Elements

// *** Single Elements
//    *** document.getElementById()
//    *** document.querySelector()


// *** Multiple Elements
//    *** class name
//    *** document.getElementsByClassName()

let val;
val = document.getElementsByClassName('list-group-item');
// val = document.getElementsByClassName('list-group-item')[0];
// val = document.getElementsByClassName('list-group-item')[2];
 
//val = val[2];  Tekrar elemanı seçip index numarasına gitmektense seçtiğimiz eleman üzerinden direk index numarasını alabiliriz.

// val[0].style.color ='red';
// val[1].style.color ='greenyellow';
// val[2].style.color ='blue';
// val[3].style.color ='orange' ;
// val[0].style.fontSize = '30px';
// val[3].textContent ='new item';

// for(let i=0; i<val.length;i++){
//     console.log(val[i].style.color='red');
//     console.log(val[i].textContent = 'New item')
// }
// console.log(val);


// ************************************* //

// document.getElementsByTagName

//val = document.getElementsByTagName('li');
// val = document.getElementsByTagName('a')

// console.log(val)

// **** document.querySelectorAll() ****

// val = document.querySelectorAll('li');
//  val.forEach(function(item ,index){
//     // console.log(item)
//     item.textContent= `${index}- Hello`
// });

val = document.querySelectorAll('li:nth-child(odd)'); // odd tekil seçimler
val = document.querySelectorAll('li:nth-child(even)'); // even çoğul seçimler

val.forEach(function(item){
    item.style.background = 'yellow';
});
console.log(val)
