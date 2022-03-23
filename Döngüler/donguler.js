// Loops
/* "for" döngüsü, içerisindeki kod bloğunu bir koşa bağlı olarak belirtilen takrar sayısı kadar çalıştırır.
    ifade 1- Kod bloğu çalışmadan önce çalışır. (i=1)
    ifade 2-Kod bloğunu çalştırmak için koşul belirtir. (i<10)
    ifade 3-Kod bloğu her çalıştığında bu ifade içerisindeki kod çalışır. (i++)
Aşağıdaki örnekte;
    (i=1) içerisinde bir değişken tanımlamıştık
    (i<10) içerisinde bu değişken için bir koşul belirenmiştir.
    (i++) içerisinde bu değişken 1 arttılmıştır.
    
*/
 for loop
for (let i=1; i<=10; i++){                               
   
    if(i==3){
        console.log('uğurlu sayım :' +i);
        continue
    }

    if(i==8){
        console.log('uğurlu olmayan sayım:' +i);
        continue;
    }
    console.log(i)
}


/* while loop
"while" döngüsü için bir koşul belirlenir. Bu koşul ifadeninin sonucu true olduğu sürece döngü çalışır.*/

var x=1;
while(x<5) {
    document.write(x + ' ');
    x++;
}

/*"x" değişkenine 1 değeri atanmıştır."while"döngüsü içerisindeki koşula göre "x"değeri 5 sayısından küçük olduğu sürece 
döngü içerisindeki kod çalışacaktır.Sonsuz döngüye takılmamak için döngü içerisinde "x" değeri 1 arttırlmıştır.*/


for (let i=0; i<10;i++){
    console.log(i)
}

let i=0;
while(i<10){
    console.log(i);
    i++;
}


/* *** ** *** *** *** ** **** 
    ---- "Break" ve "Contınue" İfadesi
        "break" ifadesi döngüden çıkmak için kullanılır.
        "contınue" ifadesi döngünün o adımını atlamak için kullanılır.
* *** ** *** *** *** ** ****/


// do-while loop

//"do/while" döngüsünde koşula bakılmadan kod bloğu bir kez çalışır.Ardından koşul sorgulanır ve eğer koşul sağlanıyorsa kod bloğu çalışmaya devam eder.

let i=0; 
do{
    console.log(i);
    i++;

}while(i<10)


// "i" 10 dan başlayıp ve "i" 0 dan büyük olduğu sürece dönsün ve her seferinde bir azalsın !!

for (let i=10;i>0;i--){
console.log(i);
}

let toplam = 0;
for (let i=10;i>0;i--){
    toplam += i;
}
console.log(toplam)


// 10 ile 1 arasındaki çift sayıların çarpımı

let sonuc = 1;
for (let i=10;i>0;i--){
    if(i%2==0){
        sonuc*= i;
    }
   
}
console.log(sonuc)


// İç İçe FOR Döngüleri

let val= '\n';
for (let i=0;i<10;i++)
{
    for (let j=0;j<10;j++){
        val +=' * '
        // console.log(`i : ${i} j:${j}`);
    }
    val+='\n'
}
console.log(val)
