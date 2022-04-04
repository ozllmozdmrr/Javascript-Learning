// Creating Elements

// create element
const li = document.createElement('li'); //  *** Yeni bir öge (node) oluşturmak için createElement() metodu kullanılır. **

// add class  
li.className ='list-group-item list-group-item-secondary';

// attribute
li.setAttribute('title','new item');
li.setAttribute('data-id','5');

// text node   (etiketin içerisini text oluşturmak )

const text = document.createTextNode('new item'); // ** Bir metin içeriği belirtmek için ise createTextNode() metodu kullanılır.  ** 
li.appendChild(text);   // ** Oluşturulan bu ögeleri projeye eklemek için appendChild() veya insertBefore() metodu kullanılır **

/*
** appendChild() Metodu ** :
        Bir ögeyi başka bir ögeye  taşımak veya yeni ögeyi eklemek için kullanılır. Parantez
 içerisinde eklemek istediğimiz yeni öge belirtilir.

** insertBefore() metodu ** :
        ögeyi belirtilen yerin önüne ekler.Parantez iki parametre belirtilir. İlk parametre, eklenecek ögeyi , ikinci parametre ise önüne ekleneceği yeri işaret eder.
*/


const a = document.createElement('a');
a.setAttribute('href','#')
a.className ='delete-item float-right';
a.innerHTML ='<i class="fas fa-times"><*i>'; //İnnerHTML bir alandaki metni html kodlarıyla almamıza ve bir alan html kodlarıyla beraber metin koymamıza yarıyor. 

// append a to li
li.appendChild(a);

// append li to ul

document.querySelector('#task-list').appendChild(li);

console.log(li)
