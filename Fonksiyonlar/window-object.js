// window object

let val;
var a = 10;  // global tanımlama
function abc (){
    return 0;
;}

val = window;

// ***  alert metodu  ***

alert('Do you really want to leave?');
/*Alert komutu kullanıcıyı bilgilendirmek için uyarı pencereleri oluşturma amaçlı kullanılır.*/

// *** prompt metodu ***
/* WEB sayfasına dışarıdan veri girişi yapabilmek için kullanılır. Prompt ile alınan bilgi string tipindedir. Herhangi bir değer girilmez ise geriye dönecek değer null olur. Aşağıdaki şekilde kullanılabilir:*/

 val = prompt('bir sayı giriniz');


// *** Confirm metodu ***
/* Yapılan işlem sonucu onay kutusu oluşturmak için kullanılır. Onay kutusunun sonucunda boolean ifade yani true ya da false değeri döner. Buna göre programın akışı belirlenebilir.*/

val = confirm('Emin misiniz ?');
if(val){
    console.log('Harika');
}else{
    console.log('Ah be abi');
}

// *** scroll metodu ***
val = window.scrollX; 
val =scrollX;   

//location 

val = window.location;
val = window.location.href;
val = window.location.hostname;
val = window.location.host;
val = window.location.protocol;


console.log(val);
