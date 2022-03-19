
// let firstName = 'Ozlem';
// let lastName = 'Ozdemir';

// let firstName1 = 'Yigit';
// let lastName2 = 'Erbil';

// let ozlem = ['Ozlem','Ozdemir',22];
// let yigit = ['Yigit','Erbil',24];

let val ;

let person = {
    firstName : 'Ozlem',
    lastName : 'Ozdemir',
    age : 22,
    hobbies : ['game','book'],
    address : {
        city : 'Eskişehir',
        country : 'Turkey'
    },
    getBirthYear : function(){
        return 2022- this.age;
    }
};

val = person;
val = person.lastName;
val = person.firstName;
val = person.age;
val = person.hobbies;
val = person.hobbies[1];
val = person.hobbies.length;
val = person.address;
val = person.address.city;
val = person.address['country'];

val = person.getBirthYear();


let people= [
                 {firstName : 'Mert',lastName :'Ates'},
                 {firstName : 'Emre',lastName :'Tas'},
                 {firstName : 'Buse',lastName :'Cagıran'}
            ];

console.log(people);

val = people[2];
val = people[2].firstName;

for(let i =0; i<people.length;i++){
    console.log(people[i].lastName);
}

// console.log(val);
// console.log(typeof people);