var result = prompt("who's there ?");

if (result == 'cancel'){
    console.log('cancelled');
}else if (result == 'Admin'){

    var password = prompt('enter your password : ');

    if(password == 'cancel'){
        console.log('cancelled');
    }else if(password == '123456789'){
        console.log('Welcome Admin')
    }else{
        console.log('I dont know you')
    }
}else{
    console.log('I dont know you');
}