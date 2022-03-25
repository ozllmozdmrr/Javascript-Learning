// Demo : Functions

var hesapA = {
    ad : 'Ezgi Özdemir',
    hesapNo :'123456789',
    bakiye : 8000,
    ekHesap : 2000
}

var hesapB = {
    ad : 'Kaan Karatekin',
    hesapNo: '147852369',
    bakiye : 12000,
    ekHesap: 3000
}

function paraCek(hesap,miktar){
    console.log(`Merhaba ${hesap.ad}`);

    if(hesap.bakiye >= miktar){
     hesap.bakiye = hesap.bakiye - miktar;
        console.log('Paranızı alabilirsiniz');
    }else{
        var toplam = hesap.bakiye + hesap.ekHesap;

        if(toplam >= miktar){
            if(confirm('Ek hesabınızı kullanmak ister misiniz ?')){
                console.log('Paranızı alabilirsiniz');
                var bakiye = hesap.bakiye;
                var ekHesap = miktar - bakiye;
                hesap.bakiye = 0;
                hesap.ekHesap = hesap.ekHesap -ekHesap;
            }else{
                console.log(`${hesap.hesapNo} nolu hesabınızda ${miktar} bulunmamaktadır.`)
            }
        }else{
            console.log('üzgünüz bakiye yetersiz')
        }
    }
}

paraCek(hesapA,8000);
paraCek(hesapA,1000);