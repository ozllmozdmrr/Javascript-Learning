// Mouse events

const btn = document.querySelector('#btnDeleteAll');
const ul = document.querySelector('#task-list');


// // click
// btn.addEventListener('click',eventHandler)
// ul.addEventListener('click',eventHandler);

// function eventHandler(event){
//     console.log(`event type : ${event.type}`);
// }

//  double click

// btn.addEventListener('dblclick',eventHandler);

// function eventHandler(event){
//     console.log(`event type : ${event.type}`);
// }

//  mouse down
 btn.addEventListener('mousedown',eventHandler);

//  mouse up
 btn.addEventListener('mouseup',eventHandler);

//  mouse enter 
 ul.addEventListener('mouseenter',eventHandler);

// mouse leave
 ul.addEventListener('mouseleave',eventHandler);

// mouse over
 ul.addEventListener('mouseover',eventHandler);

//  mouse out
 ul.addEventListener('mouseout',eventHandler);

// mouse move
ul.addEventListener('mousemove', eventHandler);


function eventHandler(event){
    console.log(`event type : ${event.type}`);
}
