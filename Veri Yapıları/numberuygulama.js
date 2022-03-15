var num = 15.123456789  

// toplamda 3 basamaklı sayı kullan
console.log(num.toPrecision(3));

// ondalık kısmı 3 basamakla sınırla
val = num.toFixed(3); 

// en yakın sayıya yuvarla
val = Math.round(num); 

// aşağıya yuvarla
val = Math.floor(num); 

// yukarı yuvarla
val = Math.ceil(num); 

// 1,2,10,56,20 sayılarından en küçüğü ve en büyüğünün bul
val = Math.min(1,2,10,56,20);
val = Math.max(1,2,10,56,20); 

// sayı aralığını kullanıcının belirleyeceği rastgele bir sayı üretin
var min = 10;
var max = 30;
val = Math.floor(min+Math.random()*(max-min)); 
console.log(val);
console.log(typeof val)


/* bir personelin yaptğı mesai 'ye göre aldığı maaşı hesaplayalım.
   ** Brüt maaş: 3700 TL
   ** Brüt mesai : 10.3 TL
   Ağustos ayı mesai toplamı 42 saat ise toplam brüt maaş nedir ?
   Brüt maaş üzerinden toplmam kesinti oranı %25 alınacak toplam net maaş nedir?
*/

var brutMaas = 3700;
var mesaiUcreti = 10.3;
var mesaiSuresi = 42;

var toplamBrutMaas = brutMaas + (mesaiUcreti * mesaiSuresi); // 4132.6

var toplamNetMaas = toplamBrutMaas - toplamBrutMaas * 0.25;

console.log(toplamBrutMaas) // brüt maaş
console.log(toplamBrutMaas.toFixed(2),toplamNetMaas.toFixed(2)) // net maai