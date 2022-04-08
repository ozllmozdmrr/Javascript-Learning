// Kullanıcı herhangi bir tuşa bastığında gerçekleşicek olan olaylar. 

const input = document.querySelector('#txtTaskName');

const form = document.querySelector('form');

const select = document.querySelector('#select');

 input.addEventListener('keydown',eventHandler);  // Tuşa basıldığında tuşa basma gerçekleşir ve tuşa uzun süre basıldığında otomatik olarak tekrarlanır.
 input.addEventListener('keyup',eventHandler); // Anahtar serbest bırakıldığında keyup gerçekleşir.
 input.addEventListener('keypress',eventHandler); // Bu olay, bir alfabetik, sayısal veya noktalama tuşuna basıldığında tetiklenir.
 input.addEventListener('focus',eventHandler); // Mevcut pencereye odaklanır.
 input.addEventListener('blur', eventHandler);  // Mevcut pencereden odağı kaldırır.
 input.addEventListener('cut',eventHandler); //kopyala
 input.addEventListener('paste',eventHandler);  // yapıştır.
 input.addEventListener('select',eventHandler);

 form.addEventListener('submit',eventHandler);

select.addEventListener('change',eventHandler);

function eventHandler(e){
    console.log('event type ' + e.type);
     // console.log('key code:'+ e.keyCode);
     console.log('value :'+ e.target.value);

    // e.target.style.backgroundColor='blue'

    // e.preventDefault();
}
