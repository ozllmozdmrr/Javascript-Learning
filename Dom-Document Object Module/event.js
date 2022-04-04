// Event Listeners

const btn = document.querySelector('#btnDeleteAll');
const btn2 = document.querySelector('#btnAddNewTask');

btn.addEventListener('click',function(e){
    
    let val;

    val = e

    val = e.target;
    val = e.target.id;  //  tıklanan objenin id bilgisini verir
    val = e.target.classList; // tıklanan objenin classlistini  verir.
    val = e.type; 


    console.log(val);
    console.log('btn clicked');

    e.preventDefault();
});

btn.addEventListener('click',btnClick);
btn2.addEventListener('click',btnClick);
// İKİ TANE AYRI NESNE ARACALIĞIYLA CLİCK ONAYINI AYNI  FONKSİYON ÜZERİNDEN GERÇEKLEŞTİRİYORUZ. 

function btnClick(){   
    console.log('btn clicked');
}
 

