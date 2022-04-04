const taskList = document.querySelector('#task-list')

/********** Removing Element ( Nesne Silme) ***********/

// taskList.remove(); ---> Belirtilen bir ögeyi (node) silmek için .remove()metodu kullanılır.   
//taskList.childNodes[7].remove();
// taskList.children[3].remove();
//taskList.removeChild(taskList.children[3]);

// *** removing attribute 
// taskList.children[2].removeAttribute('class');

/*
 for(let i=0;i<taskList.children.length;i++){
     taskList.children[i].removeAttribute('class');
}
*/


//**********   Replacing Elements  (Nesne Değiştirme)  ***********/

/* Bir ögenin bir aLt ögesini başka bir öge ile değiştirmek için replaceChild() parantez içerisinde iki parametre bulunur. İlk parametre, yeni ögeyi , ikinci parametre ise değiştirilecek ögeyi temsil eder. */

// const cardHeader = document.querySelector('.card-header');

// // create element

// const h2 = document.createElement('h2');
// h2.setAttribute('class','card-header');
// h2.appendChild(document.createTextNode('My List'));

// const parent = document.querySelector('.card');
// parent.replaceChild(h2,cardHeader)


// ** Classes  (class değerini değiştirme)
 
let val;
link = taskList.children[0].children[0];


// val = link.className;
// val = link.classList;
// val = link.classList[0];
// val = link.classList[1];

link.classList.add('new');  // classlist 'e yeni bir class eklenir.
link.classList.remove('new');  // gelen elemanı sileriz.

//Attributes

val = link.getAttributes('class');

console.log(val);