// functions
/******     RETURN NEDİR 
 * return fonksiyon içerisinde her yerde kullanılabilir. 
 * Kod return satırına eriştiğinde fonksiyon durur ve değer fonksiyonun çağırıldığı yere geri gönderilir. 
 * Bir fonksiyon içerisinde birden fazla return fonksiyonu da olabilir.
*******/


function yasHesapla(dogumYili){
    return 2018-dogumYili;
}

let ageAli = yasHesapla(1953);
let ageBeyza = yasHesapla(1995);
let ageMehmet = yasHesapla(1999);

console.log(ageAli);
console.log(ageBeyza);
console.log(ageMehmet);

function emekligeKacYilKaldi(dogumYili,isim){
    let yas = yasHesapla(dogumYili);
    let emeklilik = 65 - yas;

    if(emeklilik > 0){
        console.log(`${isim} Emekli olmanıza ${emeklilik} yıl kaldı`);
    }else{
        console.log(`${isim} Zaten emekli oldunuz`);
    }
}

emekligeKacYilKaldi(1953,'Ali');
emekligeKacYilKaldi(1995,'Beyza');
emekligeKacYilKaldi(1999,'Mehmet');
