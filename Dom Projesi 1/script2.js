// DOM PROJESİ 1: TODO ELEMAN SİLME 

const form = document.querySelector('form');
const input = document.querySelector('#txtTaskName');
const btnDeleteAll = document.querySelector('#btnDeleteAll');
const taskList = document.querySelector('#task-list');


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

// add new item
function addNewItem(e) {
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
    
   if(confirm('are you sure?')){
        if (e.target.className === 'fas fa-times') {
            e.target.parentElement.parentElement.remove();
        }
   }
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

