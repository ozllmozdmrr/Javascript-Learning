// Demo : Operators

// 1- Arda ve Pelin 'nin boy ve kg bilgilerini alın
// 2- Alınan bilgilere göre kilo endekslerini hesaplayınız.
// ** Gormül : Kişinin Kilosu / Boy uzunluğunun karesi 
// 3- Hesaplanan indeks bilgisine göre karşılaştırma yapınız.
// 4- Aşağıdaki tabloya göre arda ve pelin hangi gruba giriyor. 


// 0 -18,24: Zayıf
// 18,5 - 24,9 : Normal
// 25,0 - 29,9: Fazla Kilolu
// 30,0 -34,9 : Şişman (Obez)

let IndexArda ;
let IndexPelin;


const kgArda = 60;
const kgPelin = 70;

const heigtArda = 1.70;
const heigtPelin = 1.60;

IndexPelin = (kgPelin) / (heigtPelin*heigtPelin);
IndexArda = (kgArda) / (heigtArda*heigtArda);

console.log(IndexPelin.toFixed(),IndexArda.toFixed())
 
let pelinHigherIndex = IndexPelin > IndexArda;
console.log("Pelin'nin kilo indeksi Arda'nın kilo indeksinden daha büyük mü? :" + pelinHigherIndex)

let PelinZayıf =  (IndexPelin >= 0) && (IndexPelin <= 18.4);
let PelinNormal = (IndexPelin >= 18.5) && (IndexPelin <= 24.9);
let PelinKilolu = (IndexPelin >= 25) && (IndexPelin <= 29.9);
let PelinSisman = (IndexPelin >= 30) && (IndexPelin <= 34.9);

console.log("Pelin Zayıf :"+PelinZayıf);
console.log("Pelin Normal :"+PelinNormal);
console.log("Pelin Kilolu :"+PelinKilolu);
console.log("Pelin Sisman :"+PelinSisman);

let ArdaZayıf =  (IndexArda >= 0) && (IndexArda <= 18.4);
let ArdaNormal = (IndexArda >= 18.5) && (IndexArda <= 24.9);
let ArdaKilolu = (IndexArda >= 25) && (IndexArda <= 29.9);
let ArdaSisman = (IndexArda >= 30) && (IndexArda <= 34.9);

console.log("Arda Zayıf :" +ArdaZayıf);
console.log("Arda Normal :"+ArdaNormal);
console.log("Arda Kilolu :"+ArdaKilolu);
console.log("Arda Sisman :"+ArdaSisman);