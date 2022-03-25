// Function Declarations

// function sum(a,b){
//     var c = a+b;
//     return c;
// }

// console.log(sum(195,3));

// Function Expressions

const sum = function(a,b){
    
    if(typeof a === 'undefined'){
        a = 0;
    }
    if(typeof b === 'undefined'){
        b = 0;
    }
    
    var c = a+b;
    return c;
}

// Diğer kullanımı 

// const sum = function(a=0,b=0){
//     var c = a+b;
//     return c;
// }




console.log(sum(10,30))
console.log(sum(10)); // NaN
console.log(sum(10,30,40)); // 10 ve 30 , a+b yerine geçer . 40 hesaplamaya katılmaz.
