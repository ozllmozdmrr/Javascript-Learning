var trafigeCikis = new Date('06/11/2017');
trafigeCikis.setHours(0,0,0,0);
var trafiktekiMs = Date.now() - trafigeCikis.getTime();
var trafiktekiGun = Math.floor(trafiktekiMs/(1000*60*60*24));

if (trafiktekiGun <= 365){
    console.log('1.Servis bakım süreniz geldi');
}else if (trafiktekiGun > 365 && trafiktekiGun <= 365*2){
    console.log('2.Servis bakım süreniz geldi');
}else if ( trafiktekiGun >365*2 && trafiktekiGun <= 365*3){
    console.log('3.Servis bakım süreniz geldi');
}else{
    console.log('Bilinmeyen bir süre');
}

console.log(trafiktekiGun);
