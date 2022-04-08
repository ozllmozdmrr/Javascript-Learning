const form = document.querySelector('form');
const cardBody = document.querySelector('.card-body');
const card = document.querySelector('.card');
const container = document.querySelector('.container');


// // Event Bubbling /*  içten dışa doğru   */
 form.addEventListener('click',function(e){
     console.log('form');
     e.stopPropagation();
 });

 cardBody.addEventListener('click',function(e){
     console.log('card body');
     e.stopPropagation();
 });

 card.addEventListener('click',function(e){
     console.log('card');
     e.stopPropagation();
 });

 container.addEventListener('click',function(e){
     console.log('container');
    e.stopPropagation();
 });




// Event Capturing  // Dıştan içeri doğru 

 form.addEventListener('click',function(e){
     console.log('form');
     e.stopPropagation();
 },true);

 cardBody.addEventListener('click',function(e){
     console.log('card body');
     e.stopPropagation();
 },true);

 card.addEventListener('click',function(e){
     console.log('card');
     e.stopPropagation();
 },true);

 container.addEventListener('click',function(e){
     console.log('container');
     e.stopPropagation();
 },true);


/*************** ÖRNEK *****************/

 const deleteItems = document.querySelectorAll('.fa-times');

 deleteItems.forEach(function(item){
     item.addEventListener('click',function(e){
         console.log(e.target);
    })
 });

/******** VEYA  ÜST ELEMANDAN ALT ELEMENA  *********/ 

const ul = document.querySelector('ul');

ul.addEventListener('click',function(e){  // ul 'ye event ekledik , ul den iç elemana geçiş yapma
   
   if(e.target.className==='fas fa-times'){
    // console.log('icon');
    // console.log(e.target);
    console.log(e.target.parentElement);

    
    e.preventDefault();
   }
});
