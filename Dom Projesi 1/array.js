// DOM PROJESİ 1: TODO ELEMANLARINI DİZİDEN SAYFAYA AKTARMA

const form = document.querySelector('form');
const input = document.querySelector('#txtTaskName');
const btnDeleteAll = document.querySelector('#btnDeleteAll');
const taskList = document.querySelector('#task-list');
const items = ['item 1','item 2','item 3','item 4'];

// load items
loadItems();


// call event listeners 
eventListeners();

function eventListeners() {
    // submit event
    form.addEventListener('submit', addNewItem);

    // delete an item
    taskList.addEventListener('click', deleteItem);

    // delete all items
    btnDeleteAll.addEventListener('click', deleteAllItems);
}

function loadItems(){
    items.forEach(function(item){   // her bir itemın içindeki eleman item içerisine kopyalansın 
        createItem(item)      // ve kopyalandığı an gelip createItem fonksiyonuyla item gönderip elemanı oluşturucaz.
    });
}

function createItem(text){
    // create li 
    const li = document.createElement('li');
    li.className = 'list-group-item list-group-item-secondary';
    li.appendChild(document.createTextNode(text));

    // create a 
    const a = document.createElement('a');
    a.classList = 'delete-item float-right';
    a.setAttribute('href','#');
    a.innerHTML = '<i class="fas fa-times"></i>';

    // add a to li 
    li.appendChild(a);

    // add li to ul 
    taskList.appendChild(li);
}

function addNewItem(e){
    
     if(input.value === ''){
     alert('add new item');
     }

     //creat item
     createItem(input.value)

     // clear input
     input.value = '';

    e.preventDefault();
}
// delete an item 
function deleteItem(e) {
    /* Tıkladığımız elemanın gerçekten ikon olup olmadığını kontrol ediyoruz. 

    if(e.target.className==='fas fa-times'){
        console.log(e.target)
    }*/

    // e.target = icon
    // 1.parentElement = a
    // 2.parentElement = li
    // remove = eleman silme
    

        if (e.target.className === 'fas fa-times'){
            if(confirm('are you sure?')){
            e.target.parentElement.parentElement.remove();}
        }
    e.preventDefault();
}
// delete all items
function deleteAllItems() {
/* task-list 'in içindeki bütün li 'leri silmiş oluruz  */
    if (confirm('are you sure?')) {
        taskList.childNodes.forEach(function (item) {
            // console.log(item) = text notlar ile karşımıza gelir
            if (item.nodeType === 1){
                item.remove();  // kendini silsin
            }
        });
    }

    //1. Yöntem taskList.innerHTML= '';
    //2. Yöntem : Bir fonksiyon oluşturuyoruz , fonksiyonun içerisine 'item' ger ve item 'taskList' 'in içerisindeki her bir elemanı sırayla içine kopyalıyoruz.
    // Eğer bana gelen itemların nottypeları 1'e eşitse element işlemi burda bize sadece li'leri getiricek textnote'ları gelmez.
}

