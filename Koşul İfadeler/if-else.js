// if-else statements

// "İF" KOŞUL İFADESİ, KOŞUL DOĞRU OLDUĞU ZAMAN GERÇEKLEŞECEK KOD BLOĞUNU İÇERİR.
// "ELSE" KOŞUL İFADESİ, "İF" SORGUSUNDAKİ KOŞUL KARŞILANMIYOR İSE GERÇEKLEŞECEK KOD BLOĞUNU İÇERİR.

// --> "ELSE İF" KOŞUL İFADESİ, "İF" SORGUSU YANLIŞ İŞE SORGULANACAK KOŞULU İÇERİR. EĞER KOŞUL DOĞRU İSE GERÇEKLEŞECEK KOD BLOĞUNU İÇERİR.

/*

******* KARŞILAŞTIRMA OPERATÖRLERİ *******

== Eşittir
=== Eşit değer ve aynı tür
!= Eşit değil
!== Eşit olmayan değer veya aynı olmayan tür
< Küçüktür
> Büyüktür
>= Büyük Eşittir
<= Küçük Eşittir 

******* MANTIKSAL OPERATÖRLERİ *******

&& Ve 
|| veya 
! değil

*/

const firstName = 'Ozlem';
const age = 22;
const isStudent = false;
const school = 'university';

 if (firstName ==='Ozlem'){
     console.log('Merhaba Ozlem');
 }

 if (age === 22){
     console.log('yaşınız 22');
 }

 if (isStudent){
     console.log('Merhaba Oğrenci');
}else{
     console.log('hatalı bilgi');
 }

if (age >= 18){ 

    if ((school == 'university') || (school == 'high school')){
    console.log('Ehliyet alabilirsiniz');
    }else{
    console.log('Egitim durumunuz yetersiz')
    }
}else{
    console.log('Ehliyet alamazsınız');
} 


if (age > 0 && age < 12){
    console.log(`${firstName} is a chid`);
}else if (age >= 13 && age <= 22){
    console.log(`${firstName} is a teenager`);
}else{
    console.log(`${firstName} is an adult`)
}

// undefined

let id ='1235465';// eğer bu tanım yoksa "no id " döner

if (typeof id !== 'undefined'){
    console.log('id:'+ id);
}else{
    console.log('no id');
}