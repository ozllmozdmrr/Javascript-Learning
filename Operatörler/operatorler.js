// Operatörler
    let val ;               
    const a = 10; 
    const b = 5;
    const c = 5;
    let d = 3;

// 1- Aritmetik Operatörler
    val = a + b; // 15 Number
    val = a - b; // 5 Number
    val = a * b; // 50 Number
    val = a / b; // 2 NUmber
    val = a % b; // 0 Number
    val = d++;   // "c" nin içerisine ilk başta "val" içe ata , daha sonra "c" değerini arttır ve ekrana 4 olarak yazdı.
    val = ++d;   // "c" nin içini bir arttırdıkdan sonra val içerisine attı ekrana 5 olarak yazdı.
    val = --d; 
    val = d--;

    // 2- Atama Operatörleri
    val = a;  // 10
    val +=a ; // 20 değeri gelir çünkü en son val değişkenin içi 10 du ve a değişkenin içi de 10 burda 10 ile a yı topladı . ( val = val + a)
    val -= a; // val = val - a 
    val *= a; // val = val * a
    val /= a; // val = val / a
    val %= a; // val = val % a

 // 3- Karşılaştırma Operatörleri
    val = a==b;  // a ve b birbirine eşit mi ? False
    val = b==c; // b ve c birbirine eşit mi? True
    val = b===c;   // değer kontrolü ve type kontrolü yapılır 
    val = a!=b ;  // a , b ye eşit değil mi ?
    val = a!== b; 
    val = a > b; // a, b den büyük mü? 
    val = b < a;  // b , a dan küçük mü?
    val = a >= b;  // a , b den büyük mü ? eşit mi ?
    val = 5 >= 5 ; // true
    val = 4 >= 5; // false
// 4-  Mantıksal Operatörler

    // && (And)
        // true && true => true
        // true && false => false
        // false && false => false
    val = (a > b) && (a > c)
    val = (a > b) || (a < c)
    val = !(a > b);

    // || (Or)
        // true && true => true
        // true && false => true
        // false && false => false

    // ! (Not)
    // !true => false
    // !false =>true
console.log(val);
console.log(typeof val);