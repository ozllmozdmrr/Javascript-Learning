// template literals
/* Template Literal JavaScript'te stringlerimizi daha güzel ve dinamik bir şekilde biçimlendirmemizi sağlar. Kullanımı oldukça basittir. Bilindiği üzere, JavaScript'te tek tırnak ('') veya çift tırnak (“”) ile string oluşturabiliyoruz. */

const fullname = 'Ozlem Ozdemir';
const city = 'Eskişehir';
const yearOfBirth = 2000;

let val;

val ='my name is '+fullname+
    'I\'m '+(2022-yearOfBirth)+' years old'+
    'and I live in '+city;

// ternary operator    
val = `my name is ${fullname} I'm ${(2022-yearOfBirth>=22)?'over 22':'under 22'}
years old and I live in ${city}`;    

console.log(val);
