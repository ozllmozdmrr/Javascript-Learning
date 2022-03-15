// Numbers

let val;
// val = Number('10');
// val = parseInt('10');
// val = parseFloat('10.5');
// val = parseInt('a10');   NaN döndürüyorsa bu sayıya çevrilemeyecek bir değeri temsil ediyor.
// val = isNan('10'); false döner
// val =isNan('a10'); true döner 

var num = 10.12456789;
val = num.toPrecision(6);
val = num.toFixed(2);
// toPrecision & toFixed arasındaki fark tofixed virgülden sonraki kısmı temsil ediyor (2)--->iki basamak 

val = Math.PI; // pi sayısı
val = Math.round(2.4); //Math.round() işlevi, en yakın tam sayıya yuvarlanmış bir sayının değerini döndürür.

val = Math.ceil(2.4); // Math.ceil() işlevi, bir sayıyı her zaman bir sonraki en büyük tam sayıya yuvarlar
val = Math.floor(2.4); // Math.floor() işlevi, belirli bir sayıdan küçük veya ona eşit en büyük tamsayıyı döndürür.
val = Math.sqrt(64); // Math.sqrt() işlevi, bir sayının karekökünü döndürür;
val = Math.pow(2,4) // Taban ve üs olmak üzere iki bağımsız değişken verilen Math.pow() statik yöntemi, taban üssü döndürür.
val = Math.abs(-50);// Math.abs() işlevi, bir sayının mutlak değerini döndürür. Yani, x pozitif veya sıfırsa x'i, x negatifse x'in olumsuzunu döndürür.
val = Math.min(98,109,6,12,576,29); // Math.min() statik işlevi, kendisine iletilen en düşük değerli sayıyı veya herhangi bir parametre sayı değilse ve sayıya dönüştürülemiyorsa NaN değerini döndürür.---> 6
val = Math.max(7,298,135,30,487,476,139); // Math.max() işlevi, giriş parametreleri olarak verilen sıfır veya daha fazla sayıdan en büyüğünü veya herhangi bir parametre sayı değilse ve sayıya dönüştürülemiyorsa NaN'yi döndürür. ---> 487
val = Math.random()*10; // Math.random() işlevi, 0 ile 1'den küçük (0 dahil, ancak 1 değil) aralığında kayan noktalı, sözde rasgele bir sayı döndürür ve bu aralık üzerinde yaklaşık olarak tek biçimli dağılım gösterir; bu sayıyı daha sonra istediğiniz şekilde ölçekleyebilirsiniz. Aralık. Uygulama, rastgele sayı üretme algoritmasının ilk tohumunu seçer; kullanıcı tarafından seçilemez veya sıfırlanamaz.
val = Math.floor(Math.random()*10); // .floor sayesinde virgül kısmını kaldırdık 0-9 arası sayı vericek .





console.log(val);
console.log(typeof val); 