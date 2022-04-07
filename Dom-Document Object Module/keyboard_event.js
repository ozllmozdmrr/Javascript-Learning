// Kullanıcı herhangi bir tuşa bastığında gerçekleşicek olan olaylar. 

const input = document.querySelector('#txtTaskName');

input.addEventListener('keydown',eventHandler);  // Tuşa basıldığında tuşa basma gerçekleşir ve tuşa uzun süre basıldığında otomatik olarak tekrarlanır.
input.addEventListener('keyup',eventHandler); // Anahtar serbest bırakıldığında keyup gerçekleşir.
input.addEventListener('keypress',eventHandler); // Bu olay, bir alfabetik, sayısal veya noktalama tuşuna basıldığında tetiklenir.
input.addEventListener('focus',eventHandler);


function eventHandler(e){
    console.log('event type' + e.type);
    console.log('key code:'+ e.keyCode);
    console.log('value :'+ e.target.value);
}