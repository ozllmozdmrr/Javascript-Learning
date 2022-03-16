// "switch" sorgusu , farklı koşullar için farklı eylemler oluşturmak için kullanılır.
/* ilk olarak bir ifade belirlenir. Daha sonra "case" terimi kullanılarak belirtilen ifade için koşullar oluşturulur. 
Eğer ifade bu koşulu sağlıyoe ise o "case" bloğundaki kodlar çalışır.

**  "Break" ifadesi , "case" bloğundaki kodlar çalıştıktan sonra switch sorgusundan çıkmak için kullanılır.Bu şekilde diğer "case" ifadelerini kontrol etmeden sorgudan çıkar. Son sorgu ifadesinden sonra bu ifadenin kullanılması şart değildir.
*/

let category = 'kedi';

switch (category) {

    case 'telefon':
        console.log('telefon kategorisi');
        break;
    case 'bilgisayar':
        console.log('bilgisayar kategorisi');
        break;
    default:
        console.log('yanlış kategori');
}

/* "Default" ifadesi , eğer hiçbir "case" ifadesindeki sorgu gerçekleşmez ise "default" ifadesi içerisindeki kodlar çalışır.
*/

let day;

switch (new Date().getDay()) {
    case 0:
        day = 'Pazar';
        break;
    case 1:
        day = 'Pazartesi';
        break;
    case 2:
        day = 'Salı';
        break;
    case 3:
        day = 'Çarşamba';
        break;
    case 4:
        day = 'Perşembe';
        break;
    case 5:
        day = 'Cuma';
        break;
    case 6:
        day = 'Cumartesi';
        break;

}
console.log(`bugün günlerden ${day}`);

//    Veya   //

switch (new Date().getDay()) {
    case 0:
    case 6:
        day = 'Hafta Sonu';
        break

    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        day = 'Hafta İçi';
        break
}
console.log(`bugün ${day}`);

/// if-else deki örneğe devam //

const age = 22;
const firstName = 'Ozlem';

switch(true){
    case age > 0 && age < 12:
        console.log(`${firstName} is a chid`);
        break;
    case age >= 13 && age <= 22:
        console.log(`${firstName} is a teenager`);
        break
    default :
        console.log(`${firstName} is an adult`);
}



